import { ArrowUpRight } from 'lucide-react';
import { getAreaStyle } from '@/lib/portfolio';
import type { ProjectItem } from '@/types';

export function ProjectCard({ project }: { project: ProjectItem }) {
  const style = getAreaStyle(project.category);
  return (
    <article className="flex h-full min-w-0 flex-col rounded-2xl border border-slate-800 bg-[#0b1021] p-5 sm:p-6">
      <p className="font-mono text-[11px] text-slate-400">{project.period}</p>
      <h4 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-white lg:min-h-[5.5rem]">
        <a href={`/projects/${project.id}`} className="rounded hover:text-cyan-200">{project.title}</a>
      </h4>
      <p className="mt-3 text-xs leading-relaxed text-slate-400">{project.role}</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.summary}</p>

      <ol className="my-6 space-y-3 border-y border-slate-800 py-5" aria-label="Approach overview">
        {project.flow.slice(0, 3).map((step, index) => (
          <li key={step.label} className="flex items-start gap-3">
            <span className={`pt-0.5 font-mono text-[10px] ${style.text}`}>0{index + 1}</span>
            <span className="text-xs leading-relaxed text-slate-300">{step.label}</span>
          </li>
        ))}
      </ol>
      <dl className="space-y-4 text-xs leading-relaxed">
        <div><dt className="mb-1 font-medium text-slate-400">Personal contribution</dt><dd className="line-clamp-3 text-slate-300">{project.contributions}</dd></div>
        <div><dt className="mb-1 font-medium text-slate-400">Outcome</dt><dd className="line-clamp-3 text-slate-300">{project.results}</dd></div>
      </dl>
      <div className="mt-auto pt-6">
        <ul className="mb-5 flex flex-wrap gap-2">{project.technologies.slice(0, 3).map((technology) => <li key={technology} className="rounded-md border border-slate-800 px-2 py-1 text-[10px] text-slate-400">{technology}</li>)}</ul>
        <p className="mb-4 border-t border-slate-800 pt-4 text-xs leading-relaxed text-slate-400">{project.evidenceLabel}</p>
        <a href={`/projects/${project.id}`} className={`inline-flex items-center gap-2 rounded text-sm font-medium hover:text-white ${style.text}`}>Read case study<ArrowUpRight className="h-4 w-4" aria-hidden="true" /><span className="sr-only">: {project.title}</span></a>
      </div>
    </article>
  );
}
