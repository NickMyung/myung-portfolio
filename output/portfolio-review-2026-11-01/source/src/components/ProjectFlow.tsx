import { ArrowDown, ArrowRight } from 'lucide-react';
import type { ProjectItem } from '@/types';

export function ProjectFlow({ project }: { project: ProjectItem }) {
  return <figure className="rounded-2xl border border-slate-800 bg-[#0b1021] p-5 sm:p-8">
    <figcaption className="mb-6 font-mono text-xs uppercase tracking-widest text-slate-400">{project.category === 'robotics' ? 'Model & system overview' : 'Architecture overview'}</figcaption>
    <ol className="flex flex-col gap-3 md:flex-row md:items-stretch">
      {project.flow.map((step, index) => <li key={step.label} className="flex min-w-0 flex-1 flex-col gap-3 md:flex-row md:items-center">
        <div className="h-full min-w-0 flex-1 rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
          <span className="font-mono text-[10px] text-cyan-400">0{index + 1}</span>
          <p className="mt-2 text-sm font-semibold text-slate-100">{step.label}</p>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">{step.detail}</p>
        </div>
        {index < project.flow.length - 1 && <><ArrowRight className="hidden h-4 w-4 shrink-0 text-slate-500 md:block" aria-hidden="true" /><ArrowDown className="mx-auto h-4 w-4 shrink-0 text-slate-500 md:hidden" aria-hidden="true" /></>}
      </li>)}
    </ol>
    <p className="mt-5 text-xs leading-relaxed text-slate-400">{project.category === 'data' ? 'Conceptual overview; metadata governance spans the data lifecycle.' : 'Conceptual overview of the approach described in this case.'}</p>
  </figure>;
}
