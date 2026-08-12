---
title: "Impeccable"
description: "Design guidance and practical commands that help AI coding agents shape, critique, audit, and refine frontend experiences."
image: "https://skills.lencx.me/og.png"
---

> Documentation Index
> Fetch the complete documentation index at: https://skills.lencx.me/llms.txt
> Use this file to discover all available pages before exploring further.

# Impeccable

[pbakaus/impeccable](https://github.com/pbakaus/impeccable)

Tags: #design · #quality

Stars: 58,314 · Forks: 3,558

Analysis revision: `ae388ac` · GitHub snapshot: Aug 12, 2026

> Impeccable turns design into a system of authorities and rendered evidence. It is not a collection of prompts that merely asks an agent to make a page look better.

A session starts by resolving PRODUCT.md, DESIGN.md, the matching surface brief, and platform guidance. It then loads exactly one command playbook, and loads a separate craft floor immediately before UI edits. Deterministic detector rules and live browser variants supply evidence that model-only critique cannot.

## The authority stack behind each UI change

Each layer answers a different question. Keeping them separate lets a redesign replace visual direction without rewriting product truth, and lets mechanical checks support rather than impersonate design judgment.

### PRODUCT.md

_Product truth_

Users, jobs, evidence, operating context, constraints, and accessibility stay durable.

### DESIGN.md + surface brief

_Visual truth_

The product-wide visual world and the decisions unique to one surface remain distinct.

### Command playbook

_One judgment_

critique, audit, polish, harden, and other commands load only the method needed for the current task.

### Craft floor

_Before editing_

A separate quality floor constrains typography, contrast, spacing, iconography, and common design shortcuts.

### Detector + live browser

_Rendered evidence_

Deterministic rules catch mechanical defects; live mode compares real rendered alternatives.

Evidence: [Why Impeccable](https://github.com/pbakaus/impeccable/blob/ae388ac58fb33aade50fc47e2be07c3192dcaabd/README.md#why-impeccable) · [Commands and examples](https://github.com/pbakaus/impeccable/blob/ae388ac58fb33aade50fc47e2be07c3192dcaabd/.agents/skills/impeccable/SKILL.md#setup) · [Live browser iteration](https://github.com/pbakaus/impeccable/blob/ae388ac58fb33aade50fc47e2be07c3192dcaabd/.agents/skills/impeccable/reference/live.md)

## Where the method is more specific than “good design”

### Product truth and visual direction stay separate

A redesign may replace the visual world while preserving users, product purpose, evidence, content, and constraints recorded as product truth.

### Commands own different judgments

critique evaluates experience quality, audit checks technical quality, polish closes shipping gaps, and harden covers errors, i18n, overflow, and edge cases.

### Tool-backed rendered evidence

Detectors catch mechanical defects, while live mode operates a real preview with selected elements, alternatives, annotations, and accept or reject actions.

## Choose the command by the judgment you need

1. Run impeccable init before other commands so later work has real brand and product context.
2. Pair a command with a concrete target, such as audit the blog, polish settings, or harden checkout.
3. Use critique for experience judgment and audit for deterministic technical checks; do not treat them as interchangeable.

## Adopt the method without leaking private context

### Use it for

Landing pages, portfolios, application UI, and dashboards that need shaping, UX critique, technical audit, or final polish.

### Review before sharing

Installation can add project hooks. Codex users should review and approve them, and may need to approve again after hook definitions change.

## Sources reviewed

- [Why Impeccable](https://github.com/pbakaus/impeccable/blob/ae388ac58fb33aade50fc47e2be07c3192dcaabd/README.md#why-impeccable)
- [Commands and examples](https://github.com/pbakaus/impeccable/blob/ae388ac58fb33aade50fc47e2be07c3192dcaabd/.agents/skills/impeccable/SKILL.md#setup)
- [Live browser iteration](https://github.com/pbakaus/impeccable/blob/ae388ac58fb33aade50fc47e2be07c3192dcaabd/.agents/skills/impeccable/reference/live.md)

Source: https://skills.lencx.me/collections/impeccable/index.mdx
