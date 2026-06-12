#!/usr/bin/env node
// Validation for skills/*/SKILL.md in two layers: universal checks that
// apply to every skill (frontmatter, size limits, referenced files, named
// section cross-references), and archetype packs inferred from local files
// or selected by evals/manifest.json overrides. These are the drift classes
// that have actually bitten this repo.

import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(root, "skills");
const evalsDir = join(root, "evals");
const errors = [];
const SEMVER_PATTERN = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/;

const addError = (message) => errors.push(message);

const assertUnique = (values, label) => {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) addError(`${label}: duplicate value "${value}"`);
    seen.add(value);
  }
};

const compareSets = (actual, expected, label) => {
  const actualSet = new Set(actual);
  const expectedSet = new Set(expected);
  for (const value of expectedSet) {
    if (!actualSet.has(value)) addError(`${label}: missing "${value}"`);
  }
  for (const value of actualSet) {
    if (!expectedSet.has(value)) addError(`${label}: unexpected "${value}"`);
  }
};

const readJson = (file) => {
  try {
    return JSON.parse(readFileSync(file, "utf8"));
  } catch (error) {
    addError(`${file}: invalid JSON (${error instanceof Error ? error.message : String(error)})`);
    return null;
  }
};

const extractEvalScenarios = (text) => [...text.matchAll(/^###\s+([A-Z]+\d+)\s+[—-]\s+(.+)$/gm)]
  .map((match) => ({ id: match[1], title: match[2].trim() }));

const extractEvalResultHeaderScenarios = (text) => {
  const header = text.split("\n")
    .find((line) => line.startsWith("| Date | Agent / model | Skill version |"));
  if (!header) return [];
  return header.split("|").map((cell) => cell.trim()).filter((cell) => /^[A-Z]+\d+$/.test(cell));
};

const splitMarkdownTableRow = (line) => {
  const trimmed = line.trim();
  if (!trimmed.startsWith("|") || !trimmed.endsWith("|")) return [];
  return trimmed.slice(1, -1).split("|").map((cell) => cell.trim());
};

const extractSourceFailureModeRules = (text) => {
  const rows = new Map();
  for (const line of text.split("\n")) {
    const cells = splitMarkdownTableRow(line);
    if (cells.length < 2) continue;
    const title = cells[0].match(/\*\*(.+?)\*\*/)?.[1]?.trim();
    if (!title) continue;
    const rules = [...cells[cells.length - 1].matchAll(/\b\d+\b/g)].map((match) => match[0]);
    if (rules.length > 0) rows.set(title, rules);
  }
  return rows;
};

const extractSkillRules = (text) => new Map([...text.matchAll(/^##\s+(\d+)\.\s+(.+)$/gm)]
  .map((match) => [match[1], match[2].trim()]));

const extractDiagnosticsRuleReferences = (text) => {
  const refs = new Set();
  for (const line of text.split("\n")) {
    const cells = splitMarkdownTableRow(line);
    if (cells.length < 3) continue;
    const ruleCell = cells[cells.length - 1];
    if (!/^\d+(?:\s*[,;/]\s*\d+)*$/.test(ruleCell)) continue;
    for (const match of ruleCell.matchAll(/\b\d+\b/g)) refs.add(match[0]);
  }
  for (const match of text.matchAll(/\b[Ss]ection\s+(\d+)\b/g)) refs.add(match[1]);
  return refs;
};

// Guard freshness: prove the validator helpers still see planted fixtures before
// trusting them for the real scan.
const selfTestFailures = [];
const expectSelf = (condition, label) => { if (!condition) selfTestFailures.push(label); };
expectSelf(
  extractEvalScenarios("### K99 — Planted failure\n").some((item) => item.id === "K99" && item.title === "Planted failure"),
  "eval scenario extraction",
);
expectSelf(
  extractEvalResultHeaderScenarios("| Date | Agent / model | Skill version | K99 | Notes |").includes("K99"),
  "eval result header extraction",
);
expectSelf(
  extractSkillRules("## 9. Planted Rule\n").get("9") === "Planted Rule",
  "skill rule heading extraction",
);
expectSelf(
  (extractSourceFailureModeRules("| **Planted mode** — desc | 2 Rule A; 7 Rule B |\n").get("Planted mode") ?? []).join(",") === "2,7",
  "failure mode rule extraction",
);
expectSelf(
  extractDiagnosticsRuleReferences("| Slot | Question | 9 |\n").has("9")
    && extractDiagnosticsRuleReferences("covered in Section 8 only\n").has("8"),
  "diagnostics rule reference extraction",
);
if (selfTestFailures.length > 0) {
  for (const failure of selfTestFailures) addError(`validator self-test failed: ${failure}`);
}

const validateCollaborations = (skillName, label, collaborations, skillTexts) => {
  assertUnique(collaborations.map((collaboration) => collaboration.skill), `${label} collaboration skills`);
  for (const collaboration of collaborations) {
    if (!collaboration.skill) {
      addError(`${label}: collaboration must declare skill`);
      continue;
    }
    if (collaboration.skill === skillName) {
      addError(`${label}: collaboration cannot point to itself: ${collaboration.skill}`);
    }
    if (collaboration.required !== false && collaboration.required !== true) {
      addError(`${label}: collaboration "${collaboration.skill}" must declare boolean required`);
    }
    if (collaboration.required === false && !String(collaboration.fallback || "").includes("standalone")) {
      addError(`${label}: optional collaboration "${collaboration.skill}" must declare standalone fallback`);
    }
    const skillOwns = Array.isArray(collaboration.skillOwns) ? collaboration.skillOwns : [];
    const peerOwns = Array.isArray(collaboration.peerOwns) ? collaboration.peerOwns : [];
    if (skillOwns.length === 0) addError(`${label}: collaboration "${collaboration.skill}" must declare skillOwns`);
    if (peerOwns.length === 0) addError(`${label}: collaboration "${collaboration.skill}" must declare peerOwns`);
    assertUnique(skillOwns, `${label} collaboration ${collaboration.skill} skillOwns`);
    assertUnique(peerOwns, `${label} collaboration ${collaboration.skill} peerOwns`);
    for (const responsibility of skillOwns) {
      if (peerOwns.includes(responsibility)) {
        addError(`${label}: collaboration "${collaboration.skill}" has conflicting responsibility: ${responsibility}`);
      }
    }

    const peerText = skillTexts.get(collaboration.skill);
    if (!peerText) {
      if (collaboration.required) addError(`${label}: required collaboration skill missing: ${collaboration.skill}`);
      continue;
    }
    const peerName = peerText.match(/^name:\s*(.+)$/m)?.[1]?.trim();
    if (peerName !== collaboration.skill) {
      addError(`${label}: collaboration skill "${collaboration.skill}" has mismatched frontmatter name "${peerName}"`);
    }
  }
};

const readProjectEvalConfig = () => {
  const manifestPath = join(evalsDir, "manifest.json");
  const emptyConfig = { skills: {} };
  if (!existsSync(manifestPath)) return emptyConfig;

  const manifest = readJson(manifestPath);
  if (!manifest) return emptyConfig;
  if (manifest.schema_version !== 1) addError("evals/manifest.json: schema_version must be 1");
  if (manifest.kind !== "project_eval_config") {
    addError("evals/manifest.json: kind must be project_eval_config");
  }

  const skills = manifest.skills ?? {};
  if (!skills || typeof skills !== "object" || Array.isArray(skills)) {
    addError("evals/manifest.json: skills must be an object when present");
    return emptyConfig;
  }
  for (const [skillName, skillConfig] of Object.entries(skills)) {
    if (!skillConfig || typeof skillConfig !== "object" || Array.isArray(skillConfig)) {
      addError(`evals/manifest.json: skills.${skillName} must be an object`);
    }
  }
  return { skills };
};

// Archetype pack: protocol-shaped skills — numbered rule headings, a
// failure-mode table in source-observations, a full eval suite, and
// optional diagnostics, cross-checked as one coverage discipline.
const validateProtocolSkill = (skillName, skillTexts, config) => {
  const label = skillName;
  const skillText = skillTexts.get(skillName);
  if (!skillText) {
    addError(`${label}: referenced skill not found`);
    return;
  }

  const skillConfig = config.skills[skillName] ?? {};
  const sourcePath = join(root, skillConfig.sourcePath || `skills/${skillName}/references/source-observations.md`);
  const diagnosticsPath = join(root, skillConfig.diagnosticsPath || `skills/${skillName}/references/diagnostics.md`);
  const evalPath = join(root, skillConfig.evalPath || `evals/${skillName}.md`);
  const collaborations = Array.isArray(skillConfig.collaborations) ? skillConfig.collaborations : [];
  const skillTextMustInclude = Array.isArray(skillConfig.skillTextMustInclude) ? skillConfig.skillTextMustInclude : [];

  if (!existsSync(sourcePath)) addError(`${label}: source observations not found: ${sourcePath}`);
  if (!existsSync(evalPath)) addError(`${label}: eval file not found: ${evalPath}`);

  const skillRules = extractSkillRules(skillText);
  const ruleIds = [...skillRules.keys()];
  const ruleIdSet = new Set(ruleIds);
  if (ruleIds.length === 0) addError(`${label}: SKILL.md must contain numbered rule headings`);
  assertUnique(ruleIds, `${label} SKILL rule ids`);

  let sourceModeRules = new Map();
  if (existsSync(sourcePath)) {
    const sourceText = readFileSync(sourcePath, "utf8");
    sourceModeRules = extractSourceFailureModeRules(sourceText);
    if (sourceModeRules.size === 0) {
      addError(`${label}: source observations must contain failure modes with rule references`);
    }
    for (const [title, modeRules] of sourceModeRules) {
      if (modeRules.length === 0) addError(`${label}: failure mode "${title}" must reference at least one rule`);
      for (const rule of modeRules) {
        if (!ruleIdSet.has(rule)) addError(`${label}: failure mode "${title}" references unknown rule ${rule}`);
      }
    }
  }

  if (existsSync(evalPath)) {
    const evalText = readFileSync(evalPath, "utf8");
    const evalScenarios = extractEvalScenarios(evalText);
    const evalIds = evalScenarios.map((scenario) => scenario.id);
    const evalTitles = evalScenarios.map((scenario) => scenario.title);
    if (evalScenarios.length === 0) addError(`${label}: eval file must contain scenario headings`);
    assertUnique(evalIds, `${label} eval scenario ids`);
    assertUnique(evalTitles, `${label} eval scenario titles`);
    compareSets(evalTitles, [...sourceModeRules.keys()], `${label} eval scenario title coverage`);
    compareSets(extractEvalResultHeaderScenarios(evalText), evalIds, `${label} eval results header`);
  }

  if (existsSync(diagnosticsPath)) {
    const diagnosticsText = readFileSync(diagnosticsPath, "utf8");
    const diagnosticRuleIds = [...extractDiagnosticsRuleReferences(diagnosticsText)];
    if (diagnosticRuleIds.length === 0) {
      addError(`${label}: diagnostics.md contains no rule references`);
    }
    for (const rule of diagnosticRuleIds) {
      if (!ruleIdSet.has(rule)) addError(`${label}: diagnostics.md references unknown rule ${rule}`);
    }
    compareSets(diagnosticRuleIds, ruleIds, `${label} diagnostics rule coverage`);
  }

  assertUnique(skillTextMustInclude, `${label} skillTextMustInclude`);
  for (const requiredText of skillTextMustInclude) {
    if (!skillText.includes(requiredText)) {
      addError(`${label}: SKILL.md must include required eval config text: ${requiredText}`);
    }
  }
  validateCollaborations(skillName, label, collaborations, skillTexts);
};

// Universal checks (frontmatter, size, refs) apply to every skill; an
// archetype pack adds conventions inferred from local files or declared as
// an override. New shapes add a pack here; if the packs multiply past
// three, split them into scripts/checks/*.mjs — the size budget is split
// pressure, not a gate.
const archetypePacks = {
  protocol: validateProtocolSkill,
};

const inferArchetype = (skillName, skillText) => {
  const sourcePath = join(root, `skills/${skillName}/references/source-observations.md`);
  const sourceText = existsSync(sourcePath) ? readFileSync(sourcePath, "utf8") : "";
  if (extractSkillRules(skillText).size > 0 || extractSourceFailureModeRules(sourceText).size > 0) {
    return "protocol";
  }
  return null;
};

const validateProjectEvals = (skillTexts) => {
  const config = readProjectEvalConfig();

  // Orphan eval files: an evals/*.md with no skill directory is dead weight.
  const evalFiles = existsSync(evalsDir)
    ? readdirSync(evalsDir).filter((entry) => entry.endsWith(".md"))
    : [];
  const evalSkillNames = evalFiles.map((entry) => entry.replace(/\.md$/, ""));
  assertUnique(evalSkillNames, "eval suite skills");
  for (const skillName of evalSkillNames) {
    if (!skillTexts.has(skillName)) {
      addError(`evals/${skillName}.md: no matching skill directory`);
    }
  }

  for (const skillName of Object.keys(config.skills)) {
    if (!skillTexts.has(skillName)) {
      addError(`evals/manifest.json: configured skill not found: ${skillName}`);
    }
  }

  for (const skillName of skillTexts.keys()) {
    const skillConfig = config.skills[skillName];
    const skillText = skillTexts.get(skillName);
    const archetype = skillConfig?.archetype ?? inferArchetype(skillName, skillText);
    if (!archetype) {
      if (skillConfig) {
        addError(`${skillName}: configured in evals/manifest.json but no archetype was inferred; set archetype to "none" to opt out`);
      }
      continue;
    }
    if (archetype === "none") {
      validateCollaborations(skillName, skillName, Array.isArray(skillConfig?.collaborations) ? skillConfig.collaborations : [], skillTexts);
      continue;
    }

    const pack = archetypePacks[archetype];
    if (!pack) {
      addError(`${skillName}: unknown archetype "${archetype}" (known: ${Object.keys(archetypePacks).join(", ")})`);
      continue;
    }
    pack(skillName, skillTexts, config);
  }
};

const skillTexts = new Map();
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
  const version = fm.match(/^version:\s*(.+)$/m)?.[1]?.trim();
  const desc = fm.match(/^description:\s*(.+)$/m)?.[1]?.trim();
  if (!name) errors.push(`${entry}: frontmatter missing "name"`);
  else if (name !== entry) errors.push(`${entry}: name "${name}" does not match directory name`);
  if (!version) errors.push(`${entry}: frontmatter missing "version"`);
  else if (!SEMVER_PATTERN.test(version)) errors.push(`${entry}: version "${version}" is not valid semver`);
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

  skillTexts.set(entry, text);
}

validateProjectEvals(skillTexts);

if (errors.length > 0) {
  console.error("Skill validation failed:");
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log("All skills valid.");
