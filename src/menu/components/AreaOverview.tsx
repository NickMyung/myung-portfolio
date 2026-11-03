import { ArrowRight } from 'lucide-react';
import type { ExpertiseItem, ProjectItem } from '@/menu/types';

export function AreaOverview({ overview, projects }: { overview: NonNullable<ExpertiseItem['overview']>; projects: ProjectItem[] }) {
  const industries = Array.from(new Set(projects.flatMap((project) => project.business ? [project.business.industry] : [])));
  return <div className="my-6 rounded-2xl border border-cyan-900/50 bg-gradient-to-br from-cyan-950/20 via-slate-950/40 to-violet-950/20 p-5 sm:p-8">
    <p className="section-eyebrow">Business-driven engineering</p>
    <h4 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">{overview.headline}</h4>
    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">{overview.description}</p>
    <div className="mt-7 grid gap-5 md:grid-cols-3">
      {overview.pillars.map((pillar, index) => <div key={pillar.title} className="border-t border-cyan-900/50 pt-4"><p className="font-mono text-[10px] text-cyan-300">0{index + 1}</p><h5 className="mt-2 text-sm font-semibold text-white">{pillar.title}</h5><p className="mt-2 text-xs leading-relaxed text-slate-400">{pillar.description}</p></div>)}
    </div>
    {industries.length > 0 && <div className="mt-7 border-t border-slate-800 pt-5"><p className="mb-3 text-xs text-slate-400">Business settings</p><ul className="flex flex-wrap gap-2">{industries.map((industry) => <li key={industry} className="rounded-full border border-slate-700/70 bg-slate-950/40 px-3 py-1.5 text-xs text-slate-300">{industry}</li>)}</ul></div>}
    <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-slate-400"><ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" aria-hidden="true" /><span>Each case connects a business need, the work delivered, and the decisions it supports.</span></p>
  </div>;
}
