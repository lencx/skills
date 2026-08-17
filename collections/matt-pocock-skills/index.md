---
title: "Matt Pocock’s Skills"
description: "A collection of small, adaptable, composable skills for everyday software engineering workflows."
image: "https://skills.lencx.me/og.png"
---

> Documentation Index
> Fetch the complete documentation index at: https://skills.lencx.me/llms.txt
> Use this file to discover all available pages before exploring further.

# Matt Pocock’s Skills

[mattpocock/skills](https://github.com/mattpocock/skills)

Tags: #engineering · #delivery

Stars: 219,312 · Forks: 18,884

Analysis revision: `84fdeff` · GitHub snapshot: Aug 17, 2026

> This collection deliberately refuses to become one universal lifecycle. Explicit orchestrators compose work; automatically selected Skills contribute one engineering discipline; repository setup keeps both aligned with local conventions.

User-invoked Skills such as grill-with-docs and implement orchestrate a flow; model-invoked Skills such as diagnosis, TDD, research, and code review contribute one reusable discipline. A repository setup step first records the issue tracker, triage labels, and domain-context or ADR locations that later workflows must follow.

## Three responsibilities that must not blur together

The most important design choice is the invocation boundary. It prevents an automatically triggered helper from silently taking over an entire engineering process.

### Orchestrators

_User-invoked_

grill-with-docs, to-spec, and implement own an explicit flow requested by the user.

### Disciplines

_Model-invoked_

Diagnosis, TDD, research, domain modeling, and review each supply one reusable method.

### Setup contracts

_Repository-owned_

Tracker choice, triage vocabulary, and CONTEXT.md or ADR locations are recorded before later workflows depend on them.

Evidence: [Repository overview](https://github.com/mattpocock/skills/blob/84fdeffd12f2ee307994d1eb6feb48173b6e0502/README.md#reference) · [Repository setup](https://github.com/mattpocock/skills/blob/84fdeffd12f2ee307994d1eb6feb48173b6e0502/skills/engineering/setup-matt-pocock-skills/SKILL.md#process)

## Engineering ideas worth borrowing independently

### Domain language becomes repository state

grill-with-docs sharpens terms in CONTEXT.md and records consequential decisions in ADRs so later sessions share the codebase’s nouns.

### Diagnosis starts with a red-capable command

The diagnosing Skill refuses to theorize until one unattended command reproduces the exact symptom, then minimizes it and tests falsifiable hypotheses.

### Architecture uses a precise module vocabulary

codebase-design looks for deep modules—substantial behavior behind a small interface—at explicit, testable seams instead of proposing broad rewrites.

## Start with repository setup, then pick one discipline

1. Choose either the managed Claude plugin or editable skills.sh installation; installing both duplicates the skills.
2. Run the repository setup once so issue tracking, labels, and domain-document locations are explicit.
3. For a difficult bug, make the exact symptom fail from one fast command before ranking three to five falsifiable hypotheses.

## Choose modular control over a single lifecycle

### Strong fit for

Repositories that need better specification, domain modeling, work breakdown, TDD, difficult bug diagnosis, or code review.

### Setup cost

The engineering workflows expect repository-level setup. Without tracker, label, and documentation conventions, their defaults can drift from the project.

## Sources reviewed

- [Repository overview](https://github.com/mattpocock/skills/blob/84fdeffd12f2ee307994d1eb6feb48173b6e0502/README.md#reference)
- [Skill reference](https://github.com/mattpocock/skills/blob/84fdeffd12f2ee307994d1eb6feb48173b6e0502/skills/engineering/diagnosing-bugs/SKILL.md#phase-1--build-a-feedback-loop)
- [Repository setup](https://github.com/mattpocock/skills/blob/84fdeffd12f2ee307994d1eb6feb48173b6e0502/skills/engineering/setup-matt-pocock-skills/SKILL.md#process)

Source: https://skills.lencx.me/collections/matt-pocock-skills/index.mdx
