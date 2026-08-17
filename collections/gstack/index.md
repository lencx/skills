---
title: "gstack"
description: "A role-based Claude Code operating system that carries product intent through planning, browser QA, release, deployment, and documentation."
image: "https://skills.lencx.me/og.png"
---

> Documentation Index
> Fetch the complete documentation index at: https://skills.lencx.me/llms.txt
> Use this file to discover all available pages before exploring further.

# gstack

[garrytan/gstack](https://github.com/garrytan/gstack)

Tags: #engineering · #design · #delivery

Stars: 128,278 · Forks: 19,305

Analysis revision: `94993f7` · GitHub snapshot: Aug 17, 2026

> gstack behaves less like a loose Skill catalog and more like a command-driven startup team. Artifacts travel from product interrogation through real browser QA, deployment health, release documentation, and reflection.

The linked sprint is Think → Plan → Build → Review → Test → Ship → Reflect. Commands adopt distinct organizational roles, while artifacts from office-hours and plan reviews feed downstream engineering, browser QA, release, deployment, canary, and documentation stages. Several stages can mutate code, commit, push, open or merge PRs, and deploy.

## The linked sprint, end to end

The important distinction is artifact flow. Upstream product and plan decisions become inputs to engineering, QA, release, and operations instead of being discarded after a chat.

### office-hours

_Think_

Interrogate the problem, user, and product thesis.

### Executive reviews

_Plan_

CEO, engineering, design, DX, and security lenses challenge different assumptions.

### Implementation

_Build_

Approved artifacts guide the code change.

### Static and independent review

_Review_

Review code and optionally bring in a second model.

### Browser QA

_Test_

Reproduce, fix, rerun, and add regression evidence in Chromium.

### PR → deploy → canary

_Ship_

Carry the result through CI, production, and post-deploy health.

### Docs and retrospective

_Reflect_

Detect stale documentation and feed lessons into the next sprint.

Evidence: [Sprint and role pipeline](https://github.com/garrytan/gstack/blob/94993f74012782fd94416dd44b8314f6363a13a4/README.md#L171-L235) · [Skill deep dives](https://github.com/garrytan/gstack/blob/94993f74012782fd94416dd44b8314f6363a13a4/docs/skills.md)

## Where the sprint goes beyond coding

### Browser-in-the-loop QA

QA drives real Chromium, records defects, fixes them with atomic commits, reruns the failing path, and adds regression tests; qa-only keeps the investigation read-only.

### Release work continues after review

Ship audits tests and coverage before opening a PR; land-and-deploy waits for CI and deployment, canary observes production, and document-release catches stale docs.

### Planning uses distinct executive lenses

CEO, engineering, design, DX, and security reviews challenge different assumptions instead of collapsing every concern into one generic planning prompt.

## A low-risk way to evaluate the system

1. Evaluate it with office-hours → plan-ceo-review → review → qa before adopting the entire sprint.
2. Use qa-only or other report-only modes until code changes, commits, pushes, and deployment actions are explicitly authorized.
3. Enable guard for production incidents or any task whose editable subtree must stay narrow.

## Separate report-only use from delivery authority

### Best suited to

Technical founders and small teams that want one Claude Code environment to cover product framing, implementation review, live QA, release, deployment, documentation, and retrospectives.

### Authority boundary

The primary experience is Claude Code, setup can modify global or committed agent state, and many commands are high-authority mutations. The About text says 23 tools, but the current tree evolves quickly; treat that number as reviewed copy, not a live inventory.

## Sources reviewed

- [Sprint and role pipeline](https://github.com/garrytan/gstack/blob/94993f74012782fd94416dd44b8314f6363a13a4/README.md#L171-L235)
- [Skill deep dives](https://github.com/garrytan/gstack/blob/94993f74012782fd94416dd44b8314f6363a13a4/docs/skills.md)
- [Privacy and telemetry](https://github.com/garrytan/gstack/blob/94993f74012782fd94416dd44b8314f6363a13a4/README.md#L444-L456)

Source: https://skills.lencx.me/collections/gstack/index.mdx
