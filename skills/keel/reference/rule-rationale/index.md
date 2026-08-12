---
title: "Rule Rationale"
description: "Canonical Keel reference: Rule Rationale."
image: "https://skills.lencx.me/og.png"
---

> Documentation Index
> Fetch the complete documentation index at: https://skills.lencx.me/llms.txt
> Use this file to discover all available pages before exploring further.

# Rule Rationale

> Rendered directly from the [canonical source](https://github.com/lencx/skills/blob/main/skills/keel/references/rule-rationale.md).

SKILL.md states the rules; this file records what the rules cannot carry: the mechanism that makes each failure mode happen, the public practice the rules translate, and what was deliberately left out.

Observed silence is weak evidence: a rule may be effective, the path dormant, or the detector blind. Rule retirement is justified by a simpler obligation protecting the same invariant or by evidence that the mechanism is no longer decision-relevant; silence alone establishes neither.

## Failure modes → mechanisms

This is a maintenance index, not a requirement for one rule or test per row. Keep a row only while it explains a non-obvious design choice. Prefer merging overlapping mechanisms over adding another clause, route, or completion criterion.

| Failure mode | Mechanism — why it keeps happening | Rule |
| --- | --- | --- |
| **Spine bloat** | Adding an authority or completion path outside the declared model is locally cheaper than negotiating a boundary and reconciliation rule; the integration cost is deferred to every future reader. Deadlines select the peer. | 1 (load-bearing-point scope; new-point gate; top-level-concept jurisdiction) |
| **Execution-topology collapse** | Equating one load-bearing decision chain with one controller, process, queue, or plan flattens legitimate replaceable mechanisms and leaks today's execution topology into the architecture contract. Treating every possible point as mandatory similarly invents write, commit, effect, or recovery stages in simpler systems. | 1 (omission discipline; topology coexistence) |
| **Product-shape overreach** | Turning a load-bearing-boundary heuristic into a ban on product modes or single-domain top-level concepts substitutes architecture taste for user, repository, and focused product-design evidence. | 1 (top-level-concept jurisdiction) |
| **Constraint-only architecture** | Risks and missing facts are easier to enumerate than a coherent target direction. The first plausible seam can also become an incumbent before real alternatives are compared. | Decision; Judgment; Governance; Solve Constructively; Closed/Open; 4 (Target scope); 8 |
| **Greenfield authority vacuum** | With no repository precedent, an agent either stalls indefinitely, discards supplied alternatives, or imports its preferred topology as fact. An answer-shaped template can also manufacture alternatives because an empty slot looks unfinished. | Decision (Greenfield evidence); Solve Constructively; Closed/Open; 1; 4 |
| **Accidental stability** | Exporting is one keystroke; the promise it creates is invisible until changing it breaks a consumer. A declared clean target can likewise be mistaken for cutover authority while consumers, data, old routes, or recovery remain unresolved. | 2 (surface grading; potential promises; clean-break gate) |
| **Load-bearing accident** | With enough consumers, every observable behavior is depended on regardless of intent (Hyrum's law). The contract you wrote is always a subset of the contract you actually shipped. | 2 (potential promises; compatibility/cutover) |
| **Truth fragmentation** | Replicas and generated files are easier to hand-edit than their sources, so provenance and reconciliation decay. Imposed record maps can add an editable route, confuse decision with editorial authority, override ownership, or rewrite lifecycle history. | 3 (independent authority dimensions; projection provenance) |
| **Projection-category collapse** | Treating a file kind such as cache, transcript, or view as permanently non-authoritative hides independent operational facts that the artifact legitimately owns, while still failing to identify which source facts it merely projects. | 3 (projection provenance) |
| **Authority-model collapse** | Fact authority, ownership, write admission, data partition, replication, commit, conflict, and recovery are orthogonal. Treating them as competing types—or forcing one writer or owner—destroys availability and jurisdiction semantics. | 3 (independent authority dimensions); 4 (accountability model) |
| **Ambiguous ownership** | Accountability decays silently when decision rights, partitions, tie-breakers, or lifecycle responsibility are missing. Either "everyone owns it" or an invented sole owner can conceal the real defect. | 4 (accountability model; owned/excluded scope) |
| **Ownership-role collapse** | Confusing artifact or domain with responsibility either lets Keel replace focused judgment or skips Keel when that work must also change architecture. Automatic loading creates pressure to apply Keel even when the task only consumes fixed decisions. | State And Ownership (focused ownership; Exit); 4 |
| **Sideways coupling** | Reaching into another domain's internals is one import; negotiating a declared public surface or assembly seam is a design conversation. Selection favors the import. Deletability dies first, replaceability second. | 4 (declared dependency surfaces) |
| **Shared-kernel dumping** | Moving domain semantics into a generic lower layer satisfies the import graph immediately, but erases focused accountability and turns the shared layer into a permanent coordination tax. | 4 (shared-domain neutrality) |
| **Target-scope collapse** | Small-change pressure makes the first migrated examples feel like the whole target. Sample count, the label “pilot,” and later outcomes reveal feasibility, not whether the intended result was local, reusable, or disposable. | 4 (Target scope) |
| **Happy-path architecture** | Demos and polished reports reward premature closure. A named recovery route or confident conclusion can hide missing authority, ownership, terminal invariants, or next evidence. | Judgment; Governance; Closed/Open; 5 |
| **Time-axis leaks** | Components are tested in single-process, single-run harnesses; restart, retry, replay, uncertain commit, and failed convergence exist only in production. Every layer can be individually correct while the composition leaks along the time axis. | 5 (time-axis cases; recovery closure) |
| **Architecture ceremony inflation** | Treating private or reversible scope as non-architectural loses real module choices; applying every concern to those choices makes governance costlier than bypassing it. | State And Ownership (proportionality); Solve Constructively; 5; 6; 8 |
| **Paper boundaries** | An unowned prose-only rule is easy to bypass and forget. Material rules need proportionate falsifiable enforcement; when automation is not justified, the review mechanism and its evidence still need to be explicit and auditable. | 6 (rule reason; falsifiable guard; auditable review) |
| **Wallpaper guards** | A guard that never fires is indistinguishable from a working one until someone plants a violation. Noisy guards get disabled; silent ones get trusted. Both end at zero protection. | 6 (guard sensitivity) |
| **Quiet-guard retirement** | Using the absence of real violations as guard-health evidence retires a healthy boundary check even when its negative control still proves that the protected mechanism and detector are live. | 6; 8 |
| **Exception accretion** | Each exception is individually reasonable; the list only grows because removal has no owner and no deadline. | 6 (shrink-only exceptions) |
| **Pricing inversion** | After controlling product, safety, security, privacy, or compliance requirements are accounted for, avoidable cost still selects the bypass under deadline and each successful bypass lowers the social cost of the next. Discipline cannot outrun economics. | 7 (governed-path cost) |
| **Containment deferral** | Treating “make the governed path cheapest” as a strict sequencing law can leave an active safety or correctness breach open while the ideal low-friction route is built. Immediate containment and durable path economics operate on different time horizons. | 7 (containment versus durable repair) |
| **Concept inflation** | Naming a new thing is the author's joy and the reader's tax, and the tax is invisible in the PR that adds it. Saturated cognition breeds patch-on-patch. | 8 (concept net growth) |
| **Rewrite gravity** | Once comprehension cost exceeds rewrite cost for one individual, the rewrite looks locally rational; the institutional knowledge it destroys was never on that individual's balance sheet. | task-routes-and-lenses.md (Rewrite branch); 8 (retirement evidence) |
| **Rewrite containment dogma** | Treating the smallest-slice heuristic as an absolute preserves migration machinery even when a bounded replacement cannot close or the whole target is cheap, isolated, and explicitly replaceable. | task-routes-and-lenses.md (Rewrite branch: bounded-slice and whole-target gates); 8 |
| **Knowledge evaporation** | Reasons live in heads and chat logs; rules live in files. The rule outlives the reason and becomes either superstition or noise. When architecture is treated as design-time work only, drift, stale guards, bypass economics, and undeletable structure stay invisible until a rewrite. | Governance; 6; 7; 8 |

## Translated practice (provenance)

What each section borrows, so the borrowing can be re-examined at the source if a rule comes under question:

- **Linux** — graded stability (userspace contract sacred, in-kernel interfaces refuse stability promises) → section 2.
- **Git** — plumbing/porcelain stability split → section 2 and the Assembly or wiring fallback grade in `surface-cutover.md`.
- **SQLite** — invariants sunk into file formats, state machines, and a test corpus rather than convention → section 6.
- **PostgreSQL** — change classes, upgrade paths, and deprecation as routine institutions rather than heroics → section 8.
- **Hyrum's law** → section 2. **Gall's law** → section 1.
- **Conway's law, attention form** — structure mirrors the communication structure of its maintainers; for agent-maintained code that structure is the context window, so architecture that cannot be navigated in bounded reads will be bypassed, then forgotten → sections 1 and 7.

## Deliberate omissions

Recorded so they are not "discovered missing" and re-added by accident:

- **Built-in solution-shape canon** (event sourcing, CQRS, microservices vs monolith, hexagonal, …) — Keel does not prescribe a timeless preferred shape or carry an inventory of patterns. It may generate and recommend concrete shapes from task evidence, focused knowledge, and engineering practice; named patterns enter only when they help explain or test a viable direction. Baking them into the rule set would date the skill and bias discovery.
- **Org-design mechanics** (maintainer hierarchies, LTS branch policy, RFC committees) — they presume a human organization; the protocol must also work for a single agent session.
- **Mandatory documentation tooling** (universal frontmatter schemas, manifest formats, named checkers) — the protocol states the invariant and defaults to repository-native mechanisms. The structure decision ladder in `architecture-records.md` applies only when format and lifecycle authority are explicitly delegated.
- **Repository-specific topology and contract vocabulary** — Keel reads and obeys authoritative project sources; it does not copy them into a generic rule set.

Source: https://skills.lencx.me/skills/keel/reference/rule-rationale/index.mdx
