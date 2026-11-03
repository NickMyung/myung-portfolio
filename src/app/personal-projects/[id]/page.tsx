import MenuProjectPage from '@/menu/app/personal-projects/[id]/page';
import { MenuComparison } from '@/components/MenuComparison';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { ContactFooter } from '@/components/ContactFooter';
import { PersonalProjectStudy } from '@/components/PersonalProjectStudy';
import { portfolio } from '@/lib/portfolio';
import { getPersonalProject } from '@/lib/personal-projects';
import { resolvePortfolioVersion, type VersionSearchParams } from '@/lib/portfolio-versions';

export function generateStaticParams() {
  return portfolio.personalProjects.map(({ id }) => ({ id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const project = getPersonalProject(params.id);
  return project ? { title: `${project.title} | ${portfolio.profile.name}`, description: project.summary } : { title: 'Project not found' };
}

export default function PersonalProjectPage({ params, searchParams }: { params: { id: string }; searchParams: VersionSearchParams }) {
  if (searchParams.version === 'menu') return <MenuComparison><MenuProjectPage params={params} /></MenuComparison>;
  const project = getPersonalProject(params.id);
  if (!project) notFound();
  const version = resolvePortfolioVersion(searchParams.version);
  return <>
    <Navbar version={version} />
    <main id="main-content" data-portfolio-version={version} className="portfolio-case mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"><PersonalProjectStudy project={project} version={version} /></main>
    <ContactFooter version={version} />
  </>;
}
