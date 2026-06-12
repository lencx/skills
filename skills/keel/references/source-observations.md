# Source Observations

SKILL.md states the rules; this file records what the rules cannot carry:
the mechanism that makes each failure mode happen, the public practice the
rules translate, and what was deliberately left out. Read it when deciding
whether a rule still earns its place — a rule is retired by checking
whether its mechanism still operates, not by vote or by feel.

## Failure modes → mechanisms

Keep this map true in both directions: a failure mode with no rule, or a
rule with no mechanism here, is drift. The mechanism column is the point —
it is what SKILL.md's terse rules omit, and what a future maintainer needs
to judge whether a rule has become dead armor.

| Failure mode | Mechanism — why it keeps happening | Rule |
| --- | --- | --- |
| **Spine bloat** | Adding a peer subsystem is locally cheaper than negotiating with the owner of the existing path; the integration cost is deferred to every future reader. Deadlines select the peer. | 1 |
| **Accidental stability** | Exporting is one keystroke; the promise it creates is invisible at creation time and only priced later, when changing it breaks a consumer. Promises get minted as a side effect. | 2 |
| **Load-bearing accident** | With enough consumers, every observable behavior is depended on regardless of intent (Hyrum's law). The contract you wrote is always a subset of the contract you actually shipped. | 2 |
| **Truth fragmentation** | The copy is easier to edit than the source, so edits land on the copy and the source decays into a lie. Generated files invite hand-edits whenever the generator is slower than a text editor. | 3 |
| **Orphan / dual ownership** | Ownership decays silently: files keep churning while the owner of record stops looking. "Everyone's module" means no one re-checks its invariants. | 4 |
| **Sideways coupling** | Reaching for a sibling is one import; routing through the shared layer is a design conversation. Selection favors the import. Deletability dies first, replaceability second. | 4 |
| **Happy-path architecture** | Demos reward the happy path; failure semantics have no demo. Negative paths end up designed during the incident, under the worst possible conditions. | 5 |
| **Time-axis leaks** | Components are tested in single-process, single-run harnesses; restart, retry, and replay exist only in production. Every layer can be individually correct while the composition leaks along the time axis. | 5 |
| **Paper boundaries** | Documents don't run. Rules held only in prose decay at the rate of staff turnover — for agent-maintained code, at the rate of context-window turnover, which is every session. | 6 |
| **Wallpaper guards** | A guard that never fires is indistinguishable from a working one until someone plants a violation. Noisy guards get disabled; silent ones get trusted. Both end at zero protection. | 6 |
| **Exception accretion** | Each exception is individually reasonable; the list only grows because removal has no owner and no deadline. | 6 |
| **Pricing inversion** | Under deadline the bypass is chosen by selection, not malice, and each successful bypass lowers the social cost of the next. Discipline cannot outrun economics. | 7 |
| **Concept inflation** | Naming a new thing is the author's joy and the reader's tax, and the tax is invisible in the PR that adds it. Saturated cognition breeds patch-on-patch. | 8 |
| **Rewrite gravity** | Once comprehension cost exceeds rewrite cost for one individual, the rewrite looks locally rational; the institutional knowledge it destroys was never on that individual's balance sheet. | 8 |
| **Knowledge evaporation** | Reasons live in heads and chat logs; rules live in files. The rule outlives the reason and becomes either superstition (kept in fear) or noise (deleted in ignorance). | 8 |

## Translated practice (provenance)

What each section borrows, so the borrowing can be re-examined at the
source if a rule comes under question:

- **Linux** — graded stability (userspace contract sacred, in-kernel
  interfaces refuse stability promises) → section 2; inactive-maintainer
  removal → the ownership-freshness indicator in `diagnostics.md`.
- **Git** — plumbing/porcelain stability split → section 2, level 4.
- **SQLite** — invariants sunk into file formats, state machines, and a
  test corpus rather than convention → section 6.
- **PostgreSQL** — change classes, upgrade paths, and deprecation as
  routine institutions rather than heroics → section 8.
- **Hyrum's law** → section 2. **Gall's law** → section 1.
- **Conway's law, attention form** — structure mirrors the communication
  structure of its maintainers; for agent-maintained code that structure
  is the context window, so architecture that cannot be navigated in
  bounded reads will be bypassed, then forgotten → sections 1 and 7.

## Deliberate omissions

Recorded so they are not "discovered missing" and re-added by accident:

- **Solution shapes** (event sourcing, CQRS, microservices vs monolith,
  hexagonal, …) — keel governs how a shape is chosen, bounded, and kept
  honest, not which shape to choose. Naming shapes would date the skill
  and inflate it.
- **Org-design mechanics** (maintainer hierarchies, LTS branch policy,
  RFC committees) — they presume a human organization; the protocol must
  also work for a single agent session.
- **Specific tooling** (doc frontmatter schemas, manifest formats, named
  checkers) — the protocol states the invariant (falsifiable, dated,
  shrink-only); each repo picks its own mechanism.
