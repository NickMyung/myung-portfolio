# MENU information architecture

Created 2026-11-03 from `myung-portafolio-RSCH` at `7a191e6`.
The owner requested an independent menu-based version, preserving RSCH and replacing
V3 in both the local and public comparisons. Existing branches were clean and
already published before this branch was created; no empty checkpoint commit was necessary.

## Structure

| Route | Visitor task | Existing content |
| --- | --- | --- |
| `/` | Understand the profile and choose a direction | Identity, four pillars, three brief selected cases and a personal-project teaser |
| `/work` | Evaluate professional engineering work | Six case studies, three disciplines, filters and capabilities |
| `/research` | Explore scientific contribution and technical evidence | Review committee, research leadership, publications and optional kinematic demo |
| `/personal` | Explore independent questions and concepts | Personal project collection with explicit project status |
| `/about` | Understand the professional background | Profile, education and full experience timeline |
| `/contact` | Start a conversation | Existing contact channels and collaboration context |

Project details retain their existing URLs. Back links now target the appropriate
page, and old home section hashes redirect to their new locations. Work filters
continue to use hashes within `/work`. The simulator remains dynamically loaded
with `ssr: false` and opens only on request or its explicit hash.

A compact footer replaces the full contact section on every page. The full contact
information remains on `/contact`. No professional facts, dates, project status,
publication metadata or measured results were changed. The professional identity
remains Mechatronics Engineering Graduate, following the owner's explicit correction.

## References consulted

- [Tania Rascia](https://www.taniarascia.com/): separate destinations for projects,
  topics and profile. Applied principle: distinct visitor intentions deserve clear entry points.
- [Brittany Chiang's project archive](https://brittanychiang.com/archive): a dedicated
  complete catalogue beyond selected work. Applied principle: a short introduction
  can lead to a deeper archive without displaying everything at once.
- [Bartosz Ciechanowski](https://ciechanow.ski/): extensive technical explanations
  and interactive exploration. Applied principle: reserve deep technical material
  for a purposeful reading destination. His long-form homepage is not the model
  for the requested compact home.

These are observed design references, not a ranking of the world's engineers or
an endorsement. Their content and professional claims are not attributed to Nick.

## Comparison and maintenance

RSCH is the baseline. MENU is the routed version. The local comparator uses fresh
source snapshots with recorded branch commits. V3 remains a published branch but
is no longer an active comparison target.

The public comparison preserves the RSCH implementation and imports a generated
MENU source snapshot in its own namespace, with a single shared editorial JSON.
Its link adapter preserves `version=menu` and accepts the comparison control;
standalone MENU has neither a version query requirement nor that extra control.
Source snapshots must be regenerated from a committed MENU revision, not hand
edited. The snapshot manifest records the exact input revision and content hashes.

## Validation

Run `npm run build` and `npm run test:menu` against a running standalone MENU server.
The same routing checks support `PORTFOLIO_TEST_QUERY=menu` for the public comparison.
Check mobile and desktop navigation, active states, keyboard/Escape, case return
links, work filters, publication citations, simulator opening and old hash redirects.
Compare main content against the standalone branches before publication.
