<p align="center">
  <img src="./assets/lencx-skills.svg" alt="lencx skills logo" width="160">
</p>

<h1 align="center">lencx-skills</h1>

> 📚 A curated collection of skills for AI agents — turning tacit knowledge into reliable execution.

English | [中文](./locales/README.zh-CN.md)

<a href="https://www.buymeacoffee.com/lencx" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 145px !important;" ></a>

## Installation

Choose either the skills installer or the native plugin. Using both makes each skill available twice.

### Quick Install (Recommended)

```bash
npx skills@latest add lencx/skills
```

### Specific Install (Global)

```bash
# Claude Code
npx skills@latest add lencx/skills -a claude-code -g

# Codex
npx skills@latest add lencx/skills -a codex -g
```

### Plugin Install

#### Codex

Requires Codex CLI 0.146.0 or later.

```bash
codex plugin marketplace add lencx/skills
codex plugin add lencx-skills@lencx
```

#### Claude Code

```bash
claude plugin marketplace add lencx/skills
claude plugin install lencx-skills@lencx
```

## Publishing

Validate the Claude Code plugin and marketplace directly from the repository root:

```bash
claude plugin validate . --strict
```

Build a clean Codex submission archive without the Claude-specific manifest:

```bash
./scripts/package-codex-plugin.sh
```

The archive is written to `dist/lencx-skills-codex.zip`.

## Skills

- [keel](./skills/keel): Architecture review and governance for repository-defined load-bearing facts, boundaries, contracts, migrations, guards, and deletion.
- [coding-protocol](./skills/coding-protocol): Risk-scaled coding execution hygiene for authority, scope, evidence, user-work preservation, verification, and reporting (ref: [Andrej Karpathy's public observations](https://x.com/karpathy/status/2015883857489522876)).

Tip: these skills pair best with declarative prompts — state the success criteria ("make these tests pass") rather than step-by-step instructions.

## License

MIT
