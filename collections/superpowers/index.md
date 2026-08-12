---
title: "Superpowers"
description: "A software development methodology built from composable skills for design, planning, testing, review, and delivery."
image: "https://skills.lencx.me/og.png"
---

> Documentation Index
> Fetch the complete documentation index at: https://skills.lencx.me/llms.txt
> Use this file to discover all available pages before exploring further.

# Superpowers

[obra/superpowers](https://github.com/obra/superpowers)

Tags: #engineering · #delivery · #quality

Stars: 270,806 · Forks: 24,194

Analysis revision: `44c9b2d` · GitHub snapshot: Aug 12, 2026

> Installing Superpowers means accepting a development method with hard gates. Design approval, isolation, TDD, separate reviews, and fresh verification are requirements, not optional tips.

Brainstorming and human design approval are hard gates before planning or code. Implementation then moves into an isolated worktree, executes narrow plan tasks with TDD, separates implementer self-review from specification and quality review, and accepts a completion claim only after a freshly run proving command.

## The path a change must pass before completion

The sequence matters because each gate creates evidence consumed by the next one. Skipping ahead is treated as a process failure, even when the change looks small.

### Brainstorm

Clarify intent and compare approaches.

### Approve design

A human accepts the proposed behavior before planning.

### Isolate

Use a worktree and establish a clean baseline.

### Plan

Write narrow tasks with files and proof commands.

### TDD

Implement through red, green, and refactor.

### Review twice

Check specification first, then code quality.

### Verify fresh

Rerun the proving command immediately before the claim.

Evidence: [Repository overview](https://github.com/obra/superpowers/blob/44c9b2d6e889982ac18c27d05a19fefe335194e1/README.md) · [Brainstorming workflow](https://github.com/obra/superpowers/blob/44c9b2d6e889982ac18c27d05a19fefe335194e1/skills/brainstorming/SKILL.md#the-process) · [Verification before completion](https://github.com/obra/superpowers/blob/44c9b2d6e889982ac18c27d05a19fefe335194e1/skills/verification-before-completion/SKILL.md#the-iron-law)

## Why these gates are load-bearing

### Design approval is a hard gate

Even small behavior changes resolve intent, alternatives, and a readable design before scaffolding, planning, or implementation begins.

### Implementation and review are distinct roles

Each task is implemented, self-reviewed, checked for specification compliance, checked for code quality, and re-reviewed after fixes.

### Verification is temporally fresh

A completion claim is invalid unless its proving command was rerun immediately and the complete output and exit status were read.

## Trial the method on one real change

1. Complete brainstorming and design approval before asking the agent to write an implementation plan.
2. Reuse an existing isolated workspace when possible, then run setup and baseline tests before changing code.
3. Follow red, green, refactor and rerun the command that directly proves completion before making the claim.

## Adopting it changes how work is approved

### Worth the overhead when

Feature development or bug fixes that benefit from a rigorous specification, isolated implementation, TDD, subagent collaboration, and review loop.

### Process conflict

Its repository describes the workflows as mandatory rather than optional suggestions. Confirm that this degree of process ownership fits the project’s existing rules.

## Sources reviewed

- [Repository overview](https://github.com/obra/superpowers/blob/44c9b2d6e889982ac18c27d05a19fefe335194e1/README.md)
- [Brainstorming workflow](https://github.com/obra/superpowers/blob/44c9b2d6e889982ac18c27d05a19fefe335194e1/skills/brainstorming/SKILL.md#the-process)
- [Verification before completion](https://github.com/obra/superpowers/blob/44c9b2d6e889982ac18c27d05a19fefe335194e1/skills/verification-before-completion/SKILL.md#the-iron-law)

Source: https://skills.lencx.me/collections/superpowers/index.mdx
