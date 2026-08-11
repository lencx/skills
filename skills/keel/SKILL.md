---
name: keel
description: "Design, explore, review, or govern load-bearing architecture at module, boundary, or system scale. Skip work that only implements supplied, fixed architecture. Private/local/reversible choices qualify. Open choices and long-lived health cover responsibility/shape, ownership/authority, interfaces/contracts, dependency boundaries, state/recovery, structural change, architecture drift/rot, guard or exception health, migration, deletion, and rewrite risk."
metadata:
  version: "1.4.0"
  author: "lencx"
---

# Keel

Keel has two coequal jobs: discover and shape the best-supported load-bearing direction, and keep declared architecture enforceable, economical, and deletable as the system evolves. The second job treats drift, guard and exception health, bypass economics, migration, deletion, and rewrite pressure as architecture work when they can change a load-bearing decision or control.

Use *keel* at module, boundary, and system scale for responsibility between parts, authority or ownership, interfaces or contracts, dependency direction, state or recovery ownership, and seams that isolate future change. Use repository-native terms and treat applicable instructions, records, contracts, and entry paths as evidence rather than decoration.

## Composition

- **Apply** when the task must choose, change, compare, or improve a load-bearing outcome; explicitly asks for an architecture/design/RFC/change-set adequacy or conformance judgment; or audits whether declared architecture remains enforced, economical, and deletable as the system evolves. A fixed target remains fixed unless the review finds it infeasible or the request authorizes improvement.
- **Exit** when the request and governing sources fix the material architecture and the remaining task only implements, diagnoses, tunes, tests, or verifies within it. Re-enter only if evidence shows that implementation requires a materially different load-bearing outcome.
- Private, local, reversible, and single-consumer choices can still be architecture; they require less evidence and ceremony, not automatic exclusion.
- Before committing either way, inspect only enough of the request, governing sources, and representative call sites or contracts to distinguish a real open choice from architecture-shaped context. Similar code, sample count, the word *pilot*, and later success or failure are feasibility clues, not target-scope authority.
- Focused workflows retain their method, vocabulary, artifact, and professional judgment. Keel integrates architecture implications; it does not replace product, domain, security, privacy, legal, documentation, or execution ownership.
- Automatic or forced loading grants neither applicability nor action authority. If Keel does not apply, say so briefly and continue with the owning workflow without Keel-specific routes, references, or output framing.

## Solve Constructively

Keel should leave the user with a useful direction, not just constraints or a checklist:

1. **Frame and inspect** — state the decision, desired outcome, authority, hard constraints, and criteria. Search only for evidence likely to change the framing, candidate set, or recommendation.
2. **Form and compare** — derive the smallest set of materially distinct viable directions needed to expose the real tradeoff. Include a simpler or no-change direction when credible; do not invent alternatives when constraints leave one path. Use a bounded model, characterization, conformance check, or reversible experiment when it is the cheapest decision-changing evidence.
3. **Integrate and recommend** — preserve focused-workflow findings, compare candidates on the same criteria, and recommend the best-supported direction with its material tradeoffs and confidence. Surface a better option the user did not name when evidence supports it without silently changing the goal.
4. **Deepen only what won** — resolve the numbered concerns and load a specialized reference only when its answer can still change the recommendation, adoption, recovery, or retirement plan. Use `references/task-routes-and-lenses.md` only when a formal route will improve a substantial design or review.

Stop when more search, options, or detail are unlikely to change the recommendation or close a material risk. If new evidence reopens a viable direction, compare it rather than defending the incumbent.

Finish in one of two states:

- **Closed** — the best-supported direction, decision authority, accountability, and material risks are resolved; no known unknown can still change the decision.
- **Open** — give the strongest bounded recommendation or experiment available, the decision-changing unknown, and its owner or ownership gap plus the next evidence or decision trigger. Alternatives are included only when real.

For a low-blast-radius internal choice, a concise comparison and recommendation may be complete. Do not invent compatibility, migration, recovery, guards, governance, or artifacts that cannot change the choice.

For governance work, a constructive result may be subtraction, restored enforcement, a cheaper governed path, staged migration, retirement, or justified no action—not a new layer by default.

## 1. Keep The Spine Small

Map only the load-bearing points that apply, using repository-native terms. Entry surfaces, mutation admission, accepted state, externally visible effects, completion, and recovery are examples, not a required inventory. When a repository-declared or risk-plausible point is omitted, state why it is absent or inapplicable rather than inventing a stage. Changing or adding an applicable point is a boundary decision.

A load-bearing decision chain is not one controller, writer, process, transport, or deployment topology. Multiple execution mechanisms may coexist when they preserve every applicable declared boundary contract. A new or changed load-bearing point is a redesign: name the outcome, force, or blocker it addresses; its reconciliation rule when relevant; and the path it changes or retires.

Cross-cutting mechanisms may have dedicated owners without becoming parallel authority roots or bypasses. Add a top-level concept only when its jurisdiction is explicit, no existing owner can carry it without distortion, and it removes more ambiguity than it adds.

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

Follow declared dependency direction and cross boundaries through their public surface or assembly seam. Move semantics into a shared domain only when they are neutral and accountability belongs there; two consumers needing the same capability is insufficient.

A first tranche and its target scope are separate decisions. Resolve local cleanup, rollout template, or disposable experiment from the request or an authoritative scope source—not sample count, code shape, the word *pilot*, or a later outcome. If broader family scope is declared, test the seam against representative, materially distinct members without migrating them; if scope remains material and unresolved, keep reuse unclaimed and recommend the cheapest clarification or reversible experiment.

Prefer bounded, declared, tool-enumerable entry surfaces so retirement remains possible.

## 5. Design The Negative Path And The Time Axis

Define behavior or an explicit unknown for material negative outcomes. Examine only cases plausible for the design, including failure, partial or stale work, cancellation, timeout, duplication, concurrency, uncertain commit, retry, restart, and replay. Do not invent a state machine for a reversible private choice.

Close each applicable recovery with:

- detection or trigger;
- decision authority and recovery owner;
- rollback, forward repair, or reconciliation action;
- terminal invariant and completion evidence; and
- escalation when convergence fails.

Classify effects as reversible, compensable, or irreversible and scale controls accordingly. `references/recovery-guards.md` supplies control examples when needed; the design must establish closure, not merely name a recovery route.

## 6. Guard Boundaries With Falsifiable Checks

Keep a traceable reason for each material architecture rule. Add a falsifiable guard or explicit review only when violation creates meaningful risk and the check can change action. A guard needs evidence that it detects a known or safely planted violation; an execution workflow owns how that evidence is produced.

Default exception baselines to shrink-only. Growth is a boundary decision that records decision authority, reason, narrow scope, and removal condition. Moving code outside a guard's scope is also a boundary change. Read `references/recovery-guards.md` when designing or retiring a guard or changing an exception baseline.

## 7. Keep The Governed Path Cheapest

Reduce avoidable friction without weakening controlling product, safety, security, privacy, or compliance policy. Recurring bypass signals route cost, not misconduct. The owning workflow may contain active risk immediately; trace containment scope, decision authority, cost, and exit while repairing the durable path.

## 8. Metabolize Or Rot

Rot is entropy: it cannot be prevented, only metabolized faster than it accumulates. Make drift, migration, and deletion routine. A new noun, layer, or abstraction must remove more ambiguity than it adds. In an existing system, name what it retires; otherwise record net growth, accountability, reason, and review trigger. In greenfield work, compare it with a simpler omitted alternative instead of inventing a retirement ledger.

A retirement closes the active entry surface, enumerates and migrates or retires dependents, and preserves required behavioral evidence outside the implementation. Historical code informs behavior and risk; it does not define the target topology.

Begin a rewrite by deriving the target terminal invariant and target seam from representative evidence. Then select the smallest independently replaceable implementation slice and its preserved contracts. Expand only when evidence shows that a bounded migration cannot close safely or carries greater migration or recovery risk than a broader replacement.

A whole-target replacement is valid when the target is bounded, its surfaces, dependents, state, preserved contracts, acceptance evidence, and recovery path are known, and representative smaller slices do not reach the same invariant at equal or lower evidenced risk. Do not demand proof over unbounded hypothetical slices.

## References

Read only when needed:

- `references/rule-rationale.md` — before changing, auditing, replacing, or retiring a Keel rule.
- `references/task-routes-and-lenses.md` — when a substantial greenfield design, architecture review, boundary change, or structural refactor benefits from a formal route.
- `references/surface-cutover.md` — when repository grades are absent, a surface may be a de facto contract, or cutover evidence is needed.
- `references/recovery-guards.md` — when selecting recovery controls, designing or retiring a guard, or changing an exception baseline.
- `references/rot-audit.md` — when governing architecture decay or auditing drift, recurring bypass, exception growth, or long-lived health.
- `references/architecture-records.md` — when records carry or route load-bearing architecture facts.
