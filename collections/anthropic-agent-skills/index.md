---
title: "Anthropic Agent Skills"
description: "Anthropic’s public examples and reference implementations for creative, technical, enterprise, and document workflows."
image: "https://skills.lencx.me/og.png"
---

> Documentation Index
> Fetch the complete documentation index at: https://skills.lencx.me/llms.txt
> Use this file to discover all available pages before exploring further.

# Anthropic Agent Skills

[anthropics/skills](https://github.com/anthropics/skills)

Tags: #reference · #quality

Stars: 168,206 · Forks: 20,038

Analysis revision: `f17010c` · GitHub snapshot: Aug 12, 2026

> This is not a software-delivery operating system. Its value is showing, in first-party files, how a Skill is packaged, progressively loaded, and tested against a baseline.

Each Skill is an independently loadable directory. Its name and description stay visible for discovery, SKILL.md loads when triggered, and scripts, references, or assets are used only when needed. The bundled skill-creator then evaluates real prompts against a baseline, grades assertions and output quality, and iterates from human feedback.

## What enters context, and when

The package shape is a context-budget contract. A useful Skill keeps discovery cheap, delays its procedure until it triggers, and defers heavy material until the task actually needs it.

### name + description

_Always visible_

Discovery metadata tells the model both what the Skill does and when it should be selected.

### SKILL.md

_After trigger_

The decision procedure enters context only after the trigger has matched.

### scripts / references / assets

_On demand_

Deterministic work, optional knowledge, and output material remain outside the main prompt until referenced or executed.

Evidence: [Basic Skill template](https://github.com/anthropics/skills/blob/f17010c9bb483898c1d9c9f42dde2b3a98889434/template/SKILL.md) · [Skill creator](https://github.com/anthropics/skills/blob/f17010c9bb483898c1d9c9f42dde2b3a98889434/skills/skill-creator/SKILL.md#test-cases)

## What the repository teaches about Skill design

### Three context levels

Discovery metadata is always visible, SKILL.md loads only after a trigger, and bundled resources enter context or execute only when needed.

### Behavior is evaluated against a baseline

skill-creator runs realistic prompts with and without the Skill, grades assertions and outputs, records cost and timing, and presents human review.

### Minimal and production-heavy examples

A tiny template sits beside script- and asset-heavy document workflows used by Claude, exposing both packaging extremes and their license boundary.

## Evaluate behavior before polishing prose

1. Start with the template and make the description say both what the skill does and when it should trigger.
2. Keep the main procedure in SKILL.md; move repeatable operations, optional knowledge, and output material into scripts, references, and assets.
3. Diagnose trigger failures separately from output failures: tune description with trigger evals, and tune the body with task assertions and human review.

## Use it as a reference library, not a process owner

### Useful when

Learning Agent Skill anatomy, creating a new Claude skill, or studying mature document and workflow examples.

### Do not assume

Anthropic describes most entries as demonstration and educational material. Test them in your own environment; some document skills are source-available rather than open source.

## Sources reviewed

- [Repository overview](https://github.com/anthropics/skills/blob/f17010c9bb483898c1d9c9f42dde2b3a98889434/README.md#about-this-repository)
- [Basic Skill template](https://github.com/anthropics/skills/blob/f17010c9bb483898c1d9c9f42dde2b3a98889434/template/SKILL.md)
- [Skill creator](https://github.com/anthropics/skills/blob/f17010c9bb483898c1d9c9f42dde2b3a98889434/skills/skill-creator/SKILL.md#test-cases)

Source: https://skills.lencx.me/collections/anthropic-agent-skills/index.mdx
