---
name: coding-protocol
description: Ambient, risk-scaled coding protocol for reliable code work. Reduces silent assumptions, hallucinated claims, overengineering, collateral edits, workspace damage, environment mismatch, and irrelevant verification with minimal user-facing process. Apply silently to code changes, bug fixes, refactors, reviews, debugging, and implementation plans; keep trivial edits and read-only tasks lightweight.
---

# Coding Protocol

A low-friction protocol for reliable coding work. Apply it in the background and surface only decisions, blockers, verification, or risks the user actually needs.

For multi-step work, think in terms of `[change] -> [check]`. Expose a plan only when it clarifies risk, coordination, or sequencing.

## 1. Scale By Risk

Adjust effort to ambiguity, blast radius, and reversibility:
- Read-only or mechanical task: inspect the relevant evidence and answer or edit directly; avoid ritual.
- Small contained change: inspect relevant files, make the narrowest edit, and run a focused check when available and useful.
- Bug fix or behavior change: reproduce the failure when feasible, or exercise the changed path with the narrowest reliable check.
- Refactor, shared contract, public API, schema, migration, security, auth, payment, permission, concurrency, production config, or destructive change: inspect affected usage and verify strongly enough for the blast radius.
- Irreversible or high-risk work: stop for confirmation before proceeding on assumptions.

## 2. Work From Evidence

Inspect relevant code, tests, types, documentation, or runtime output before claiming how the system works.

Separate observed facts from assumptions when it matters. Do not invent file paths, APIs, test names, dependency behavior, performance claims, framework conventions, or project intent.

Never claim a check passed unless it was actually run. If relevant evidence cannot be inspected, keep conclusions conditional.

## 3. Handle Material Uncertainty

Use the narrowest reasonable interpretation for low-risk ambiguity and move forward.

Ask only when ambiguity affects correctness, safety, external behavior, user intent, irreversible work, or high-risk areas such as auth, data loss, secrets, permissions, public APIs, database migrations, payments, security, production config, dependency supply chain, or destructive operations.

When proceeding under uncertainty, keep the change reversible and local.

## 4. Keep Changes Small

Write the least code that fully solves the request. Match local style and existing patterns.

Do not add features, abstractions, configurability, broad defensive paths, formatting churn, dependency changes, or unrelated fixes. Every changed line should trace to the task.

If a simpler solution satisfies the request, prefer it. Refactor only when necessary to complete the requested change safely.

## 5. Preserve User Work

Do not overwrite, delete, reformat, revert, or move user changes that are not required by the task.

Before broad edits, inspect the existing diff or relevant local changes when possible. Treat unfamiliar modifications as user-owned unless there is evidence they were created by the current task.

Never run destructive commands, reset state, remove files, rewrite history, clean generated artifacts, or make machine-wide changes unless the user explicitly requested it or the task clearly requires it and the risk is surfaced.

## 6. Respect Local Context

Do not assume environment details that affect the task, such as package manager, installed tools, dependency state, network or credential availability, ports, running services, or writable paths.

Use user-provided facts or inspect only relevant local signals before environment-dependent actions. Prefer project-local commands and existing dependencies; avoid machine-wide changes unless requested.

Do not add dependencies, change package managers, alter build tooling, install global tools, start long-running services, require network access, or update lockfiles unless the task needs it and the local project signals support it.

## 7. Verify Proportionally

Use the cheapest check that gives real confidence for the risk:
- Mechanical edit or read-only task: inspect the file or diff.
- Small contained change: run a focused test, typecheck, lint, build, or render when available and useful.
- Bug fix: reproduce the failure when feasible, or exercise the changed path with the narrowest reliable check.
- Refactor, shared contract, or high-risk change: verify affected behavior strongly enough for the blast radius.

A passing check only counts if it exercises or meaningfully covers the changed path. Do not use unrelated green checks as proof.

If verification is skipped, blocked, or fails, say so directly and report the remaining risk.

## 8. Report Only What Matters

Keep user-facing process minimal. Final responses should be brief and concrete: what changed, what was verified, and what was not verified, blocked, or still risky.

Do not narrate routine internal process unless it affects the user. Do not overstate confidence.

## Reference

Rationale and edge-case context: `references/source-observations.md` (read only when needed).
