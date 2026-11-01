import { portfolio } from '@/lib/portfolio';

export function AcademicService() {
  return <section id="academic-service" className="mt-12 border-t border-slate-800 pt-10" aria-labelledby="service-title">
    <h3 id="service-title" className="text-xl font-semibold text-white">Academic service & community</h3>
    <p className="mt-2 text-sm text-slate-400">Peer review and community leadership, separate from engineering projects and publications.</p>
    <div className="mt-6 grid gap-5 md:grid-cols-2">{portfolio.academicService.map((item) => <article key={item.id} className="rounded-xl border border-slate-800 bg-[#0b1021] p-5"><p className="font-mono text-[10px] text-cyan-300">{item.period} · {item.location}</p><h4 className="mt-3 text-base font-semibold text-white">{item.role}</h4><p className="mt-2 text-xs text-slate-400">{item.organization}</p><p className="mt-4 text-sm leading-relaxed text-slate-400">{item.description}</p></article>)}</div>
  </section>;
}
