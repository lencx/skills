---
title: "Get started"
description: "Install lencx-skills once through the skills installer or a native plugin."
image: "https://skills.lencx.me/og.png"
---

> Documentation Index
> Fetch the complete documentation index at: https://skills.lencx.me/llms.txt
> Use this file to discover all available pages before exploring further.

# Get started

> Rendered directly from the [canonical source](https://github.com/lencx/skills/blob/main/README.md).

Choose either the skills installer or the native plugin. Using both makes each skill available twice.

## Quick Install (Recommended)

```bash
npx skills@latest add lencx/skills
```

## Specific Install (Global)

```bash
# Claude Code
npx skills@latest add lencx/skills -a claude-code -g

# Codex
npx skills@latest add lencx/skills -a codex -g
```

## Plugin Install

### Codex

```bash
codex plugin marketplace add lencx/skills
codex plugin add lencx-skills@lencx
```

### Claude Code

```bash
claude plugin marketplace add lencx/skills
claude plugin install lencx-skills@lencx
```

## Update Skills

Use the same path you chose for installation.

### Skills Installer

```bash
# Update the selected project or global scope
npx skills@latest update
```

Pass `-p` to update project skills only, or `-g` to update global skills only.

### Native Plugin

```bash
# Codex — refresh the marketplace, then reinstall from it
codex plugin marketplace upgrade lencx
codex plugin add lencx-skills@lencx

# Claude Code — restart Claude Code after the update
claude plugin update lencx-skills@lencx
```

Start a new Codex task, or restart Claude Code, to load the updated plugin.

Source: https://skills.lencx.me/get-started/index.mdx
