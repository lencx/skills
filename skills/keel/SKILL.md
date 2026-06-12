---
name: keel
version: 1.0.0
description: Architecture design and governance protocol for system structure, boundaries, contracts, APIs, schemas, migrations, rewrites, and long-lived codebase health. Use when designing or reviewing architecture, planning structural refactors or migrations, governing tech debt, or containing rewrite risk. Keeps the load-bearing spine small, owned, checked, and deletable over time.
---

# Keel

The keel is the member every other part of a ship hangs from: lay it first, keep it sound, and the rest can be rebuilt at sea. This protocol does the same for software structure — at design time it keeps the load-bearing shape small and explicit; over time it keeps that shape from rotting.

Apply it in the background and surface only the boundary decisions, risks, and trade-offs the user needs. Scale rigor by blast radius: a module-internal layout choice needs little ceremony; a public contract, schema, or cross-team boundary gets the full treatment.

## Owns

- It owns architecture shape decisions: spines, module boundaries, dependency direction, contract surfaces, schemas, and structural refactors.
- It owns architecture governance over time: guard health, exception baselines, rot indicators, deprecation, deletion, and rewrite containment.
- It owns the review vocabulary for structure. When a coding execution protocol is available, pair with it for change execution, implementation verification, and local work preservation; when none is available, Keel still works independently and treats those concerns as outside its scope.

## Does Not Own

- It does not choose a named architecture style, framework, or tooling stack.
- It does not own change execution, implementation verification, or local work preservation.
- It does not prove implementation completeness, release readiness, security, compliance, or production fitness.
- It does not replace domain-specific policy, privacy, data, financial, medical, or legal review.
- It does not require a fixed document schema; each repository chooses how to make the invariants checkable.

## 1. Keep The Spine Small

Before designing anything else, name the few load-bearing objects and the one path work flows through them. Every feature must lower into that path; a feature that needs its own parallel path is a redesign request, not a feature.

Working complex systems evolve from working simple ones. Start from the smallest spine that works, and grow by attaching to it — not by adding peers to it.

Cross-cutting concerns — auth, policy, logging, audit, recovery — are rules applied at transitions, not new modules, modes, or products. Adding a top-level concept requires exceptional evidence: it must cross multiple domains, fail to fit every existing concept, and retire more local rules than it adds (see Metabolize Or Rot).

## 2. Grade Every Surface

Not all code earns the same stability promise. Rank surfaces explicitly:

1. Public contracts and schemas — most expensive to change; versioned, migrated, never silently broken.
2. Interfaces consumed across modules — change with their owning slice; consumers found by tooling.
3. Module internals — no stability promise; free churn behind behavior tests.
4. Assembly and wiring — reshape freely while the layers above stay stable.

The asymmetry is deliberate: internals must stay cheap to rewrite so contracts can afford to be expensive to change. A system where everything is a promise freezes; a system where nothing is a promise shatters.

Every new export, field, flag, or option is a promise someone will stand on. Default new things to the cheapest level that works, and treat any widening of a surface as a contract decision, not a convenience.

Any observable behavior with enough consumers becomes a de facto contract — error text, ordering, timing, and quirks included. Keep the deliberate contract minimal and written so the accidental contract stays small.

## 3. One Truth, Many Projections

Every fact gets exactly one owning source. Caches, copies, generated artifacts, dashboards, transcripts, and views are projections: useful, disposable, never authoritative.

Change derived artifacts only by changing their source and regenerating; never hand-edit them. Copies drift — reference the original instead of restating it.

Layered validation is defense-in-depth only when each layer's responsibility is written down. Two layers checking the same thing without a written split is duplicated truth that will drift apart.

## 4. Make Ownership Explicit

Every module, boundary, and decision has exactly one owner. State what it owns and what it does not own — the does-not-own list prevents more drift than the owns list. A thing claimed by two owners, or by none, is a defect.

Declare dependency direction and keep it one-way. Sibling domains do not import each other; a need shared by two siblings moves down into a layer both can see, it is not copied and not reached for sideways.

Design for deletability: one entry surface per module and consumers enumerable by tooling, so retirement is mechanical rather than archaeological. What cannot be deleted cannot be replaced.

## 5. Design The Negative Path And The Time Axis

A design is not closed when the happy path works. It is closed when denied, failed, partial, stale, and cancelled outcomes have defined behavior and a recovery route. Decide the failure semantics before the feature ships, not during the incident.

Decay lives in the seams and in time, not inside modules: components that are each individually correct still leak when composed along the time axis. For anything stateful, answer before closing the design: what happens when this runs twice, restarts halfway, or replays?

Classify effects by reversibility — reversible, compensable, irreversible — and spend design rigor accordingly. Irreversible effects earn idempotency keys, receipts, and reconciliation; reversible ones should not inherit that weight.

## 6. Guard Boundaries With Falsifiable Checks

A boundary that nothing checks is a suggestion. Lower architectural rules into machine-checked guards — import boundaries, schema validation, structural tests — wherever the rule matters.

A guard that cannot fail is wallpaper: a checker should prove it still detects a planted violation, or it is decoration. An always-green check and a disabled check protect equally — not at all.

Exceptions to a rule are declared, dated, and shrink-only; stale exceptions are deleted, because every silent "just this once" becomes precedent for the next. Escaping a guard by moving code out of its scope is itself a boundary change and gets the same scrutiny the guard enforces.

## 7. Keep The Governed Path Cheapest

If the compliant route costs more than the bypass, every deadline votes for the bypass. Selection beats discipline: the correct path must also be the easiest path, or it will lose to the workaround on every busy week.

A recurring bypass is pricing evidence, not just a discipline failure. Measure the cost gap between the governed path and the workaround, then reduce friction before raising walls — walls train climbers.

## 8. Metabolize Or Rot

Rot is entropy: it cannot be prevented, only metabolized faster than it accumulates. Long-lived systems survive by making change, migration, and deletion institutions, not heroics.

Budget concepts: a new noun, layer, or abstraction must remove more ambiguity than it adds, and its arrival should name a retirement candidate. Nouns that only grow are rot.

Retire deliberately, never abandon: remove the entry surface, let tooling enumerate the dependents, archive what remains as evidence. Old code is evidence of past behavior and risk, not a template to copy forward.

A whole-system rewrite proposal automatically downgrades to naming the smallest rewritable slice. The stability ladder exists precisely so rewrites stay local (see Grade Every Surface).

Rules must carry their reasons. A rule whose reason is lost goes to review — not deleted in ignorance, not worshipped in fear. Architecture is enforced constraints multiplied by traceable reasons; either factor at zero zeroes the product.

## Reference

Read only when needed:

- `references/source-observations.md` — failure-mode mechanisms, provenance, and deliberate omissions; consult before retiring or adding a rule.
- `references/diagnostics.md` — design-review question matrix and measurable rot indicators; consult when running an architecture review or codebase audit.
