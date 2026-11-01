import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { ContactFooter } from '@/components/ContactFooter';
import { ProjectFlow } from '@/components/ProjectFlow';
import { ProjectLinks } from '@/components/ProjectLinks';
import { Reveal } from '@/components/Reveal';
import { getProject, getCategoryLabel, portfolio } from '@/lib/portfolio';

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ id: project.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const project = getProject(params.id);
  if (!project) return { title: 'Project not found' };
  return { title: `${project.title} | ${portfolio.profile.name}`, description: project.summary, openGraph: { title: project.title, description: project.summary, type: 'article', url: `/projects/${project.id}` } };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProject(params.id);
  if (!project) notFound();
  const experience = portfolio.experience.filter((item) => project.experienceIds.includes(item.id));
  const publications = portfolio.publications.filter((item) => project.publicationIds.includes(item.id));
  const sections = [
    { title: 'Problem & context', text: project.problem },
    { title: 'Objective', text: project.objective },
    { title: 'Approach & implementation', text: project.approach },
    { title: 'Personal contribution', text: project.contributions },
    { title: 'Technical challenges', text: project.challenges },
    { title: 'Outcome', text: project.results },
  ];
  return <>
    <Navbar />
    <main id="main-content" className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8">
      <a href="/#projects" className="inline-flex items-center gap-2 rounded text-sm text-slate-400 hover:text-cyan-200"><ArrowLeft className="h-4 w-4" aria-hidden="true" />All projects</a>
      <Reveal className="mb-10 mt-9 max-w-4xl"><header>
        <p className="section-eyebrow">{getCategoryLabel(project.category)} / {project.period}</p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">{project.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-400">{project.summary}</p>
        <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4 text-sm"><div><dt className="text-slate-500">Role</dt><dd className="mt-1 text-slate-200">{project.role}</dd></div><div><dt className="text-slate-500">Status</dt><dd className="mt-1 text-slate-200">{project.status}</dd></div></dl>
      </header></Reveal>
      <ProjectFlow project={project} />
      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="space-y-9">
          {sections.map((section, index) => <section key={section.title} aria-labelledby={`case-section-${index}`}><h2 id={`case-section-${index}`} className="mb-3 text-xl font-semibold text-white">{section.title}</h2><p className="text-base leading-relaxed text-slate-400">{section.text}</p></section>)}
          <section className="rounded-2xl border border-cyan-900/50 bg-cyan-950/10 p-6" aria-labelledby="case-material"><p className="mb-2 font-mono text-xs text-cyan-300">{project.evidenceLabel}</p><h2 id="case-material" className="text-xl font-semibold text-white">Available material & scope</h2><p className="mb-5 mt-3 text-sm leading-relaxed text-slate-400">{project.evidence}</p><ProjectLinks project={project} /></section>
        </article>
        <aside className="space-y-7 self-start rounded-2xl border border-slate-800 bg-[#0b1021] p-6">
          <div><h2 className="text-sm font-semibold text-white">Technologies used</h2><ul className="mt-4 flex flex-wrap gap-2">{project.technologies.map((technology) => <li key={technology} className="rounded-md border border-slate-800 px-2.5 py-1 text-xs text-slate-400">{technology}</li>)}</ul></div>
          <div><h2 className="text-sm font-semibold text-white">Architecture notes</h2><p className="mt-3 text-xs leading-relaxed text-slate-400">{project.architecture}</p></div>
          {experience.length > 0 && <div><h2 className="text-sm font-semibold text-white">Related experience</h2><ul className="mt-3 space-y-4">{experience.map((item) => <li key={item.id} className="text-xs"><p className="text-slate-200">{item.organization}{item.client ? ` · Client: ${item.client}` : ''}</p><p className="mt-1 text-slate-500">{item.period}</p></li>)}</ul><a href="/#experience" className="mt-4 inline-flex items-center gap-2 text-xs text-cyan-300">Career timeline<ArrowUpRight className="h-3 w-3" aria-hidden="true" /></a></div>}
          {publications.length > 0 && <div><h2 className="text-sm font-semibold text-white">Related publications</h2>{publications.map((publication) => <a key={publication.id} href={publication.url} target="_blank" rel="noreferrer" className="mt-3 block text-xs leading-relaxed text-cyan-300 hover:text-cyan-100">{publication.title} ({publication.year})<span className="sr-only"> (opens in a new tab)</span></a>)}</div>}
        </aside>
      </div>
    </main>
    <ContactFooter />
  </>;
}
