# Package reading and assessment guide

A reading and assessment guide for the reviewer and presenter. Portfolio owner: **Nick Soto Conde**. Reference snapshot: **1 November 2026**. The Spanish version is available at [guia-de-revision.html](guia-de-revision.html).

## 1. What is being presented

The primary review object is a professional portfolio web application built with Next.js, React, TypeScript, Tailwind CSS, and Three.js. Its main identity is **Mechatronics Engineer**. Big Data and data engineering, full-stack development, and robotics research and development receive equal visual emphasis.

The package combines real browser captures, design explanations, and a source snapshot of the portfolio application. Reviewing the original implementation of a described project, such as a banking pipeline or a commercial application, requires that project’s own repository or supporting artifacts.

## 2. Opening the package and understanding its contents

1. Extract the entire ZIP and preserve its folder structure. Moving index.html alone would break its image links.
2. Open [index.html](index.html) in a browser. The static gallery works without starting a server.
3. Click a screenshot to open the original PNG and zoom into details. Gallery thumbnails support navigation; they are not the appropriate scale for judging text legibility.
4. Use [code-excerpts.md](code-excerpts.md) for selectable source excerpts and compare them with the complete files in source/.

| Item | Contents | Suggested use |
| --- | --- | --- |
| index.html | English visual index, palette, and descriptions. | Presentation entry point. |
| desktop/ | 15 PNG files: full-page overview, sections, 3D model, and three representative cases. | Assess hierarchy, composition, and desktop consistency. |
| mobile/ | 7 PNG files at a 390 CSS-pixel viewport. | Assess content and control reorganization on a narrow screen. |
| code/ | 8 PNG source plates and their HTML versions. | Relate design choices to the implementation. |
| code-excerpts.md | Text excerpts with original paths and line numbers. | Read, copy, and inspect source independently of screenshots. |
| source/ | Portfolio application source and configuration. | Technical inspection and optional local execution. |
| manifest.json | Paths, sizes, capture context, resolutions, and SHA-256 hashes. | Traceability and file integrity. |
| README_ES.md | Brief Spanish instructions. | Quick reference. |

## 3. Suggested assessment sequence

1. **Identity and scope:** start with desktop/01-home.png. Check whether the profession and the three areas are understandable without relying on an extensive technology inventory.
2. **Thematic organization:** compare desktop/02-selected-projects.png and desktop/04-capabilities.png. Examine equal treatment of the areas and the relationship between capabilities and cases.
3. **Case depth:** compare desktop/12-case-data.png, desktop/13-case-full-stack.png, and desktop/14-case-robotics.png. Identify context, role, problem, and conceptual architecture.
4. **Career and research:** review desktop/03-experience.png, desktop/05-research.png, desktop/06-publications.png, and desktop/11-interactive-model.png. Distinguish experience, publications, and demonstrations.
5. **Profile and community:** review desktop/07-profile.png, desktop/08-education.png, and desktop/09-academic-service.png. Check whether education, academic projects, and community service remain clearly classified.
6. **Responsive behavior:** compare mobile/ with the desktop views. Reading order and access to content matter more than preserving identical columns.
7. **Implementation:** use the following mapping to connect the source plates with complete source files.

## 4. Mapping screenshots to implementation

| Aspect | Interface view | Source plate | File to inspect |
| --- | --- | --- | --- |
| Pastel background / fondo pastel | desktop/01-home.png | code/01-pastel-background.png | source/src/app/globals.css |
| Area colors / colores por área | desktop/02-selected-projects.png | code/02-area-color-system.png | source/src/lib/portfolio.ts |
| Typography and grid / tipografía y cuadrícula | desktop/01-home.png | code/03-typography-and-grid.png | source/tailwind.config.js; source/src/app/globals.css |
| Responsive layout / adaptación de columnas | desktop/02-selected-projects.png; mobile/02-projects.png | code/04-responsive-three-area-layout.png | source/src/components/Hero.tsx; source/src/components/ProjectsShowcase.tsx |
| Project cards / tarjetas de proyectos | desktop/02-selected-projects.png | code/05-project-card-hierarchy.png | source/src/components/ProjectCard.tsx |
| Keyboard and motion / teclado y movimiento | mobile/07-navigation.png | code/06-keyboard-and-motion.png | source/src/app/globals.css; source/src/components/Navbar.tsx |
| On-demand model / modelo bajo demanda | desktop/11-interactive-model.png | code/07-on-demand-research-model.png | source/src/components/ResearchSection.tsx |
| Content structure / estructura del contenido | desktop/02-selected-projects.png | code/08-data-driven-growth.png | source/src/lib/portfolio.ts; source/portfolio_data.json; source/src/app/projects/[id]/page.tsx |

Line numbers refer to the exported files in **source/**. They may differ from a repository edited after the export. Excerpts are selections from larger files and may begin or end inside a surrounding structure; use the complete source for context.

## 5. Interpreting the images correctly

- **Section views:** most images are browser viewports positioned at a section’s beginning. Long cards or sections may continue below the image’s lower edge.
- **Full-page overview:** desktop/00-full-page.png contains the complete default homepage, with the 3D model closed. Open it at a useful zoom level rather than assessing text from its thumbnail.
- **CSS pixels versus PNG pixels:** desktop views use a 1440 CSS-pixel viewport at 1.5× density; mobile views use 390 CSS pixels at 2× density. PNG width therefore exceeds the layout width. Both measurements are recorded in the manifest.
- **Interactive model:** desktop/11-interactive-model.png shows a paused state. Its appearance can be inspected from the image; controls and behavior require running the application.
- **Source plates:** long lines wrap for readability. The underlying files in source/ retain their original contents.

## 6. Suggested review criteria

The following criteria support structured observations. They are not an official university rubric and do not assign an academic grade; adapt them to institutional requirements.

| Criterion | What to examine | Useful evidence |
| --- | --- | --- |
| Professional identity | Understandable profession, scope, and purpose. | Homepage and profile. |
| Multidisciplinary balance | Equivalent visual treatment of all three areas and understandable navigation. | Projects, capabilities, and filters. |
| Visual consistency | Dark surfaces, pastel gradients, typography, spacing, and area accents. | Section captures and source plates 01–05. |
| Communication of work | Clear distinction between problem, personal contribution, team contribution, and result. | Complete cases and portfolio content. |
| Responsive interaction | Mobile reading, keyboard navigation, focus, and control states. | Mobile views, source, and live checks. |
| Maintainability | Shared components, stable categories, and separation of content from presentation. | ProjectCard.tsx, lib/portfolio.ts, and portfolio_data.json. |
| Traceability | A clear relationship between claims, available sources, and stated limits. | Case materials, source snapshot, and manifest. |

## 7. Optional functional verification

The manifest records a successful production build before capture and Node.js v20.17.0. Static gallery review requires no installation. To run the application, open a terminal in **source/** using a compatible Node.js installation. Installing dependencies may require internet access.

```sh
npm ci
npm run build
npm run start
```

Open the local address printed by Next.js, normally http://localhost:3000. If the port is occupied, choose another port or stop only a process you own. Case pages are generated from the included content.

- Try Selected work, Big Data, Full-Stack, Robotics R&D, and All projects. Compare results and counters with the content inventory.
- Follow an area link from the homepage after selecting another filter; verify both the content change and the resulting scroll position.
- Open a case directly by URL, return to the catalog, and inspect available links. External links require access to their target sites.
- Open and close mobile navigation; test Escape and focus restoration.
- Open the research model, adjust joints, and test play/pause. Inspect the textual fallback if WebGL is unavailable.
- Test keyboard navigation and reduced-motion preferences. Implemented mechanisms alone do not establish comprehensive accessibility conformance.

## 8. Integrity and evidentiary scope

The reference Git commit is **90b0f04**, but the export includes local working-tree changes. Inspect the packaged source rather than assuming it is identical to that remote commit.

A SHA-256 hash checks whether file bytes match the manifest. It does not independently establish authorship, employment, publication acceptance, or institutional approval. The manifest excludes itself from its hash list to avoid a circular reference.

```powershell
$reviewManifest = Get-Content -LiteralPath '.\manifest.json' -Raw | ConvertFrom-Json
$reviewEntry = $reviewManifest.files | Where-Object { $_.path -eq 'desktop/01-home.png' }
(Get-FileHash -LiteralPath '.\desktop\01-home.png' -Algorithm SHA256).Hash.ToLower() -eq $reviewEntry.sha256
```

Run this example from the extracted package root. True means the file matches its recorded hash. Professional and scientific claims require their corresponding original sources and independent checks. The browser model is illustrative and does not establish clinical effectiveness.

## 9. Recording useful feedback

Record observations separately, identifying the relevant file. Distinguish observed defects from design preferences and requests for additional evidence.

```text
Observation:
Screenshot or URL:
Source file and lines, if applicable:
Type: design / function / content / evidence
Observed behavior:
Impact on the visitor or reviewer:
Proposed improvement:
How to verify the correction:
Priority according to the institution’s rubric:
```

Share the complete ZIP. The guide and index support the review; PNG files and source/ are the inspection materials. Any approval decision belongs in the reviewer’s or institution’s own assessment report.
