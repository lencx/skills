---
title: "Recovery And Guards"
description: "Canonical Keel reference: Recovery And Guards."
image: "https://skills.lencx.me/og.png"
---

> Documentation Index
> Fetch the complete documentation index at: https://skills.lencx.me/llms.txt
> Use this file to discover all available pages before exploring further.

# Recovery And Guards

> Rendered directly from the [canonical source](https://github.com/lencx/skills/blob/main/skills/keel/references/recovery-guards.md).

Repository requirements and focused workflows own concrete recovery or guard mechanisms and verification execution; this file supplies branch-specific control choices.

## Select Controls From Failure

- Retry or duplicate: idempotency, deduplication, confirmation, or receipt.
- Uncertain commit, stale view, or partition: authoritative status, freshness or degraded-mode rule, reconciliation, and convergence owner.
- Partial work or failed cutover: rollback, resumable migration, compensation, or repair queue.
- Ordering or concurrent conflict: version rule, detector, merge, tie-break, or escalation.

Guard evidence shows a known or safely planted violation fails, the exact pre-control state passes after restoration, and scope cannot be escaped. Record the guard owner and freshness trigger; track real violations separately. Exception growth records decision authority, scope, reason, owner, review trigger, and removal condition. A review-only guard names the review event, retained evidence, and escalation.

Source: https://skills.lencx.me/skills/keel/reference/recovery-guards/index.mdx
