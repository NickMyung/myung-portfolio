import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProjectsShowcase } from '@/components/ProjectsShowcase';
import { AcademicService } from '@/components/AcademicService';
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
      <AcademicService />
      <ExperienceTimeline />
      <Expertise />
      <ResearchSection />
      <About />
    </main>
    <ContactFooter />
  </>;
}
