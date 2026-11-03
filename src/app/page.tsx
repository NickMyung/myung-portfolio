import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PersonalProjects } from '@/components/PersonalProjects';
import { ProjectsShowcase } from '@/components/ProjectsShowcase';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { Expertise } from '@/components/Expertise';
import { ResearchSection } from '@/components/ResearchSection';
import { About } from '@/components/About';
import { ContactFooter } from '@/components/ContactFooter';

export default function Home() {
  return <>
    <Navbar />
    <main id="main-content">
      <Hero />
      <ProjectsShowcase />
      <PersonalProjects />
      <ExperienceTimeline />
      <Expertise />
      <ResearchSection />
      <About />
    </main>
    <ContactFooter />
  </>;
}
