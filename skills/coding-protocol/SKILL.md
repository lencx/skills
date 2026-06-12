---
name: coding-protocol
version: 1.1.0
description: Risk-scaled execution protocol for reliable coding. Prevents silent assumptions, overengineering, collateral edits, unverified claims, and silenced failing checks. Apply by default to every coding task — code changes, bug fixes, refactors, reviews, debugging, and implementation plans; keep trivial edits and read-only tasks lightweight.
---

# Coding Protocol

A low-friction protocol for reliable coding work. Apply it in the background and surface only decisions, blockers, verification, or risks the user actually needs.

For multi-step work, name what observably counts as done, then think in terms of `[change] -> [check]`. Expose a plan only when it clarifies risk, coordination, or sequencing.

## 1. Scale By Risk

Adjust effort to ambiguity, blast radius, and reversibility:
- Read-only or mechanical task: inspect the relevant evidence and answer or edit directly; avoid ritual.
- Small contained change: inspect relevant files, make the narrowest edit, and run a focused check (test, typecheck, lint, build, or render) when the project provides one.
- Bug fix or behavior change: reproduce the failure when feasible, or exercise the changed path with the narrowest reliable check.
- Refactor or change touching a high-risk area: locate the affected usages (call sites, importers, consumers) and verify their behavior, not just the edited file.
- Irreversible or high-risk work: stop for confirmation before proceeding on assumptions.

High-risk areas: auth, permissions, secrets, security, payments, data loss, schema or migration, public API or shared contract, concurrency, production config, dependency supply chain, and destructive or irreversible operations.

## 2. Work From Evidence

Inspect relevant code, tests, types, documentation, or runtime output before claiming how the system works.

Separate observed facts from assumptions when it matters. Do not invent file paths, APIs, test names, dependency behavior, performance claims, framework conventions, or project intent.

Never claim a check passed unless it was actually run. If relevant evidence cannot be inspected, keep conclusions conditional.

## 3. Handle Material Uncertainty

Use the narrowest reasonable interpretation for low-risk ambiguity and move forward.

Ask only when ambiguity affects correctness, safety, external behavior, user intent, irreversible work, or a high-risk area (see Scale By Risk).

If the request conflicts with observed evidence, say so before implementing rather than silently complying.

When no user is available to answer (unattended or scheduled runs), material ambiguity does not downgrade to a guess: park the ambiguous item — skip it, report it, or queue it for review — and proceed only with the unambiguous remainder.

When proceeding under uncertainty, keep the change reversible and local.

## 4. Keep Changes Small

Write the least code that fully solves the request. Match local style and existing patterns.

Every changed line should trace to the task: no unrequested features, abstractions, defensive paths, formatting churn, dependency changes, or unrelated fixes. If you spot an unrelated issue, note it instead of fixing it.

If a simpler solution satisfies the request, surface it and prefer it — even when the request implies a more complex path. Refactor only when necessary to complete the requested change safely.

Clean up artifacts your own edits made obsolete; leave pre-existing dead code alone unless asked.

## 5. Preserve User Work

Do not overwrite, delete, reformat, revert, or move user changes that are not required by the task.

Before broad edits, inspect the existing diff or relevant local changes when possible. Treat unfamiliar modifications as user-owned unless there is evidence they were created by the current task.

Never run destructive commands, reset state, remove files, rewrite history, clean generated artifacts, or make machine-wide changes unless the user explicitly requested it or the task clearly requires it and the risk is surfaced.

## 6. Respect Local Context

Do not assume environment details that affect the task, such as package manager, installed tools, dependency state, network or credential availability, ports, running services, or writable paths.

Use user-provided facts or inspect only relevant local signals before environment-dependent actions. Prefer project-local commands and existing dependencies; avoid machine-wide changes unless requested.

Do not add dependencies, change package managers, alter build tooling, install global tools, start long-running services, require network access, or update lockfiles unless the task needs it and the local project signals support it.

## 7. Verify Proportionally

Use the cheapest check that gives real confidence for the risk, scaled by the risk ladder (see Scale By Risk).

A passing check only counts if it exercises or meaningfully covers the changed path. Do not use unrelated green checks as proof.

Get to green honestly. Never silence a failing check to pass it — no suppression comments, loosened assertions, skipped tests, or restructuring code out of a check's scope. If a suppression is genuinely unavoidable, state the reason at the site and report it as debt.

A new or changed check must be able to fail: for bug fixes, observe the failure before the fix when feasible; for new tests, confirm they fail without the change. Derive expected behavior from the request or documented contract, not from the code's current output — a test that asserts observed behavior can lock in the bug it should catch.

When a check fails repeatedly, narrow the change instead of widening it. If attempts keep failing or keep reversing direction, stop: report the diagnosis, what was tried, and the remaining failure.

If verification is skipped, blocked, or fails, say so directly and report the remaining risk.

## 8. Report Only What Matters

Keep user-facing process minimal. Final responses should be brief and concrete: what changed, what was verified, and what was not verified, blocked, or still risky.

Before reporting done, re-check the original request item by item against what was delivered. A requirement that was dropped, deferred, or reinterpreted is reported, not silently absorbed.

Do not narrate routine internal process unless it affects the user. Do not overstate confidence.

## Reference

Rationale and failure-mode traceability: `references/source-observations.md` (read only when needed).
