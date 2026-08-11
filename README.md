<p align="center">
  <img src="./assets/lencx-skills.svg" alt="lencx skills logo" width="160">
</p>

<h1 align="center">lencx-skills</h1>

<p align="center">
  <a href="https://skills.sh/lencx/skills"><img src="https://skills.sh/b/lencx/skills" alt="skills.sh"></a>
</p>

> 💡 Rooted in lencx’s hands-on experience — turning knowledge into reliable execution.

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

```bash
codex plugin marketplace add lencx/skills
codex plugin add lencx-skills@lencx
```

#### Claude Code

```bash
claude plugin marketplace add lencx/skills
claude plugin install lencx-skills@lencx
```

## Updates and Versioning

`@latest` selects the installer, not the skill content. Bundle releases use matching manifest versions and Git tags; `v1.4.0` is planned but not yet published.

```bash
# Update installed skills
npx skills@latest update keel coding-protocol -p  # project
npx skills@latest update keel coding-protocol -g  # global

# After v1.4.0 is published, install pinned content
npx skills@latest add "lencx/skills#v1.4.0" --skill keel coding-protocol -a codex -g -y        # Codex
npx skills@latest add "lencx/skills#v1.4.0" --skill keel coding-protocol -a claude-code -g -y  # Claude Code
```

`update` stays on the installed source ref and does not add newly published skills. To change tags or add skills, rerun `add` with the desired tag. Published tags are treated as immutable; enforce this with repository tag protection or a ruleset.

## Skills

- [keel](./skills/keel): Load-bearing architecture design, review, and governance for new and existing systems—authority, ownership, contracts, dependency and state boundaries, recovery, structural change, drift, guards, migration, and deletion.
- [coding-protocol](./skills/coding-protocol): Risk-scaled repository execution and code-evidence guardrails for authority, target scope, evidence, user-work preservation, environment assumptions, verification, and truthful reporting (ref: [Andrej Karpathy's public observations](https://x.com/karpathy/status/2015883857489522876)).

### Recommended Companions

`coding-protocol` and `keel` pair well with:

- [Matt Pocock's Skills](https://github.com/mattpocock/skills) for software engineering workflows.
- [Impeccable](https://github.com/pbakaus/impeccable) for design and UI/UX workflows.

Using them together broadens coverage across product design, engineering practice, architecture governance, and risk-scaled execution. These are independent projects and should be installed separately.

Tip: describe the goal, success criteria, and relevant constraints, then let the agent plan the steps. For example: "Implement this change and make sure the relevant tests pass."

## License

MIT
