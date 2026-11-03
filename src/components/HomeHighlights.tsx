import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { getAreaStyle, getProjectsForArea, portfolio, projectCategories } from '@/lib/portfolio';
import { Reveal } from '@/components/Reveal';
import { MenuLink } from '@/components/MenuEnvironment';

export function HomeHighlights() {
 return <section aria-labelledby="home-work-title" className="section-spacing border-t border-slate-800"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div className="max-w-2xl"><p className="section-eyebrow">A starting point</p><h2 id="home-work-title" className="section-title">Across disciplines.<br />One engineering perspective.</h2><p className="section-description">Three selected cases. Explore the context, engineering decisions and available evidence behind each.</p></div><MenuLink href="/work" className="inline-flex shrink-0 items-center gap-2 rounded text-sm text-cyan-300 hover:text-white">All professional projects<ArrowRight className="h-4 w-4" aria-hidden="true" /></MenuLink></div>
 <div className="mt-8 grid gap-4 lg:grid-cols-3">{projectCategories.map((area,index)=>{
 const project=getProjectsForArea(area.id).find(item=>item.featured);if(!project)return null;
 const style=getAreaStyle(area.id),context=project.business??project.context;
 return <Reveal key={area.id} delay={index*70} className="h-full"><article className={`flex h-full flex-col rounded-2xl border p-6 ${style.border} ${style.surface}`}><p className={`font-mono text-[10px] uppercase tracking-widest ${style.text}`}>{area.label}</p><h3 className="mt-4 text-lg font-semibold leading-snug text-white">{project.title}</h3><p className="mb-5 mt-3 text-sm leading-relaxed text-slate-400">{project.summary}</p>{context&&<dl className="mb-6 mt-auto space-y-2 border-l border-slate-700 pl-3 text-xs lg:min-h-[4.5rem]"><div><dt className="inline text-slate-400">Industry: </dt><dd className="inline text-slate-300">{context.industry}</dd></div><div><dt className="inline text-slate-400">For: </dt><dd className="inline text-slate-300">{context.audience}</dd></div></dl>}<MenuLink href={`/projects/${project.id}`} className={`inline-flex items-center gap-2 rounded text-xs font-medium ${style.text} hover:text-white`}>Read case study<ArrowUpRight className="h-4 w-4" aria-hidden="true" /><span className="sr-only">: {project.title}</span></MenuLink></article></Reveal>;
 })}</div>
 <div className="mt-8 flex flex-col justify-between gap-5 rounded-2xl border border-violet-900/50 bg-violet-950/10 p-6 sm:flex-row sm:items-center"><div><p className="font-mono text-[10px] uppercase tracking-widest text-violet-300">Beyond professional work</p><h3 className="mt-2 text-lg font-semibold text-white">{portfolio.personalProjects[0]?.title??'Independent explorations'}</h3><p className="mt-2 text-sm text-slate-400">Personal questions, study concepts and independent software explorations.</p></div><MenuLink href="/personal" className="inline-flex shrink-0 items-center gap-2 rounded text-sm text-violet-200 hover:text-white">Personal projects<ArrowRight className="h-4 w-4" aria-hidden="true" /></MenuLink></div>
 </div></section>;
}
