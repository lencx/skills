---
name: keel
description: "Design or review load-bearing architecture: authority, ownership, public, persisted, or cross-boundary contracts, dependency boundaries, recovery, architecture guards, migration, rewrite, deprecation, deletion, and drift. Use when work establishes, changes, or evaluates these decisions or controls; skip focused work that only consumes them as supplied inputs and preserves them."
metadata:
  version: "1.3.0"
  author: "lencx"
---

# Keel

Use *keel* for load-bearing facts, transitions, contracts, and accountability. Resolve repository-declared instructions, records, contracts, entry paths, and guards before analysis; use local terms. Conflicting, stale, or missing sources or precedence are findings.

Separate exploration from closure. In greenfield work, treat user goals, external constraints, and provenance-bearing domain inputs as evidence, not inherited architecture. Propose minimal options, label assumptions, and leave decision-changing unknowns open.

## Composition

- Repository sources set facts, terms, precedence, and contract scope; Keel does not elevate every document.
- Focused workflows own method, vocabulary, artifact, and completion. Product and UI design, domain modeling, documentation, and professional security, threat, privacy, compliance, legal, financial, or medical judgments remain theirs.
- Compose Keel only when the same task establishes or changes a load-bearing authority, ownership, contract, cutover, or recovery decision. If those decisions are supplied and unchanged, skip Keel. Consume focused evidence and return only architecture implications.
- Keel closes authority, accountability, compatibility, dependencies, recovery, guards, migration, and deletion; it does not choose architecture style, framework, stack, or product shape.
- The user and host grant action authority. Execution workflows govern mutation, work preservation, test mechanics, and verification. Keel proves neither implementation nor production fitness.

A lens applies when its answer could change a load-bearing decision or closure. *Proportionate* means the lightest evidence or control that closes risk given impact, reversibility, and uncertainty. Resolve each applicable numbered lens; keep decision-changing unknowns open. Give an auditable skip reason when omission could hide risk.

## 1. Keep The Spine Small

Map only the load-bearing points that apply, using repository-native terms. Examples include entry surfaces, mutation admission, accepted state, externally visible effects, completion, and recovery. Do not inventory every example. When a repository-declared or risk-plausible point is omitted, state why it is absent or inapplicable rather than inventing a stage. Changing or adding an applicable point is a boundary decision.

A load-bearing decision chain is not one controller, writer, process, transport, or deployment topology. Multiple execution mechanisms may coexist when they preserve every applicable declared boundary contract. A new or changed load-bearing point is a redesign: name the blocker it solves, its reconciliation rule when relevant, and the path it changes or retires.

Cross-cutting mechanisms may have dedicated owners without becoming parallel authority roots or bypasses. Add a top-level concept only with explicit jurisdiction and decision rights, no undistorted existing owner, and a passing section 8 net-growth review.

## 2. Grade Every Surface

Grade each concrete surface by the compatibility promise it carries, using repository categories when available. Otherwise read `references/surface-cutover.md`. Do not assign one grade to an entire domain or mechanism: its private implementation and cross-boundary contract may differ.

Every export, field, flag, option, and consumer-relied observable is a potential promise. Choose the narrowest promise that satisfies the requirement. Public, persisted, and cross-boundary surfaces need an explicit compatibility or cutover strategy; never break one silently.

A clean break may converge directly on the target only when target and cutover decision authority, consumer and data scope, old-entry retirement, and recovery are explicit. Otherwise version or migrate.

## 3. Declare Authority, Writers, And Projections

For each material fact and jurisdiction, use the simplest supported model. Declare only dimensions that exist and keep them independent:

- **Fact authority** — source or rule determining accepted truth.
- **Decision authority** — actor allowed to approve or change a load-bearing choice.
- **Accountable owner** — responsibility for semantics, policy, lifecycle, and escalation; section 4 covers joint accountability.
- **Writers and admission** — who may propose a mutation and through which route. Writing grants neither ownership nor fact authority.
- **Data partition** — jurisdiction, boundaries, and transfer rules.
- **Replica** — role, provenance, freshness, and read semantics.
- **Commit** — acceptance, ordering or version, visibility, and quorum.
- **Conflict** — prevention or detection plus the convergence rule.
- **Recovery** — trigger, decision authority, owner, action, terminal invariant, and evidence required by section 5.

These dimensions coexist; partitioning, replication, quorum, and multi-writer admission do not replace an authority model.

An artifact may project one fact while authoritatively recording another; declare each relation separately. Change a projection through its source and regeneration path. Resolve overlapping fact authority instead of calling writers interchangeable.

## 4. Make Ownership Explicit

Give each material fact, contract, boundary decision, and lifecycle an accountability model. Owner differs from writer, maintainer, operator, and consumer; one owner is common, not universal. Joint or federated accountability declares jurisdiction, decision rights, tie-break or escalation, and lifecycle.

State what each load-bearing owner owns. Where adjacent duties could be confused, also state what it **does not own**.

Follow declared dependency direction and cross boundaries through their public surface or assembly seam. Move semantics into a shared domain only when they are neutral and accountability belongs there; two consumers needing the same capability is insufficient. Prefer bounded, declared, tool-enumerable entry surfaces so retirement remains possible.

## 5. Design The Negative Path And The Time Axis

Every material negative outcome has defined behavior or an explicit unknown; a decision-changing unknown keeps the design open. Examine applicable denial, failure, partial, stale, cancellation, timeout, duplicate, out-of-order, concurrent-conflict, partition, and uncertain-commit cases. For stateful or repeatable work, also examine retry, restart, and replay. Do not invent a state machine for a reversible private choice.

Close each applicable recovery with:

- detection or trigger;
- decision authority and recovery owner;
- rollback, forward repair, or reconciliation action;
- terminal invariant and completion evidence; and
- escalation when convergence fails.

Classify effects as reversible, compensable, or irreversible and scale controls accordingly. `references/recovery-guards.md` supplies control examples when needed; the design must establish closure, not merely name a recovery route.

## 6. Guard Boundaries With Falsifiable Checks

Pair each material architecture rule with a traceable reason and a proportionate falsifiable guard. When automation is not justified, define an explicit auditable review and the evidence it leaves. Layered validation is defense-in-depth only when each layer has a distinct responsibility.

A guard needs evidence that it detects a known or safely planted violation. Keel specifies sensitivity and freshness requirements; an authorized execution workflow decides whether and how to run the negative control. A quiet, falsifiable guard is not dead merely because no real violation occurred.

Default exception baselines to shrink-only. Growth is a boundary decision that records decision authority, reason, narrow scope, and removal condition. Moving code outside a guard's scope is also a boundary change. Read `references/recovery-guards.md` when designing or retiring a guard or changing an exception baseline.

## 7. Keep The Governed Path Cheapest

Reduce avoidable friction without weakening controlling product, safety, security, privacy, or compliance policy. Recurring bypass signals route cost, not misconduct. The owning workflow may contain active risk immediately; trace containment scope, decision authority, cost, and exit while repairing the durable path.

## 8. Keep Change And Deletion Routine

Make drift, migration, and deletion routine. A new noun, layer, or abstraction must remove more ambiguity than it adds. In an existing system, name what it retires; otherwise record net growth, accountability, reason, and review trigger. In greenfield work, compare it with a simpler omitted alternative instead of inventing a retirement ledger.

A retirement closes the active entry surface, enumerates and migrates or retires dependents, and preserves required behavioral evidence outside the implementation. Historical code informs behavior and risk; it does not define the target topology.

Begin a rewrite with the smallest independently replaceable slice and its preserved contracts. Expand only if bounded migration cannot close. Whole-target replacement closes only when the target is bounded and independently replaceable; entry surfaces, dependents, state, and preserved contracts are scoped; sections 2 and 5 close; and every viable smaller slice cannot reach the same terminal invariant or has greater evidenced migration or recovery risk.

## References

Read only when needed:

- `references/rule-rationale.md` — rule mechanisms, provenance, omissions.
- `references/task-routes-and-lenses.md` — design and review routes and matrix.
- `references/surface-cutover.md` — fallback compatibility and cutover evidence.
- `references/recovery-guards.md` — recovery, guard, and exception details.
- `references/rot-audit.md` — drift and long-lived-health indicators.
- `references/architecture-records.md` — record authority, routing, and delegated structure.
