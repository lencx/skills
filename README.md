# lencx-skills

> 📚 A curated collection of skills for AI agents — turning tacit knowledge into reliable execution.

English | [中文](./locales/README.zh-CN.md)

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

## Compatibility

Skills follow the open Agent Skills format (`SKILL.md` with `name`/`description` frontmatter) and reference no agent-specific tools, so they work with any agent that reads the format — Claude Code, Codex, Cursor, and others. `npx skills add` handles per-agent installation.

Tip: the protocol pairs best with declarative prompts — state the success criteria ("make these tests pass") rather than step-by-step instructions.

## Development

- `node scripts/validate-skills.mjs` — structural validation: frontmatter, size limits, referenced files, and named section cross-references. Runs in CI on every push and PR.
- [`evals/coding-protocol.md`](./evals/coding-protocol.md) — behavioral A/B scenarios, one per documented failure mode. Run them after meaningful protocol edits and log the results.
- Local development with Claude Code: symlink the skill so the installed copy always tracks the repo (re-run `npx skills add` instead if you prefer copies):

  ```bash
  ln -sfn "$(pwd)/skills/coding-protocol" ~/.claude/skills/coding-protocol
  ```

## License

MIT
