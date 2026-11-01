# Nick Soto Conde — Professional Engineering Portfolio ⚡

## Agente del portafolio

Las instrucciones del agente **Portfolio Architect & Evidence Curator** están en
[../agents/portfolio/AGENTS.md](../agents/portfolio/AGENTS.md). Consulta la [guía de uso](../agents/portfolio/portfolio-agent.md) para
prompts, fichas de evidencia y mejoras concretas identificadas en el repositorio.

> **Repository:** [https://github.com/NickMyung/myung-portfolio](https://github.com/NickMyung/myung-portfolio)  
> **Positioning:** Mechatronics Engineer | Big Data & Data Engineering | Full-Stack Development | Robotics R&D

Multidisciplinary portfolio of **Nick Soto Conde**, presenting Big Data and data engineering, full-stack development, and robotics research and development with equal visual emphasis, grounded in mechatronics engineering.

The homepage follows: **Projects → Experience → Capabilities → Research → Profile → Contact**. The default project view selects one featured case per area, in three equally sized columns. Experience shows all roles by default. Each case has a shareable page at `/projects/[id]`, with a conceptual architecture, personal contribution, outcome, and an explanation of available material. The 3D model loads only when opened in the research section.

The three areas are defined in `portfolio_data.json` under `expertise`. Their stable category IDs are **`data`**, **`software`**, and **`robotics`**; these IDs are used by projects and experience. Titles, descriptions, filters, area links, and project counts derive from that shared definition. `featured` makes a case eligible for the balanced homepage selection, and `priority` orders projects within each area. Category filters and All projects show the full catalog. Virutex and Bioverse remain internal drafts in `../agents/portfolio/BORRADORES_CASOS.md` until supporting material is available.

To add a project, copy the full structure of an existing item in `projects`, assign a unique `id` and a valid `category`, and supply the content and available evidence. Related capability links update automatically; no `expertise.projectIds` list is needed. Run `npm run build` to generate its case page. See [the multidisciplinary content guide](../agents/portfolio/ENFOQUE_MULTIDISCIPLINARIO.md) for the editorial workflow.

---

## 🏛️ Architecture & Content Structure

The portfolio is structured according to rigorous engineering and scientific standards:

1. **Home / Hero**: Mechatronics identity and three equal entry points into Big Data, full-stack development, and robotics R&D. Social and contact links remain in navigation and contact.
2. **About**: Professional Background, First-Principles Engineering Approach, Research Interests, and Career Focus.
3. **Expertise**: Three core domains:
   - *Big Data & Data Engineering* (Apache Spark, Scala, AWS EMR/Glue/Athena, DataHub, SQL Server, Oracle).
   - *Full-Stack Development* (React, React Native, TypeScript, GraphQL, Docker, Python Flask).
   - *Robotics Research & Development* (Denavit–Hartenberg Kinematics, 3-DoF Hip Exoskeletons, Workspace Simulation).
4. **Featured Projects (Technical Case Studies)**:
   - *3-DoF Hip Exoskeleton Kinematic Analysis & Workspace Simulation* (CMAAE 2021).
   - *Financial Data Pipeline Modernization & Cloud Migration* (Santander Consumer Bank via IDM/SES).
   - *Mobile & Web Platform with Integrated Predictive Recommendation* (VE7 / Bioverse).
   - *NASA Human Exploration Rover Mechanical & Telemetry Subsystems* (Grupo Tharsis UNI).
   - Dedicated case pages with context, objective, approach, architecture, contributions, challenges, outcomes, and available material. Descriptions of professional experience are distinguished from linked artifacts.
5. **Interactive 3D Kinematics Simulator (Three.js / WebGL)**:
   - Dynamic client-side simulation decoupling (`next/dynamic`, `ssr: false`).
   - Illustrative joint controls, workspace visualization, and a user-started gait animation.
   - Parameters have not been independently checked against the publication; the demo does not establish clinical performance. A text fallback is available if WebGL fails.
6. **Professional Experience**:
   - Structured format: **Action + Technical Context + Contribution + Result**.
   - Chronological roles spanning Santander Consumer Bank, Virutex Ilko, Bioverse, VE7 Agronegocios, and Medabots.
7. **Research & Publications**:
   - Strictly separated from committees and activities.
   - *Kinematics Analysis of a 3DoF Hip Exoskeleton and Workspace Simulation* (CMAAE 2021).
   - *Mechatronic Exoskeletons for Hip Rehabilitation: A Schematic Review* (RCAE 2021).
   - Full scientific metadata, official author order, and one-click citation copy buttons in **IEEE**, **APA**, and **BibTeX**.
8. **Academic Service & Leadership**:
   - *Technical Program Committee (TPC) Member & Scientific Reviewer* at **ICCRE Japan** (2024, 2025, 2026).
   - *Director of Research* at **IEEE EMBS UNI** (2021).
   - The rover is presented as a team engineering project under Research; the hand prosthesis is listed under academic engineering projects.
9. **Education & Technical Skills**:
   - Formal university degree: B.Sc. in Mechatronics Engineering (UNI, 2017–2022).
   - Specialized post-graduate training: Specialization in Big Data (UTEC, 2024).
   - Functionally grouped skill matrix (no unverified percentage bars).
10. **Contact**:
    - Direct communication channels, email copy utility, location, and language proficiencies.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router architecture)
- **UI Library**: React 18
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3 + PostCSS + Custom CSS Glow / Grid
- **3D Graphics**: Three.js (WebGL, dynamic camera controls, buffer geometries)
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono

---

## 💻 Getting Started (Local Development)

### Prerequisites
- Node.js >= 18.17.0
- npm, pnpm, or yarn

### Installation
```bash
# Navigate to the portfolio folder
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser at:  
👉 **`http://localhost:3000`**

### Production Build
```bash
# Compile and statically generate pages
npm run build

# Start the production server locally
npm run start
```

If a running development server locks `.next`, use an isolated local review build in PowerShell:

```powershell
$env:PORTFOLIO_BUILD_DIR = '.next-review'
npm run build
node node_modules/next/dist/bin/next start --port 3001
```

The default output remains `.next`. The environment override is only needed for an isolated build; `.next-review/` is ignored by Git.

---

## 🗂️ Project Structure

```text
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, OpenGraph, SEO metadata, fonts
│   │   ├── page.tsx           # Projects-first homepage with data/cloud positioning
│   │   └── projects/[id]/page.tsx # Shareable case pages generated from project data
│   │   └── globals.css        # Tailwind directives, grid background, scrollbars
│   ├── components/
│   │   ├── Navbar.tsx         # Accessible navigation bar with mobile responsive menu
│   │   ├── Hero.tsx           # Normalized headline, verified summary, quick CTAs
│   │   ├── About.tsx          # 4 structured domains (Background, Approach, Interests, Focus)
│   │   ├── Expertise.tsx      # 3 core pillars with verified competencies & technologies
│   │   ├── ProjectsShowcase.tsx # Selected work, category filters, and case-page links
│   │   ├── ProjectFlow.tsx    # Responsive conceptual system diagrams
│   │   ├── ResearchSection.tsx # Research overview and on-demand 3D model
│   │   ├── ExoskeletonWorkspace3D.tsx # Interactive 3D D-H kinematics & workspace simulator
│   │   ├── ExperienceTimeline.tsx # Career history (Action + Context + Contribution + Result)
│   │   ├── ResearchPublications.tsx # Peer-reviewed papers with IEEE/APA/BibTeX citation copier
│   │   ├── AcademicService.tsx  # ICCRE Japan TPC Reviewer and IEEE EMBS community service
│   │   ├── EducationSection.tsx # UNI B.Sc., UTEC Big Data, and functional skills matrix
│   │   └── ContactFooter.tsx  # Contact methods, social links, location, languages
│   ├── lib/portfolio.ts       # Typed data access, project taxonomy, and ordering
│   └── types.ts               # TypeScript interfaces matching portfolio_data.json
├── portfolio_data.json        # Single Source of Truth for all content
├── next.config.mjs            # Next.js configuration
├── tailwind.config.js         # Tailwind theme & color definitions
├── tsconfig.json              # TypeScript path aliases (@/*)
└── package.json               # Scripts and production dependencies
```

---

## 📝 Content Management

Editorial profile data, cases, expertise, experience, publications, service and education are maintained in **`portfolio_data.json`**. Some interface labels and visual descriptions live in components.
To add a new publication, update a role, or modify project metrics:

1. Open `portfolio/portfolio_data.json`.
2. Update the corresponding entity (`profile`, `projects`, `experience`, `publications`, `academicService`, or `education`).
3. Run `npm run build` to verify type safety and static generation.

---

## ♿ Accessibility & Performance

- Semantic HTML tags (`<nav>`, `<main>`, `<section>`, `<header>`, `<footer>`, `<article>`).
- Keyboard navigability with visible focus indicators (`focus:ring-2 focus:ring-cyan-400`).
- Visible focus styles, pressed/expanded states, and a skip-to-content link support keyboard navigation.
- The WebGL canvas uses `next/dynamic` with `ssr: false` and mounts only when requested.
- Reduced-motion styles are respected and the model starts paused. These features do not constitute an accessibility certification.

---

## 🌐 Deployment (Vercel)

1. Push this repository to GitHub: `https://github.com/NickMyung/myung-portfolio`.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js 14 and sets:
   - **Framework Preset**: Next.js
   - **Root Directory**: `portfolio` (or root if configured)
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
