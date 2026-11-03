import { Briefcase, BarChart3 } from 'lucide-react';
import type { ProjectBusinessContext } from '@/menu/types';

export function BusinessContext({ business }: { business: ProjectBusinessContext }) {
  return <section aria-labelledby="business-context-title" className="mb-10 rounded-2xl border border-cyan-900/50 bg-cyan-950/10 p-5 sm:p-8">
    <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.7fr)]">
      <div>
        <p className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-cyan-300"><Briefcase className="h-4 w-4" aria-hidden="true" />Business context</p>
        <h2 id="business-context-title" className="text-xl font-semibold text-white sm:text-2xl">{business.focus}</h2>
        <ul aria-label="Development keywords" className="mt-3 flex flex-wrap gap-2">{business.keywords.map((keyword) => <li key={keyword} className="rounded-full border border-cyan-900/60 px-3 py-1 text-xs text-cyan-200">{keyword}</li>)}</ul>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{business.context}</p>
        <dl className="mt-5 grid gap-4 text-xs sm:grid-cols-2"><div><dt className="text-slate-400">Industry</dt><dd className="mt-1 text-slate-200">{business.industry}</dd></div><div><dt className="text-slate-400">Business audience</dt><dd className="mt-1 text-slate-200">{business.audience}</dd></div></dl>
      </div>
      <div className="self-start rounded-xl border border-slate-800 bg-slate-950/40 p-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-cyan-200"><BarChart3 className="h-4 w-4 shrink-0" aria-hidden="true" />Decisions supported</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{business.decisions}</p>
      </div>
    </div>
    <div className="mt-7 border-t border-slate-800 pt-6">
      <h3 className="text-sm font-semibold text-white">Business domains</h3>
      {business.domainGroups?.length ? <div className="mt-4 grid gap-4 md:grid-cols-3">{business.domainGroups.map((group) => <div key={group.title} className="rounded-xl border border-slate-800 bg-slate-950/30 p-4"><h4 className="text-xs font-medium text-cyan-200">{group.title}</h4><ul className="mt-3 space-y-2 text-xs text-slate-300">{group.teams.map((team) => <li key={team}>{team}</li>)}</ul></div>)}</div> : <ul className="mt-3 flex flex-wrap gap-2">{business.teams.map((team) => <li key={team} className="rounded-md border border-slate-700/70 px-3 py-1.5 text-xs text-slate-300">{team}</li>)}</ul>}
    </div>
    {!!business.deliverables?.length && <div className="mt-7 border-t border-slate-800 pt-6"><h3 className="text-sm font-semibold text-white">Work delivered</h3><div className="mt-4 grid gap-5 md:grid-cols-3">{business.deliverables.map((item) => <div key={item.title}><h4 className="text-xs font-medium text-slate-200">{item.title}</h4><p className="mt-2 text-xs leading-relaxed text-slate-400">{item.description}</p></div>)}</div></div>}
  </section>;
}
