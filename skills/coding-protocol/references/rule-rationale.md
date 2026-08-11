# Rule Rationale

The initial observations are traceable to [Andrej Karpathy's public post](https://x.com/karpathy/status/2015883857489522876). Later rows are this project's failure-mode hypotheses from observed use; do not attribute the full map to that source.

## Failure modes → protocol rules

This is a maintenance index for non-obvious failure mechanisms, not a requirement for one rule or test per row. Keep mappings useful, merge overlap, and remove rows that no longer change the protocol.

| Failure mode | Countered by |
| --- | --- |
| **Silent assumptions** — incorrect assumptions made on the user's behalf; inconsistencies not surfaced, including same-level conflicts hidden by letting load order choose or by accumulating incompatible requirements | Composition; 2 Work From Evidence; 3 Handle Material Uncertainty |
| **Contract drift** — treating runtime data outside a declared contract as authority to widen accepted values or invent semantics without resolving the applicable authority and precedence | 2 Work From Evidence; 3 Handle Material Uncertainty; 4 Keep Changes Small |
| **Unverified claims** — stating behavior or "passing" checks that were never actually run | 2 Work From Evidence; 7 Verify Proportionally |
| **Overcomplicated output** — bloated code, abstractions, and APIs; far more code than necessary | 4 Keep Changes Small |
| **Execution-slice scope inference** — treating a first tranche, sample count, code shape, or later outcome as authority to define or expand the target either underfits stated broader intent or invents unsupported reuse | 3 Handle Material Uncertainty; 4 Keep Changes Small; 8 Report Only What Matters |
| **Collateral changes** — edits to code and comments orthogonal to the task, including parts not sufficiently understood | 4 Keep Changes Small; 5 Preserve User Work |
| **No self-cleanup** — scaffolding and dead code left behind by the model's own edits | 4 Keep Changes Small (cleanup clause) |
| **Sycophancy** — agreeing too readily instead of pushing back or surfacing better alternatives | 3 (evidence-conflict clause); 4 (surface the simpler solution) |
| **Contrarian substitution** — replacing an explicitly required mechanism or outcome merely because the agent prefers a simpler one | 3 Handle Material Uncertainty; 4 Keep Changes Small |
| **Action-scope expansion** — treating a request to review, explain, diagnose, mention, or compare a skill, or the automatic loading of a focused skill, as permission to edit the workspace | Applicability Gate (Execution; Evidence); 3 Handle Material Uncertainty |
| **Publication expansion** — treating permission to edit locally, or a side effect named only by an automatically loaded workflow, as permission to commit, push, deploy, publish, message externally, or change machine-wide state | 3 Handle Material Uncertainty; 5 Preserve User Work |
| **Implicit destructive authorization** — treating a task's apparent need as permission to discard work, reset state, rewrite history, or delete a broad target | 5 Preserve User Work |
| **Destructive-action paralysis** — refusing an explicitly authorized, exactly targeted, recoverable destructive action solely because it is destructive | 5 Preserve User Work |
| **Low-risk paralysis** — asking the user to decide harmless, reversible details that local evidence can resolve | 1 Scale By Risk; 3 Handle Material Uncertainty |
| **Risk-label ritual** — re-asking for decisions already explicit, including a side effect jointly clear in a user's execution request and the named skill's purpose, or refusing a fully authorized task merely because its category is high risk | 1 Scale By Risk; 3 Handle Material Uncertainty |
| **Workspace damage** — overwriting user work, destructive commands, machine-wide changes | 5 Preserve User Work |
| **Environment mismatch** — assuming tools, dependencies, network, or services not present locally | 6 Respect Local Context |
| **Irrelevant verification** — citing a required or passing check that does not exercise the changed behavior as proof of correctness, or skipping a required check because a focused proof exists | 7 Verify Proportionally |
| **Verification inflation** — running expensive broad checks or changing the environment when neither repository policy nor a focused workflow requires them and a cheaper check would provide the same confidence | 1 Scale By Risk; 7 Verify Proportionally |
| **Dishonest green** — silencing a failing check (suppression comment, loosened assertion, skipped test, scope escape) instead of fixing the cause | 7 Verify Proportionally |
| **Suppression absolutism** — refusing a narrow, documented boundary suppression even when the underlying source is immutable and the repository policy defines ownership and removal | 7 Verify Proportionally |
| **Vacuous test** — a new or changed check has no demonstrated negative control and may pass without exercising the change | 7 Verify Proportionally |
| **Bug-encoding test** — asserting the code's current output instead of the requested behavior, locking the defect in as truth | 7 Verify Proportionally |
| **Representation-coupled verification** — asserting an incidental or private implementation representation as if it proved behavior, when that exact representation is not the documented contract or guard target | 7 Verify Proportionally |
| **Thrashing** — repeated failed fix attempts that widen the blast radius or flip direction instead of stopping with a diagnosis | 7 Verify Proportionally |
| **Unattended guessing** — with no user available to ask, material ambiguity silently downgrades to a confident guess | 3 Handle Material Uncertainty |
| **Dropped requirements** — reporting done while parts of the request, a mixed task's applicable execution portion, or a focused workflow's primary completion criterion were silently dropped or reinterpreted | Applicability Gate (Mixed); Composition; 8 Report Only What Matters |
| **Process noise** — applying execution ritual outside the protocol's scope, including continuing after its applicability gate excludes the task; narrating irrelevant process; overstating confidence; or compressing a required focused artifact in the name of brevity | Applicability Gate (Exit); 8 Report Only What Matters |

## Effective working patterns

**Tests first, when feasible.** Write tests first, then make them pass. This provides a concrete, self-verifiable objective. (Informs the bug-fix rungs in sections 1 and 7.)

**Naive-then-optimize.** Start with the obviously correct version, then optimize while preserving correctness. This reduces the risk of subtle bugs introduced by overly clever initial implementations. (Informs section 4.)

A third pattern from the source material — give the model declarative success criteria rather than imperative step lists — is advice for the human prompting the agent, so it lives in the repository README rather than in this protocol.
