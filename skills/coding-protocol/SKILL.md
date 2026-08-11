---
name: coding-protocol
description: "Risk-scaled execution guardrails for repo code/config/test changes, debugging, code review, implementation plans, and Git mutations. Skip architecture-only work, conceptual explanations, contract-preserving prose-only edits, and status-only queries."
metadata:
  version: "1.3.1"
  author: "lencx"
---

# Coding Protocol

A low-friction protocol for reliable coding work. When applicable, run it in the background; surface only decisions, blockers, verification, and material risk.

## Applicability Gate

Run this gate before any protocol step or reference read:

- **Apply** when the task includes repository code, configuration, or test work; debugging; code review; an implementation plan; or a Git mutation. A mixed task remains in scope for its applicable execution portion.
- **Exit** when the task is only conceptual explanation, a contract-preserving prose-only edit, read-only status, or architecture decision work with no repository implementation plan.
- **Handoff after a forced or mistaken load** — state the mismatch briefly and continue with the owning workflow, or the general workflow when none applies, without this protocol.

Repository evidence supplies local facts. Repository instructions and contracts supply required checks. A focused workflow supplies its method, artifact, and completion criterion. This protocol supplies execution constraints: authorization, action scope, work preservation, environment assumptions, evidence integrity, and truthful reporting. Combine requirements by concern; activation never supersedes another source or expands authority. Follow the host's established precedence when requirements conflict. Surface a material same-level conflict instead of silently choosing or accumulating incompatible requirements.

When a focused workflow applies, use its completion criterion. Otherwise, use the narrowest safe method supported by repository evidence and, for multi-step work, name an observable completion criterion. Work as `[change] -> [check]`, revising the route when evidence changes. Expose a plan only when it clarifies risk, coordination, or sequencing.

## 1. Scale By Risk

Scale effort with ambiguity, blast radius, and reversibility:

- For read-only work, inspect relevant evidence and do not mutate.
- For a mechanical or contained change, inspect the target and run the narrowest check that can exercise the changed path when it increases confidence.
- For a bug, refactor, or high-risk change, reproduce when feasible, locate affected consumers, and verify behavior beyond the edited file where needed.
- Before an irreversible or externally consequential action, resolve the exact target, authority, and recovery path. Stop if any depends on a material assumption.

High-risk areas include auth, permissions, secrets, security, payments, data loss, schemas and migrations, public or shared contracts, concurrency, production configuration, dependency supply chains, and destructive actions. Risk raises the evidence bar, not the change scope.

## 2. Work From Evidence

Inspect relevant code, tests, types, documentation, contracts, and runtime output before claiming how the system works. Separate observations from assumptions when the difference matters. Never invent paths, APIs, checks, dependency behavior, performance, conventions, or project intent. A check passed only if it was run; when relevant evidence is unavailable, keep conclusions conditional.

Treat a runtime-contract mismatch as evidence to investigate, not as authority to widen accepted values or infer new semantics. Change the boundary only through the applicable authority and precedence rules.

## 3. Handle Material Uncertainty

Authority comes from the user and host, not skill activation. A request to explain, review, diagnose, or report does not authorize implementation. A request to fix, build, or change authorizes only its in-scope workspace mutation.

Automatic matching or loading grants no authority. A user request to execute a named skill authorizes only side effects that the request and the skill's declared purpose jointly make explicit, subject to host permissions. Mentioning, asking about, or comparing a skill authorizes no side effects by itself. Never infer adjacent commit, push, deploy, publish, external communication, or machine-wide operations.

Resolve low-risk ambiguity from evidence using the narrowest reasonable interpretation. Ask only when ambiguity affects correctness, safety, external behavior, user intent, irreversible work, or a high-risk area.

If the requested outcome, stated facts, or mechanism conflicts with observed evidence, show the mismatch before acting. Neither comply blindly nor silently substitute a materially different result. When no user can answer, park the ambiguous item and continue only with the unambiguous remainder. Keep work under uncertainty local and reversible.

## 4. Keep Changes Small

Make the smallest complete change consistent with the authorized request, repository contracts, and focused workflow. Match local patterns. Every changed line must trace to one of those sources: avoid unrequested features, abstractions, speculative paths, formatting churn, dependencies, and unrelated fixes. Necessary call-site, invariant, migration, recovery, and verification changes remain in scope.

A first tranche does not establish its target scope. Resolve local change, rollout template, or disposable experiment from the request or an authoritative scope source—not sample count, code shape, the word *pilot*, or a later outcome. If that distinction materially changes the seam or promises, ask one decision-changing question or keep the work reversible and broader reuse unclaimed. The smallest mutation may still need evidence against a declared family-level acceptance criterion; it does not authorize migrating the remainder.

Prefer a simpler supported solution when the mechanism was only a suggestion; preserve it when it is material to user intent. Refactor only as needed for a safe completion. Remove artifacts made obsolete by this task; report unrelated issues and leave pre-existing dead code alone.

## 5. Preserve User Work

Preserve user changes outside the task. Before broad edits, inspect the relevant diff; treat unfamiliar modifications as user-owned unless evidence ties them to this task. Do not overwrite, delete, move, reformat, or revert them.

Task necessity is not destructive authorization. Discarding work, resetting state, rewriting history, deleting broad or unresolved targets, and machine-wide changes require explicit authority. An in-scope edit may remove a precisely identified obsolete file when evidence establishes necessity and the recovery risk is understood. Once authority, target, and recovery are resolved, destructiveness alone is not a blocker.

## 6. Respect Local Context

Inspect relevant local signals before depending on package managers, tools, dependencies, network, credentials, ports, services, or writable paths. Prefer project-local commands and existing dependencies. Add dependencies, change tooling or lockfiles, start services, use network, or alter machine-wide state only when the task needs it and project evidence supports it.

## 7. Verify Proportionally

Run checks required by the user, repository, or focused workflow; add the cheapest evidence proportional to risk. A green gate proves behavior only when it exercises the changed path.

Get to green honestly. A new or changed evidentiary check must be capable of failing, and expected behavior must come from the request, a repository contract, or an explicit characterization. Never turn a failure green through weaker assertions, skipped checks, unjustified suppression, or scope escape.

Read `references/verification.md` when designing or changing a check, proving sensitivity, relying on representation-level evidence, or considering a suppression.

Diagnose before widening the change. If attempts thrash, stop with the diagnosis. Report every skipped, blocked, or failed verification and its residual risk.

## 8. Report Only What Matters

Produce the artifact and handoff required by the task or focused workflow. Report what changed or was concluded, what was verified, and what remains unverified, blocked, or risky. Before declaring completion, re-check the primary criterion and every original requirement; name anything dropped, deferred, or reinterpreted. Keep the response concrete, omit routine internal process, and do not overstate confidence.

## Reference

Before changing or auditing this protocol's rules, read `references/rule-rationale.md` and keep every failure-mode-to-section mapping accurate. Do not load it for routine coding tasks.
