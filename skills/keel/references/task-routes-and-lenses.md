# Task Routes And Lenses

Operational companion to SKILL.md for design and review work. It supplies task routes and a review matrix without replacing repository evidence, focused-workflow artifacts, or their vocabulary. Return load-bearing findings and closure conditions through the owning decision path.

## Task routes

Use the narrowest route that fits the request. Each route terminates in one of two complete states: **closed**, when evidence supports a decision and its closure conditions; or **open**, when viable alternatives or findings and their unresolved unknowns are explicit.

| Route | Use when | Required evidence | Stop when | Must output |
| --- | --- | --- | --- | --- |
| `greenfield_design` | testing load-bearing choices before repository fact sources and decision rights exist | user goals, external constraints, provenance-bearing domain inputs, supplied alternatives when available, risk and operating context | either evidence distinguishes a preferred option and its closure conditions are explicit, or viable options and unknowns are returned without forced selection | explored options and provenance, proposed invariants, fact and decision authority, accountability, compatibility commitments, applicable failure and recovery behavior, unresolved unknowns |
| `architecture_review` | reviewing a design, RFC, or structural change set | repository sources and decision rights, in-scope facts and transitions, changed surfaces, owners, negative path, checks | every material claim maps to a file, contract, test, owner, or explicit unknown | findings, boundary decisions, missing evidence, remaining risk |
| `boundary_change` | adding, widening, moving, or deleting a contract, schema, export, flag, or declared entry surface | repository compatibility category or Keel fallback, consumers, accountability model, and any applicable migration or guard | the new promise, compatibility cost, decision authority, and proportionate verification path are known | compatibility commitment, consumer impact, applicable migration or deprecation plan, verification requirement |
| `structural_refactor` | splitting, merging, relocating, or rewriting a load-bearing module or slice, or changing a declared boundary | current accountability, dependency direction, applicable entry surface, behavior evidence, and retirement candidate | the smallest safe slice is named and affected dependents are enumerated with repository-supported evidence | slice boundary, preserved contracts, applicable deletion path, checks |

## Design review matrix

These are Keel-internal lenses. Apply them to whatever representation the repository or focused work supplies; other artifacts need not adopt these slot names. Run only rows that can plausibly change the proposed design, RFC, or structural change set. A selected row should be answerable with concrete references; an unanswerable selected row is itself a finding. Group irrelevant rows under one reason only when their absence could look accidental.

| Slot | Question | Rule |
| --- | --- | --- |
| Spine | Which section 1 points apply in repository-native terms? For any repository-declared or risk-plausible omission, is absence or inapplicability justified? Do multiple mechanisms preserve every applicable boundary contract or create an unreconciled peer? | 1 |
| Surface | Which grade does each concrete surface carry? Which potential promises widen an observable or declared contract, and what compatibility or cutover evidence closes the change? | 2 |
| Truth | For each material fact and jurisdiction, which section 3 dimensions exist and what are their declared values? Which artifacts project which facts? | 3 |
| Ownership | Is accountability single, partitioned, or joint? Are owned and confusable excluded scope, decision rights, escalation, and lifecycle explicit? Does collaboration use declared surfaces rather than internals or a generic shared dumping ground? | 4 |
| Negative path | Which negative outcomes can occur, what happens for each, and which are inapplicable? Does each recovery name its trigger, decision authority, owner, action, terminal invariant, evidence, and failed-convergence escalation? | 5 |
| Time | If the design is stateful or repeatable, what happens when it runs twice, restarts halfway, or replays? Which control answers each applicable case? | 5 |
| Guards | Which relied-on rules justify falsifiable enforcement at this blast radius? What evidence shows each check can detect a violation, and can its scope be escaped? If enforcement is manual, what makes review explicit and auditable? | 6 |
| Budget | In an existing system, what is the net concept growth, retirement, accountability, and review date? In greenfield work, which simpler alternative was rejected and why? | 8 |

Section 7's governed-path cost is a property of the running system, not one design. When recurring bypass or architecture drift is in scope, use `rot-audit.md`.
