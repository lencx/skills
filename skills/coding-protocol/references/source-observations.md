# Source Observations

Based on Andrej Karpathy's public observations on LLM-assisted coding,
extended with internal production learnings.

## Observed failure modes

These observations informed the guidelines in SKILL.md.

**Silent assumptions.** Models often make incorrect assumptions on your behalf
and continue without checking. They may fail to manage their own confusion,
seek clarification, surface inconsistencies, present tradeoffs, or push back
when they should.

**Overcomplicated output.** Models tend to bloat code, abstractions,
and APIs. They may produce significantly more code than necessary unless
explicitly guided toward simpler solutions.

**Collateral changes.** Models may change or remove comments and code
that are orthogonal to the task, including parts they do not sufficiently
understand, as side effects of unrelated edits.

**No self-cleanup.** Models often fail to clean up dead code they create
during implementation.

**Sycophancy.** Models may agree too readily instead of pushing back on
questionable requests or surfacing better alternatives.

## Effective working patterns

These patterns informed the "Goal-Driven Execution" principle.

**Declarative over imperative.** Give success criteria rather than
detailed step-by-step instructions. Models tend to loop more effectively
toward verifiable goals when the objective is explicit.

**Tests first, when feasible.** Ask the model to write tests first and
then make them pass. This provides a concrete, self-verifiable objective.

**Naive-then-optimize.** Start with the obviously correct version, then
optimize while preserving correctness. This reduces the risk of subtle
bugs introduced by overly clever initial implementations.