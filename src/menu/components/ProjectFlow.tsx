import { ArrowDown, ArrowRight } from 'lucide-react';
import type { ProjectItem } from '@/menu/types';

export function ProjectFlow({ project }: { project: ProjectItem }) {
  const detailed = project.flow.length > 4;
  return <figure className="rounded-2xl border border-slate-800 bg-[#0b1021] p-5 sm:p-8">
    <figcaption className="mb-6 font-mono text-xs uppercase tracking-widest text-slate-400">{project.category === 'robotics' ? 'Model & system overview' : 'Architecture overview'}</figcaption>
    <ol className={detailed ? 'grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' : 'flex flex-col gap-3 md:flex-row md:items-stretch'}>
      {project.flow.map((step, index) => <li key={step.label} className={`flex min-w-0 flex-1 flex-col gap-3 ${detailed ? '' : 'md:flex-row md:items-center'}`}>
        <div className="h-full min-w-0 flex-1 rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
          <span className="font-mono text-[10px] text-cyan-400">0{index + 1}</span>
          <p className="mt-2 text-sm font-semibold text-slate-100">{step.label}</p>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">{step.detail}</p>
        </div>
        {!detailed && index < project.flow.length - 1 && <><ArrowRight className="hidden h-4 w-4 shrink-0 text-slate-500 md:block" aria-hidden="true" /><ArrowDown className="mx-auto h-4 w-4 shrink-0 text-slate-500 md:hidden" aria-hidden="true" /></>}
      </li>)}
    </ol>
    {!!project.crossCutting?.length && <div className="mt-5 rounded-xl border border-cyan-900/50 bg-cyan-950/20 p-4"><p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-cyan-300">Across the lifecycle</p><dl className="space-y-3">{project.crossCutting.map((item) => <div key={item.label}><dt className="text-xs font-semibold text-slate-200">{item.label}</dt><dd className="mt-1 text-xs leading-relaxed text-slate-400">{item.detail}</dd></div>)}</dl></div>}
    <p className="mt-5 text-xs leading-relaxed text-slate-400">Conceptual overview of the approach described in this case.</p>
  </figure>;
}
