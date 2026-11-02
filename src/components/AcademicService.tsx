import { portfolio } from '@/lib/portfolio';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import type { PortfolioVersion } from '@/types';

export function AcademicService({ version = 'rsch' }: { version?: PortfolioVersion }) {
  if (version === 'v3') return <section id="academic-service" className="mt-12 border-t border-slate-800 pt-10" aria-labelledby="service-title">
    <h3 id="service-title" className="text-xl font-semibold text-white">Academic service & community</h3>
    <p className="mt-2 text-sm text-slate-400">Peer review and community leadership, separate from engineering projects and publications.</p>
    <div className="mt-6 grid gap-5 md:grid-cols-2">{portfolio.academicService.map((item) => <article key={item.id} className="rounded-xl border border-slate-800 bg-[#0b1021] p-5"><p className="font-mono text-[10px] text-cyan-300">{item.period} · {item.location}</p><h4 className="mt-3 text-base font-semibold text-white">{item.role}</h4><p className="mt-2 text-xs text-slate-400">{item.organization}</p><p className="mt-4 text-sm leading-relaxed text-slate-400">{item.description}</p></article>)}</div>
  </section>;
  const contribution = portfolio.scientificContribution;
  return <section id="academic-service" className="section-spacing border-t border-rose-900/30 bg-[#0b1021]/30" aria-labelledby="service-title">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal className="max-w-3xl">
        <p className="section-eyebrow text-rose-300">02 / Scientific contribution</p>
        <h2 id="service-title" className="section-title">{contribution.title}</h2>
        <p className="section-description">{contribution.introduction}</p>
      </Reveal>
      <div className="mt-9 grid gap-6 md:grid-cols-2">{portfolio.academicService.map((item, index) => <Reveal key={item.id} delay={index * 70} className="h-full"><article className="h-full rounded-2xl border border-rose-900/40 bg-[#0b1021] p-6 sm:p-8"><div className="flex items-center justify-between gap-4"><BookOpen className="h-6 w-6 text-rose-300" aria-hidden="true" /><p className="font-mono text-[10px] text-rose-200">{item.period} · {item.location}</p></div><p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-rose-300">{item.category}</p><h3 className="mt-3 text-xl font-semibold leading-snug text-white">{item.role}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{item.organization}</p><p className="mt-4 text-sm leading-relaxed text-slate-400">{item.description}</p></article></Reveal>)}</div>
      <div className="mt-7 rounded-2xl border border-slate-700/70 bg-slate-950/40 p-6 sm:p-8">
        <h3 className="max-w-3xl text-xl font-semibold text-white">{contribution.foundation}</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">{contribution.methods.map((method, index) => <div key={method.title} className="border-t border-rose-900/50 pt-4"><p className="font-mono text-[10px] text-rose-300">0{index + 1}</p><h4 className="mt-2 text-sm font-semibold text-slate-200">{method.title}</h4><p className="mt-2 text-xs leading-relaxed text-slate-400">{method.description}</p></div>)}</div>
        <a href="#expertise" className="mt-6 inline-flex items-center gap-2 rounded text-sm text-rose-200 hover:text-white">How research informs my engineering practice<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
      </div>
      <div className="mt-7 flex flex-col items-start justify-between gap-4 rounded-xl border border-rose-900/40 px-6 py-5 sm:flex-row sm:items-center"><div><p className="text-sm font-semibold text-white">Research publications & technical work</p><p className="mt-2 text-xs leading-relaxed text-slate-400">Explore the papers, citations, and robotics model connected to this research background.</p></div><a href="#publications" className="inline-flex shrink-0 items-center gap-2 rounded text-sm text-rose-200 hover:text-white">Explore publications<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a></div>
    </div>
  </section>;
}
