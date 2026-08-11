# Architecture Records

This reference governs records that carry or route load-bearing architecture facts. General documentation, prose quality, rendering, and domain-specific artifact formats remain with their owning workflow.

## Resolve Authority Before Structure

Separate six concerns:

- **Record scope** — within the already authorized change, which records are in scope.
- **Fact authority** — which source or rule states accepted architecture facts.
- **Decision authority** — who may approve or change those facts.
- **Editorial authority** — who may record or revise an authorized fact. Editorial access does not confer decision rights.
- **Format authority** — who may change structure, metadata, and naming.
- **Lifecycle authority** — who may supersede, migrate, archive, or delete a record.

This list grants no edit permission. The user and host grant action authorization; an execution workflow governs authorized edits and work preservation. A request to reorganize files does not authorize rewriting facts or historical records. Treat repository-declared sources and decision or lifecycle roles as current until an authorized migration closes. A stale source may be challenged but not replaced without decision authority. For a greenfield Decision, apply SKILL.md's Greenfield evidence rule before proposing structure; preserve the owning workflow's facts and do not present a proposal as inherited truth.

## Select A Route

If sources or requests conflict, resolve the conflict branch alongside the structural context, then apply SKILL.md's Closed/Open contract to the combined result.

| Context | Default action | Complete when |
| --- | --- | --- |
| Existing; structure preserved | Clarify the current canonical record's status and repair focused links without changing facts. Apply the conflict overlay when sources or requests disagree. | No new document structure or parallel authority was introduced, every changed fact still resolves to its declared source, and any conflict is resolved through the overlay. |
| Existing; restructuring authorized | Inventory facts, owners, readers, inbound links, generators, guards, immutable history, and rollback or forward-recovery routes. Migrate the smallest coherent slice and retire or redirect its old entry points. | The target owner, every affected reader and route, regeneration, validation, migration recovery, and old-record lifecycle are resolved. |
| Greenfield; record structure authorized | Create only the records required by current facts and decisions. Start with one canonical record per coherent fact jurisdiction; add an index only when more than one entry path needs navigation. | Every material fact has an owner and evidence path, without empty scaffolding or duplicated prose. |
| Sources or requests conflict | Partition jurisdiction. Select one source with projections only when decision authority or precedence permits; otherwise keep the material choice open. Accept unusual but coherent format preferences. | The conflict branch is complete when decision authority or precedence yields an explicit conflict rule; otherwise it contributes an applicable finding or decision-changing unknown to SKILL.md's Open branch. |

## Keep Record Roles Distinct

| Role | Represents or owns |
| --- | --- |
| Canonical record | Authoritative representation of its declared facts. Decision, editorial, format, and lifecycle rights remain with their declared authorities. |
| Index | Navigation, bounded relevance summaries, and redirects; not the facts behind its links. |
| Projection | Its source binding, generation status, freshness, and failures; not copied source facts. |
| Working note | Exploration and unresolved options; it becomes authoritative only through the declared decision path. |

Preserve focused artifacts such as threat models, domain models, API schemas, and historical decisions in their native form. Index them or add Keel findings; do not flatten their method or vocabulary into a generic record.

## Add Structure Only When Delegated

Use this decision ladder only when no repository-native system owns the shape and the applicable format and lifecycle authorities explicitly authorize it for the named record scope. Fact and decision authority stay with their declared holders.

- Start with one focused canonical record per coherent fact jurisdiction.
- Add an index only when more than one entry path needs navigation.
- Add routing metadata only when repeated discovery or ambiguity has a named machine consumer.

This ladder is not a prescribed file tree, schema, or prose template. The repository or focused documentation workflow chooses those shapes. If routing metadata earns its cost, derive the minimum fields from the consumer's questions and repository identifiers; do not create a universal schema. Let source control supply history unless another consumer genuinely requires timestamps or per-record schema versions.

A new canonical record must make its purpose, fact source, applicable decision, editorial, format, and lifecycle authorities, owned and excluded scope, load-bearing facts or contracts, and applicable evidence, failure, migration, or open questions discoverable. Express those semantics in repository-native form.

Treat an index as navigation, not a fact store. When it is generated, declare one editable routing source and regenerate the projection from it. Report unowned, ambiguous, unavailable, and superseded routes rather than guessing. Do not copy record bodies or repository-wide inventories into an index.

## Hand Off Without Taking Over

Return the required fact ownership, record role, routing, migration boundary, and closure conditions. When present, let a focused writing or documentation workflow own wording and presentation, and let an execution workflow own edits, verification, and user-work preservation. Otherwise, follow repository and host defaults. Neither workflow may turn a projection into a second fact authority.
