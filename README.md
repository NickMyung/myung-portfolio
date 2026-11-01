# Nick Soto Conde — Professional Engineering Portfolio ⚡

## Agente del portafolio

Las instrucciones del agente **Portfolio Architect & Evidence Curator** están en
[../agents/portfolio/AGENTS.md](../agents/portfolio/AGENTS.md). Consulta la [guía de uso](../agents/portfolio/portfolio-agent.md) para
prompts, fichas de evidencia y mejoras concretas identificadas en el repositorio.

> **Repository:** [https://github.com/NickMyung/myung-portfolio](https://github.com/NickMyung/myung-portfolio)  
> **Positioning:** Mechatronics Engineer | Data & Software Engineering | Robotics Research

Professional engineering portfolio showcasing the multidisciplinary background of **Nick Soto Conde**: Mechatronics Engineer (Universidad Nacional de Ingeniería - UNI), Big Data Specialist (UTEC), Data Engineer at Santander Consumer Bank, Full-Stack Developer, and Rehabilitation Robotics Researcher (Technical Program Committee Reviewer at ICCRE Japan).

---

## 🏛️ Architecture & Content Structure

The portfolio is structured according to rigorous engineering and scientific standards:

1. **Home / Hero**: Clear professional positioning, verifiable summary, CV download, GitHub and LinkedIn links.
2. **About**: Professional Background, First-Principles Engineering Approach, Research Interests, and Career Focus.
3. **Expertise**: Three core domains:
   - *Data Engineering & Cloud Platforms* (Apache Spark, Scala, AWS EMR/Glue/Athena, DataHub, SQL Server, Oracle).
   - *Software Engineering & Application Development* (React, React Native, TypeScript, GraphQL, Docker, Python Flask).
   - *Robotics & Biomedical Engineering* (Denavit–Hartenberg Kinematics, 3-DoF Hip Exoskeletons, Workspace Simulation).
4. **Featured Projects (Technical Case Studies)**:
   - *3-DoF Hip Exoskeleton Kinematic Analysis & Workspace Simulation* (CMAAE 2021).
   - *Financial Data Pipeline Modernization & Cloud Migration* (Santander Consumer Bank via IDM/SES).
   - *Mobile & Web Platform with Integrated Predictive Recommendation* (VE7 / Bioverse).
   - *NASA Human Exploration Rover Mechanical & Telemetry Subsystems* (Grupo Tharsis UNI).
   - Comprehensive case studies detailing: Problem, Objective, Methodology, Architecture, Contributions, Challenges, Results, and Evidence.
5. **Interactive 3D Kinematics Simulator (Three.js / WebGL)**:
   - Dynamic client-side simulation decoupling (`next/dynamic`, `ssr: false`).
   - Forward kinematics computed live via Denavit–Hartenberg transformation matrices ($T_0^3$).
   - 3D reachable workspace point-cloud envelope and gait cycle simulation.
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
   - *Subsystem Team Member* at **Grupo Tharsis UNI** (NASA Human Exploration Rover Challenge).
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

---

## 🗂️ Project Structure

```text
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, OpenGraph, SEO metadata, fonts
│   │   ├── page.tsx           # Main page assembling all 9 architectural sections
│   │   └── globals.css        # Tailwind directives, grid background, scrollbars
│   ├── components/
│   │   ├── Navbar.tsx         # Accessible navigation bar with mobile responsive menu
│   │   ├── Hero.tsx           # Normalized headline, verified summary, quick CTAs
│   │   ├── About.tsx          # 4 structured domains (Background, Approach, Interests, Focus)
│   │   ├── Expertise.tsx      # 3 core pillars with verified competencies & technologies
│   │   ├── ProjectsShowcase.tsx # Case studies with modal details and filters
│   │   ├── ExoskeletonWorkspace3D.tsx # Interactive 3D D-H kinematics & workspace simulator
│   │   ├── ExperienceTimeline.tsx # Career history (Action + Context + Contribution + Result)
│   │   ├── ResearchPublications.tsx # Peer-reviewed papers with IEEE/APA/BibTeX citation copier
│   │   ├── AcademicService.tsx  # ICCRE Japan TPC Reviewer, IEEE EMBS, NASA Rover Tharsis
│   │   ├── EducationSection.tsx # UNI B.Sc., UTEC Big Data, and functional skills matrix
│   │   └── ContactFooter.tsx  # Contact methods, social links, location, languages
│   └── types.ts               # Strict TypeScript interfaces matching portfolio_data.json
├── portfolio_data.json        # Single Source of Truth for all content
├── next.config.mjs            # Next.js configuration
├── tailwind.config.js         # Tailwind theme & color definitions
├── tsconfig.json              # TypeScript path aliases (@/*)
└── package.json               # Scripts and production dependencies
```

---

## 📝 Content Management

All data is decoupled from the UI inside **`portfolio_data.json`**.  
To add a new publication, update a role, or modify project metrics:

1. Open `portfolio/portfolio_data.json`.
2. Update the corresponding entity (`profile`, `projects`, `experience`, `publications`, `academicService`, or `education`).
3. Run `npm run build` to verify type safety and static generation.

---

## ♿ Accessibility & Performance (WCAG 2.2 AA)

- Semantic HTML tags (`<nav>`, `<main>`, `<section>`, `<header>`, `<footer>`, `<article>`).
- Keyboard navigability with visible focus indicators (`focus:ring-2 focus:ring-cyan-400`).
- Proper contrast ratios across text elements on cyber-dark backgrounds.
- Client-side lazy evaluation of WebGL canvas (`next/dynamic` with `ssr: false`).
- Zero external font fetch network failures during offline or sandboxed builds.

---

## 🌐 Deployment (Vercel)

1. Push this repository to GitHub: `https://github.com/NickMyung/myung-portfolio`.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js 14 and sets:
   - **Framework Preset**: Next.js
   - **Root Directory**: `portfolio` (or root if configured)
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
