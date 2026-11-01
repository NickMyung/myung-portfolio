import { ArrowUpRight } from 'lucide-react';
import type { CSSProperties } from 'react';
import { getAreaStyle } from '@/lib/portfolio';
import { ProjectVisual } from '@/components/ProjectVisual';
import type { ProjectItem } from '@/types';

export function ProjectCard({ project }: { project: ProjectItem }) {
  const style = getAreaStyle(project.category);
  const preview = project.preview;
  return (
    <article className="project-card group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1021]" style={{ '--area-rgb': style.rgb } as CSSProperties}>
      <ProjectVisual project={project} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {project.business && <ul aria-label="Development keywords" className={`mb-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-medium ${style.text}`}>{project.business.keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}</ul>}
        <p className="font-mono text-[11px] text-slate-400">{project.period}</p>
        <h4 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-white lg:min-h-[3.5rem]">
          <a href={`/projects/${project.id}`} className="rounded transition-colors hover:text-cyan-200">{preview?.title ?? project.title}</a>
        </h4>
        {project.business && <dl className="mt-4 space-y-2 border-l border-slate-700 pl-3 text-xs leading-relaxed"><div><dt className="inline text-slate-400">Industry: </dt><dd className="inline text-slate-300">{project.business.industry}</dd></div><div><dt className="inline text-slate-400">For: </dt><dd className="inline text-slate-300">{project.business.audience}</dd></div></dl>}
        <dl className="mt-5 space-y-4 text-sm leading-relaxed">
          <div><dt className="mb-1 text-[10px] font-medium uppercase tracking-widest text-slate-400">Problem</dt><dd className="text-slate-300">{preview?.problem ?? project.summary}</dd></div>
          <div><dt className="mb-1 text-[10px] font-medium uppercase tracking-widest text-slate-400">My contribution</dt><dd className="text-slate-300">{preview?.contribution ?? project.contributions}</dd></div>
          <div><dt className="mb-1 text-[10px] font-medium uppercase tracking-widest text-slate-400">Outcome</dt><dd className="text-slate-300">{preview?.outcome ?? project.results}</dd></div>
        </dl>
        <div className="mt-auto pt-6">
          <ul className="mb-5 flex flex-wrap gap-2">{project.technologies.slice(0, 3).map((technology) => <li key={technology} className="rounded-md border border-slate-700/70 px-2 py-1 text-[10px] text-slate-300">{technology}</li>)}</ul>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4">
            <p className="text-[10px] text-slate-400">{project.evidenceLabel}</p>
            <a href={`/projects/${project.id}`} className={`inline-flex items-center gap-2 rounded py-1 text-xs font-medium hover:text-white ${style.text}`}>Read case study<ArrowUpRight className="case-arrow h-4 w-4" aria-hidden="true" /><span className="sr-only">: {project.title}</span></a>
          </div>
        </div>
      </div>
    </article>
  );
}
