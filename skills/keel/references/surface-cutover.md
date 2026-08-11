# Surface And Cutover

Repository compatibility categories remain authoritative; this file supplies fallback grading and cutover evidence.

## Fallback Surface Ladder

Use this ladder only when the repository has no compatibility categories. It is an internal comparison tool, not a required label set.

| Grade | Review |
| --- | --- |
| Public API or persisted schema | Enumerate consumers and data; define version, migration, or authorized cutover. |
| Declared cross-boundary interface | Name owner, consumers, and coordinated change boundary. |
| Module-private implementation | Keep cheap to reshape unless evidence reveals external reliance. |
| Assembly or wiring | Reshape freely while higher-grade behavior remains stable. |

Observable error text, ordering, timing, and quirks can become de facto contracts. A clean break needs target and cutover decision authority, consumer and data scope, old-entry retirement, recovery, and post-cutover evidence. An unresolved consumer remains migration risk. For unenumerable public consumers, state the support boundary, discovery evidence, notice or end-of-life path, and decision authority accepting residual risk.
