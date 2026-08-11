---
name: coding-protocol
description: "Risk-scaled guardrails for repo code/config/test/contract changes, debugging, code review, implementation plans, or Git mutations. In mixed tasks, govern only that work. Skip architecture decision/review, explanation, contract-preserving prose, and status."
---

# Coding Protocol

A low-friction protocol for reliable repository execution and code-evidence work. When applicable, run it in the background; surface only decisions, blockers, verification, and material risk.

## Applicability Gate

Before any protocol step or reference read, select exactly one state in this order: Mixed, Execution, Evidence, Exit. Repository execution means implementing or planning a code, configuration, test, Git-state, or declared-contract change; code evidence means a repository-scoped diagnosis or code review. A contract-preserving prose-only edit is neither.

- **Mixed** — the task includes an Execution or Evidence portion plus a substantive portion owned by another workflow. Apply this protocol only to repository execution or code evidence; do not reshape the other workflow.
- **Execution** — the only applicable responsibility is authorized repository execution. Apply this protocol to that work. A plan authorizes planning, not mutation.
- **Evidence** — the only applicable responsibility is a code-evidence judgment without mutation authority. Apply read-only constraints; a diagnosis or review finding does not authorize a fix.
- **Exit** — the deliverable carries neither repository-execution nor code-evidence responsibility. After a forced or mistaken load, state the mismatch briefly. If the host exposes a skill catalog, inspect it and completely read a suitable owning workflow when one is present; otherwise continue with the general workflow. Stop using this protocol's framing, references, and completion language.

## Composition

Repository evidence supplies local facts; repository instructions and contracts supply required checks. A focused workflow owns its method, vocabulary, artifact, professional judgment, and completion criterion. This protocol supplies only cross-cutting execution and code-evidence constraints: authorization, action-scope containment, work preservation, environment assumptions, evidence integrity, proportional verification, and truthful reporting.

Combine sources by concern; activation never supersedes another source, changes its completion criterion, or expands authority. Follow the host's established precedence when requirements conflict. Surface a material same-level conflict instead of silently choosing or accumulating incompatible requirements.

Use the focused workflow's completion criterion when one applies. Otherwise, use the narrowest safe method supported by repository evidence and, for multi-step work, name an observable completion criterion. Work as `[action] -> [check]`, revising the route when evidence changes. Expose a plan only when it clarifies risk, coordination, or sequencing.

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

Evidence stays read-only: bound inspection and conclusions to the requested code-evidence judgment. Execution and the execution portion of Mixed make the smallest complete change consistent with the authorized request, repository contracts, and focused workflow. Match local patterns. Every changed line must trace to one of those sources: avoid unrequested features, abstractions, speculative paths, formatting churn, dependencies, and unrelated fixes. Necessary call-site, invariant, migration, recovery, and verification changes remain in scope.

An execution slice does not define or expand the intended target. Take target scope from the request or an authoritative source. If unresolved scope would materially change the implementation, its promises, or required evidence, ask one decision-changing question or keep the change reversible and broader reuse unclaimed. A declared broader target may require representative evidence; it does not authorize migrating the remainder.

For that execution work, prefer a simpler supported solution when the mechanism was only a suggestion; preserve it when it is material to user intent. Refactor only as needed for a safe completion. Remove artifacts made obsolete by this task; report unrelated issues and leave pre-existing dead code alone.

## 5. Preserve User Work

Preserve user changes outside the task. Before broad edits, inspect the relevant diff; treat unfamiliar modifications as user-owned unless evidence ties them to this task. Do not overwrite, delete, move, reformat, or revert them.

Task necessity is not destructive authorization. Discarding work, resetting state, rewriting history, deleting broad or unresolved targets, and machine-wide changes require explicit authority. An in-scope edit may remove a precisely identified obsolete file when evidence establishes necessity and the recovery risk is understood. Once authority, target, and recovery are resolved, destructiveness alone is not a blocker.

## 6. Respect Local Context

Inspect relevant local signals before depending on package managers, tools, dependencies, network, credentials, ports, services, or writable paths. Prefer project-local commands and existing dependencies. Add dependencies, change tooling or lockfiles, start services, use network, or alter machine-wide state only when the task needs it and project evidence supports it.

## 7. Verify Proportionally

Run checks required by the user, repository, or focused workflow; add the cheapest evidence proportional to risk. A green gate proves behavior only when it exercises the changed path.

Get to green honestly. A new or changed evidentiary check must be capable of failing, and expected behavior must come from the request, a repository contract, or an explicit characterization. Never turn a failure green through weaker assertions, skipped checks, unjustified suppression, or scope escape.

Diagnose before widening the change. If attempts thrash, stop with the diagnosis. Report every skipped, blocked, or failed verification and its residual risk.

## 8. Report Only What Matters

Produce the artifact and handoff required by the task or focused workflow. Report what changed or was concluded, what was verified, and what remains unverified, blocked, or risky. Before declaring completion, re-check the primary criterion and every original requirement; name anything dropped, deferred, or reinterpreted. Keep the response concrete, omit routine internal process, and do not overstate confidence.

## References

After the applicability gate, load only the reference that applies:

- `references/verification.md` — only when designing or changing an evidentiary check, establishing a negative control, relying on representation-level evidence, or considering a suppression.
- `references/rule-rationale.md` — only before changing or auditing this protocol's rules; keep every failure-mode-to-section mapping accurate.

Load neither reference on Exit.
