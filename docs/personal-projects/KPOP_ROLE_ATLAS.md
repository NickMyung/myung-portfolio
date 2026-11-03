# K-pop Role Atlas

Working title for a personal project proposed by the portfolio owner on 2026-11-02.
Current public status: **Research concept**. No dataset, dashboard, repository,
findings or quantitative results were supplied. The portfolio implements a study
presentation page, not the proposed analysis application.

## Editorial placement

`portfolio_data.json > personalProjects` is the source for the new section and
`/personal-projects/kpop-role-atlas`. It is separate from the six professional
case studies and does not add another expertise category. Main exposes the same
content in both presentation variants; standalone V3/RSCH and comparator copies
retain their existing differences.

## Question and competing explanations

The owner proposes investigating whether member positions have become less
specialized across five K-pop generations and whether training practices relate
to that change. This is a hypothesis, not a verified historical conclusion.
Select representative groups from each documented debut cohort; do not imply
that an individual group necessarily spans all five generations.

Keep generation conventions explicit and test alternative boundaries. Agency,
group size, career age, release style, format, lineup and sampling can explain
apparent differences. Results should include exceptions and uncertainty rather
than select performances that confirm the expected story.

## Proposed observation contract

| Field | Unit / rule | Required provenance |
| --- | --- | --- |
| Group, member, lineup | Stable identifiers with validity dates | Official identity and lineup sources |
| Generation cohort | Explicit study convention based on debut | Debut source and cohort definition version |
| Declared role | Dated label; official and fan-assigned kept separate | Exact source, quotation location and date |
| Song / performance | Release, arrangement, format, runtime, title/B-side tag | Official release/performance URL and access date |
| Vocal / rap interval | Start/end seconds; separate channels | Timestamp, annotator and codebook version |
| Choreographic center | Interval under a defined spatial rule | Comparable footage and ambiguity flag |
| Camera focus / ending | Screen interval or close-up event | Footage, edit/format and event rule |
| Solo | Solo release or in-group solo section, separately | Release/interval source and eligibility window |
| Training context | Dated company-reported practice or attributable interview | Source type, exact passage and reporting period |

Resolve shared lines and overlaps before deriving shares; leave unknown values
missing rather than zero. Distinguish total-runtime shares from shares within a
channel and publish the denominator. Account for group size when comparing
concentration; document any proposed normalized index and its assumptions before
using it. Treat members/songs within groups as dependent observations. Report
annotation agreement and sensitivity to ambiguous assignments in the pilot.

No attractiveness ranking, invented skill rating or combined talent score.
Performance exposure does not measure vocal quality, dance ability or stage
presence. Reported training practices cannot establish a causal effect on
allocation without additional evidence and an appropriate study design.

## Proposed delivery sequence

1. Define a small cross-cohort pilot, sampling rules and annotation codebook.
2. Register sources, permissions and observation provenance; avoid redistributing
   copyrighted performance media or lyrics. Prefer links, timestamps and derived
   annotations subject to source terms.
3. Annotate comparable performances and independently review a subset.
4. Model the registry and intervals in SQL; use Python for quality checks and
   exploratory analysis. These are proposed tools, not implemented capabilities.
5. Build a Next.js explorer only after validating the pilot: generation/group
   comparisons, member timelines, release filters, outliers and training context.

## Claim and source register

| Claim / entity | Source | What it supports | State / reviewed |
| --- | --- | --- | --- |
| Project topic and intended variables | Owner's message, 2026-11-02 | Personal project intent, roles, durations, center/endings, solos and B-sides | Owner declaration |
| Current project stage | Presented as an idea; optional status question pending | Conservative concept label only; update if owner supplies implementation | Editorial assumption, 2026-11-02 |
| Role specialization decreases | Owner's proposed hypothesis | Research question only | Unmeasured |
| Training changes explain participation | Owner's proposed research direction | Context to investigate, not causation | Unverified |
| TWICE identity source example | [Official JYP profile](https://twice.jype.com/profile) | Official profile starting point; no role-history claim | Web source located, 2026-11-02; not an extracted dataset |
| JYP training source example | [2024 Sustainability Report](https://jyplevel1storage01.blob.core.windows.net/jypedoc/2024%20JYP%20Entertainment%20Sustainability%20Report%28ENG%29.pdf), Artist Training / Capacity Building Program | Company-reported vocal, rap and dance instruction; contextual evidence only | Relevant indexed text reviewed, 2026-11-02; no historical causal inference |

No representative group list, generation date boundaries, member assignments or
numeric findings have been selected or verified. The equal generation tiles on
the portfolio card depict planned coverage, not measured results.
