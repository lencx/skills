# Source Observations

Based on Andrej Karpathy's public observations on LLM-assisted coding,
extended with production learnings.

## Failure modes → protocol rules

Each observed failure mode maps to the SKILL.md section that counters it.
When editing SKILL.md, keep this map true in both directions: a failure
mode with no rule, or a rule with no motivation here, is drift.

| Failure mode | Countered by |
| --- | --- |
| **Silent assumptions** — incorrect assumptions made on the user's behalf; no clarification sought, inconsistencies not surfaced | 2 Work From Evidence; 3 Handle Material Uncertainty |
| **Unverified claims** — stating behavior or "passing" checks that were never actually run | 2 Work From Evidence; 7 Verify Proportionally |
| **Overcomplicated output** — bloated code, abstractions, and APIs; far more code than necessary | 4 Keep Changes Small |
| **Collateral changes** — edits to code and comments orthogonal to the task, including parts not sufficiently understood | 4 Keep Changes Small; 5 Preserve User Work |
| **No self-cleanup** — scaffolding and dead code left behind by the model's own edits | 4 Keep Changes Small (cleanup clause) |
| **Sycophancy** — agreeing too readily instead of pushing back or surfacing better alternatives | 3 (evidence-conflict clause); 4 (surface the simpler solution) |
| **Workspace damage** — overwriting user work, destructive commands, machine-wide changes | 5 Preserve User Work |
| **Environment mismatch** — assuming tools, dependencies, network, or services not present locally | 6 Respect Local Context |
| **Process noise** — narrated ritual, irrelevant detail, overstated confidence | 8 Report Only What Matters |

Behavioral scenarios for each failure mode live in `evals/coding-protocol.md`
at the repository root; run them after meaningful protocol edits.

## Effective working patterns

**Tests first, when feasible.** Write tests first, then make them pass.
This provides a concrete, self-verifiable objective. (Informs the bug-fix
rungs in sections 1 and 7.)

**Naive-then-optimize.** Start with the obviously correct version, then
optimize while preserving correctness. This reduces the risk of subtle
bugs introduced by overly clever initial implementations. (Informs
section 4.)

A third pattern from the source material — give the model declarative
success criteria rather than imperative step lists — is advice for the
human prompting the agent, so it lives in the repository README rather
than in this protocol.
