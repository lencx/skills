---
title: "Addy Osmani’s Agent Skills"
description: "A production-engineering lifecycle pack with explicit gates, anti-rationalization rules, specialist personas, and a staged brownfield adoption path."
image: "https://skills.lencx.me/og.png"
---

> Documentation Index
> Fetch the complete documentation index at: https://skills.lencx.me/llms.txt
> Use this file to discover all available pages before exploring further.

# Addy Osmani’s Agent Skills

[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)

Tags: #reference · #engineering · #quality

Stars: 86,280 · Forks: 9,269

Analysis revision: `be42637` · GitHub snapshot: Aug 12, 2026

> Its distinguishing feature is not catalog size. Each workflow exposes likely agent rationalizations, red flags, and exit evidence, making engineering discipline inspectable instead of aspirational.

Commands map Define, Plan, Build, Verify, Review, and Ship onto focused Skills and specialist personas. using-agent-skills routes work and enforces assumptions, pushback, scope, and evidence. Individual Skills follow trigger → process → rationalizations → red flags → verification, while commands compose several disciplines without personas recursively invoking personas.

## Who decides when, how, and from which viewpoint

The repository separates orchestration from reusable method and specialist judgment. That boundary makes a multi-agent review understandable and prevents personas from recursively creating hidden process.

### Command

_When_

Maps lifecycle stages such as Define, Plan, Build, Verify, Review, and Ship onto several capabilities.

### Skill

_How_

Provides one reusable procedure with triggers, steps, rationalizations, red flags, and verification.

### Persona

_Who_

Supplies a specialist review perspective without recursively orchestrating more personas.

Evidence: [Lifecycle and skill catalog](https://github.com/addyosmani/agent-skills/blob/be42637c5af93fdc8526b68ec2f2651b930f316c/README.md) · [Brownfield adoption](https://github.com/addyosmani/agent-skills/blob/be42637c5af93fdc8526b68ec2f2651b930f316c/docs/adoption-guide.md#L73-L128) · [Doubt-driven review](https://github.com/addyosmani/agent-skills/blob/be42637c5af93fdc8526b68ec2f2651b930f316c/skills/doubt-driven-development/SKILL.md#L49-L181)

## Why the workflows are auditable

### Auditable quality gates

Mandatory steps, common excuses and rebuttals, red flags, and explicit exit evidence make each workflow reviewable rather than aspirational.

### Staged brownfield adoption

Existing codebases start with context, read-only review, and targeted characterization tests instead of loading every Skill or attempting a big-bang rewrite.

### Independent doubt cycles

Small high-stakes artifacts can be reviewed by a fresh context that receives only the artifact and contract, then reconciles findings against the source.

## Adopt the catalog in stages

1. For an established codebase, begin with context engineering, read-only review, and characterization tests around the next change.
2. Load only Skills for the current phase; the repository explicitly discourages injecting the whole catalog into every session.
3. Use a direct persona for one specialist judgment and a command when several review disciplines need orchestration.

## Use the lifecycle selectively, not all at once

### Strong fit for

Production-oriented teams that want consistent specification, implementation, verification, review, and release gates across greenfield and brownfield codebases.

### Keep in scope

The pack is deliberately prescriptive and phase-heavy. Per-Skill copies may omit shared root references, and host adapters do not provide identical commands, personas, hooks, or plugin behavior.

## Sources reviewed

- [Lifecycle and skill catalog](https://github.com/addyosmani/agent-skills/blob/be42637c5af93fdc8526b68ec2f2651b930f316c/README.md)
- [Brownfield adoption](https://github.com/addyosmani/agent-skills/blob/be42637c5af93fdc8526b68ec2f2651b930f316c/docs/adoption-guide.md#L73-L128)
- [Doubt-driven review](https://github.com/addyosmani/agent-skills/blob/be42637c5af93fdc8526b68ec2f2651b930f316c/skills/doubt-driven-development/SKILL.md#L49-L181)

Source: https://skills.lencx.me/collections/addy-agent-skills/index.mdx
