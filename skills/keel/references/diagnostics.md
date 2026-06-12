# Diagnostics

Operational companion to SKILL.md, read on demand. SKILL.md owns the
rules; this file owns how to apply and detect violations of them — task
routes for common architecture work, a question matrix for design-time
review, and measurable indicators for auditing a living codebase. None
of these are the architecture spine; they are tools for checking it.

## Task routes

Use the narrowest route that fits the request. Each route tells the agent
what must be known before acting, when to stop reading, and what to
surface back to the user.

| Route | Use when | Required refs | Stop when | Must output |
| --- | --- | --- | --- | --- |
| `architecture_review` | reviewing a design, RFC, or structural PR | spine, changed surfaces, owners, negative path, checks | every material claim maps to a file, contract, test, owner, or explicit unknown | findings, boundary decisions, missing evidence, remaining risk |
| `boundary_change` | adding, widening, moving, or deleting a public contract, schema, export, flag, or module entry surface | stability level, consumers, owner, migration path, guard | the new promise, compatibility cost, and verification path are known | surface grade, consumer impact, migration or deprecation plan, verification |
| `structural_refactor` | splitting, merging, relocating, or rewriting a module or slice | current owner, dependency direction, entry surface, behavior evidence, retirement candidate | the smallest safe slice is named and dependents are enumerable by tooling | slice boundary, preserved contracts, deletion path, checks |
| `rot_audit` | auditing a living codebase for drift or recurring bypass | rot indicators, trend source, exception baseline, guard last-failed evidence | at least one trend or missing trend is grounded in repo evidence | subtraction batch, owner, removal condition, next snapshot |

## Design review matrix

Run over a proposed design, RFC, or structural PR. Every row should be
answerable with concrete references (files, contracts, checks); an
unanswerable row is itself the finding — report it, don't fill it with
prose.

| Slot | Question | Rule |
| --- | --- | --- |
| Spine | Which existing load-bearing path does this lower into? If it claims a new peer path: what evidence justifies it, and what does it retire? | 1 |
| Surface | Which stability level does each new or changed surface sit on? Which new promises (exports, fields, flags, options) are minted, and is each at the cheapest level that works? | 2 |
| Truth | Which facts does this restate rather than reference? Which artifacts are derived — from what source, regenerated how? | 3 |
| Ownership | Who owns each new piece, and what does it explicitly not own? Do all new dependencies point in the declared direction? | 4 |
| Negative path | What is the defined behavior for denied, failed, partial, stale, and cancelled outcomes? What is the recovery route, and who triggers it? | 5 |
| Time | What happens if this runs twice, restarts halfway, or replays? Which idempotency key, state machine, lease, or reconciliation answers each case? | 5 |
| Guards | Which machine check enforces each rule this design relies on? Has that check ever been seen failing? | 6 |
| Budget | What is the net concept growth? What does the addition retire — and if nothing, what is the declared review date? | 8 |

Section 7 (pricing) is a property of the running system, not of one
design; it is audited through the bypass-frequency indicator below.

## Rot indicators

Lagging symptoms (incidents, rewrites) arrive too late; these are leading
indicators. For every one of them, **direction matters more than level**:
the absolute number is debatable, a monotonic rise is not. The working
trigger: three consecutive rises in any indicator schedules a subtraction
batch — removal work, not a new wall.

| Indicator | How to read it |
| --- | --- |
| Suppression count — lint-disables, unchecked casts, skipped tests, baseline entries | Shrink-only. Any growth names an owner and a removal condition, or it is exception accretion in progress. |
| Guard last-failed date | A guard that has not failed in months is either guarding a solved problem (retirement candidate) or wallpaper (plant a violation and see which). |
| Public surface growth | Exports, fields, and options added per period versus features shipped. Surface outgrowing features means promises are being minted as a side effect. |
| Concept count | New nouns (services, managers, layers, config keys) added versus retired. A ledger that never records a retirement is rot, whatever the additions individually look like. |
| Duplicate truth | The same constant, rule, or list encoded in more than one place. Each instance is a scheduled future divergence. |
| Ownership freshness | Files churning while their owning doc or declared owner stays frozen — ownership drifting from record to folklore. |
| Bypass frequency | How often the documented path is skipped (direct pushes, manual deploys, ad-hoc scripts). This is the pricing-gap reading: rising bypasses price the governed path, they do not indict the people. |
| Sideways imports | Sibling-domain imports over time. Each one removes a module from the deletable set. |
| Hand-edited derived files | Diffs touching files with generated headers. Signals the generator is slower than a text editor; fix the generator's cost first, then the file. |

### Wiring

Snapshot the indicators on a schedule — a CI job appending one dated row
per run is enough — and keep the history in the repo, because a single
reading carries almost no information; the trend is the signal. Most
indicators are one `grep`/`git log` away; resist building a platform for
them (section 8 applies to tooling too).

Indicators are projections of health, not health itself. A green
dashboard over a rotting seam is exactly the wallpaper-guard failure mode
applied to the meta level — when an indicator stops moving for a long
time, audit the indicator before celebrating the system.
