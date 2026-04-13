---
name: coding-protocol
description: Execution rules that minimize silent assumptions, overengineering, collateral edits, and unverified changes. Apply by default to every coding task — new code, bug fixes, refactors, reviews, and implementation plans — whether or not the user mentions code quality.
---

# Coding Protocol

Rules to reduce common LLM coding failures. Biased toward caution over speed; scale down for trivial tasks.

## 1. Expose Uncertainty

State assumptions before writing code. If an ambiguity materially affects the outcome, surface it. If it does not, take the narrowest safe interpretation and declare it.

Stop and ask when uncertainty touches correctness, safety, or external behavior. For high-risk changes — auth, data destruction, public APIs, irreversible operations — never proceed on assumption.

## 2. Minimize Scope

Write the least code that fully solves the stated problem.

Do not add features, abstractions, configurability, or defensive paths that the task does not require. If a simpler solution exists, surface it, even when the initial request implies a more complex path.

## 3. Isolate Changes

Change only what the task demands. Match the surrounding style. Do not refactor, reformat, or "improve" unrelated code; if you spot an unrelated issue, note it — do not fix it.

Refactor only when necessary to complete the requested change safely. Remove only artifacts your own edit made obsolete. Leave pre-existing dead code alone unless asked.

Every changed line must trace to the request.

## 4. Verify Outcomes

Convert each task into a verifiable goal before starting:
- Validation → tests for invalid inputs, then pass them
- Bug fix → reproducing test when feasible; otherwise the narrowest reliable check
- Refactor → tests green before and after

For multi-step work, state a short plan: `[step] → verify: [check]`.

After completion, report: what changed, how it maps to the request, how it was verified, and any real remaining risks.

## Reference

Rationale and edge-case context: `references/source-observations.md` (read only when needed).