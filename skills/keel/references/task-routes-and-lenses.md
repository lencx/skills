# Task Routes And Lenses

Optional companion for substantial architecture work. SKILL.md owns the method
and Closed/Open states; this file only highlights concerns specific to a task
shape. Do not load it for a small internal choice when a concise comparison is
already enough.

## Task routes

Choose a route after comparing viable directions. A route organizes deeper
evidence; it does not preselect a solution or require a new artifact. If a
different route contributes a material concern, import that concern without
duplicating the full route.

| Route | Use when | Branch-specific concern |
| --- | --- | --- |
| `greenfield_design` | goals and external constraints exist without inherited repository architecture | distinguish user/domain evidence from invented precedent; state assumptions, decision authority, and the cheapest way to test the recommendation |
| `architecture_review` | a design, RFC, change set, or existing system needs a load-bearing adequacy, improvement, or integration judgment | map material claims to evidence or explicit unknowns; preserve focused findings; recommend changes only where the review supports them |
| `boundary_change` | a contract, schema, export, flag, entry surface, or compatibility promise is added, widened, moved, or removed | identify affected consumers, decision authority, compatibility or cutover commitment, and proportionate verification |
| `structural_refactor` | a load-bearing module or seam is split, merged, moved, rewritten, or generalized | separate target seam from first mutation slice; preserve contracts and deletion path; when broader family scope is authoritative, check a materially distinct unedited member |

If evidence reopens a materially different direction, return to comparison
instead of finishing the current route by inertia.

## Optional review prompts

SKILL.md sections 1–8 are the source of these concerns. Ask only questions whose
answers can change the recommendation or a material risk:

- Which concrete surfaces carry compatibility promises?
- Which authority, ownership, writer, dependency, or projection relations
  actually exist?
- Which negative or time-axis outcome could invalidate the direction?
- Which guard, migration, recovery, or deletion evidence is necessary at this
  blast radius?
- What new concept or layer is added, what does it retire, and is a simpler
  direction still viable?

Group inapplicable concerns without producing an empty matrix.
