import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/menu/components/Navbar';
import { SiteFooter } from '@/menu/components/SiteFooter';
import { PersonalProjectStudy } from '@/menu/components/PersonalProjectStudy';
import { portfolio } from '@/menu/lib/portfolio';
import { getPersonalProject } from '@/menu/lib/personal-projects';

export function generateStaticParams() {
  return portfolio.personalProjects.map(({ id }) => ({ id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const project = getPersonalProject(params.id);
  return project ? { title: `${project.title} | ${portfolio.profile.name}`, description: project.summary } : { title: 'Project not found' };
}

export default function PersonalProjectPage({ params }: { params: { id: string } }) {
  const project = getPersonalProject(params.id);
  if (!project) notFound();
  return <>
    <Navbar />
    <main id="main-content" data-portfolio-layout="menu" className="menu-page-top mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"><PersonalProjectStudy project={project} /></main>
    <SiteFooter />
  </>;
}
