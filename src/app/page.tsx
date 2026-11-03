import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PersonalProjects } from '@/components/PersonalProjects';
import { ProjectsShowcase } from '@/components/ProjectsShowcase';
import { AcademicService } from '@/components/AcademicService';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { Expertise } from '@/components/Expertise';
import { ResearchSection } from '@/components/ResearchSection';
import { About } from '@/components/About';
import { ContactFooter } from '@/components/ContactFooter';
import { resolvePortfolioVersion, type VersionSearchParams } from '@/lib/portfolio-versions';

export default function Home({ searchParams }: { searchParams: VersionSearchParams }) {
  const version = resolvePortfolioVersion(searchParams.version);
  return <>
    <Navbar version={version} />
    <main id="main-content" data-portfolio-version={version}>
      <Hero version={version} />
      <ProjectsShowcase version={version} />
      <PersonalProjects version={version} />
      {version === 'rsch' && <AcademicService />}
      <ExperienceTimeline version={version} />
      <Expertise version={version} />
      <ResearchSection version={version} />
      <About version={version} />
    </main>
    <ContactFooter version={version} />
  </>;
}
