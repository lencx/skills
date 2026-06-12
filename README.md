# lencx-skills

> 📚 A curated collection of skills for AI agents — turning tacit knowledge into reliable execution.

English | [中文](./locales/README.zh-CN.md)

<a href="https://www.buymeacoffee.com/lencx" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 145px !important;" ></a>

## Installation

### Quick Install (Recommended)

```bash
npx skills add lencx/skills
```

### Specific Install (Global)

```bash
# Claude Code
npx skills add lencx/skills -a claude-code -g

# Codex
npx skills add lencx/skills -a codex -g
```

## Skills

- [coding-protocol](./skills/coding-protocol): Ambient, risk-scaled execution protocol for coding tasks (ref: [Andrej Karpathy's public observations](https://x.com/karpathy/status/2015883857489522876)).
- [keel](./skills/keel): Architecture design and governance protocol for system structure, boundaries, contracts, migrations, and long-lived codebase health. Keeps the load-bearing spine small, owned, checked, and deletable over time.

## Compatibility

Skills follow the open Agent Skills format (`SKILL.md` with `name`/`description` frontmatter) and reference no agent-specific tools, so they work with any agent that reads the format — Claude Code, Codex, Cursor, and others. `npx skills add` handles per-agent installation.

Tip: these skills pair best with declarative prompts — state the success criteria ("make these tests pass") rather than step-by-step instructions.

## Development

- `node scripts/validate-skills.mjs` — two-layer validation: universal checks for every skill (frontmatter, size limits, referenced files, section cross-references), plus inferred archetype packs (`protocol`: rules ↔ failure modes ↔ evals coverage). Runs in CI on every push and PR.
- [`evals/`](./evals) — project-level behavioral A/B scenarios. `evals/<skill>.md` is matched to `skills/<skill>`; `evals/manifest.json` stores only overrides and project-level exceptions such as cross-skill collaboration boundaries. Use `archetype: "none"` only for skills intentionally outside an inferred pack.
- Bump the skill's `SKILL.md` `version` whenever installed skill content changes (`SKILL.md` or files under that skill directory).
- Local development with Claude Code: symlink the skill so the installed copy always tracks the repo (re-run `npx skills add` instead if you prefer copies):

  ```bash
  ln -sfn "$(pwd)/skills/coding-protocol" ~/.claude/skills/coding-protocol
  ln -sfn "$(pwd)/skills/keel" ~/.claude/skills/keel
  ```

## License

MIT
