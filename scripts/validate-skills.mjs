#!/usr/bin/env node
// Structural validation for skills/*/SKILL.md.
// Checks frontmatter, size limits, referenced files, and named section
// cross-references — the drift classes that have actually bitten this repo.

import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(root, "skills");
const errors = [];

for (const entry of readdirSync(skillsDir)) {
  const dir = join(skillsDir, entry);
  if (!statSync(dir).isDirectory()) continue;

  const skillPath = join(dir, "SKILL.md");
  if (!existsSync(skillPath)) {
    errors.push(`${entry}: missing SKILL.md`);
    continue;
  }

  const text = readFileSync(skillPath, "utf8");
  const fmMatch = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fmMatch) {
    errors.push(`${entry}: missing or malformed frontmatter`);
    continue;
  }

  const fm = fmMatch[1];
  const name = fm.match(/^name:\s*(.+)$/m)?.[1]?.trim();
  const desc = fm.match(/^description:\s*(.+)$/m)?.[1]?.trim();
  if (!name) errors.push(`${entry}: frontmatter missing "name"`);
  else if (name !== entry) errors.push(`${entry}: name "${name}" does not match directory name`);
  if (!desc) errors.push(`${entry}: frontmatter missing "description"`);
  else if (desc.length > 1024) errors.push(`${entry}: description exceeds 1024 characters (${desc.length})`);

  const body = text.slice(fmMatch[0].length);
  const lineCount = body.split("\n").length;
  if (lineCount > 500) errors.push(`${entry}: body exceeds 500 lines (${lineCount})`);

  // Relative file references: backticked paths and markdown links.
  const refs = [...body.matchAll(/`([\w./-]+\.\w+)`|\]\(((?!https?:)[\w./-]+)\)/g)]
    .map((m) => m[1] ?? m[2])
    .filter((p) => p.includes("/"));
  for (const ref of refs) {
    if (!existsSync(join(dir, ref)) && !existsSync(join(root, ref))) {
      errors.push(`${entry}: referenced path not found: ${ref}`);
    }
  }

  // Named cross-references like "(see Scale By Risk)" must match a heading.
  const headings = [...body.matchAll(/^#{2,}\s+(?:\d+\.\s+)?(.+)$/gm)].map((m) => m[1].trim());
  for (const [, target] of body.matchAll(/\(see ([^)]+)\)/g)) {
    if (!headings.includes(target.trim())) {
      errors.push(`${entry}: cross-reference to unknown section: "${target.trim()}"`);
    }
  }
}

if (errors.length > 0) {
  console.error("Skill validation failed:");
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log("All skills valid.");
