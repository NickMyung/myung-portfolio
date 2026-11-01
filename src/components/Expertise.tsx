import { ArrowUpRight, Database, Code2, Orbit } from 'lucide-react';
import { portfolio, getProjectsForArea, getAreaStyle } from '@/lib/portfolio';

const icons: Record<string, typeof Database> = { data: Database, software: Code2, robotics: Orbit };
export function Expertise() {
  return <section id="expertise" className="section-spacing border-t border-slate-800">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="section-eyebrow">03 / Capabilities</p><h2 className="section-title">Different methods. Connected thinking.</h2><p className="section-description max-w-2xl">Explore the technical practice behind all three areas: processing data, building software products, and modeling robotic systems.</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {portfolio.expertise.map((item) => {
          const Icon = icons[item.categoryId] ?? Database;
          const style = getAreaStyle(item.categoryId);
          const projects = getProjectsForArea(item.categoryId);
          return <article key={item.id} className="flex min-w-0 flex-col rounded-2xl border border-slate-800 bg-[#0b1021] p-6">
            <span className={`mb-5 w-fit rounded-xl border p-3 ${style.border} ${style.surface}`}><Icon className={`h-5 w-5 ${style.text}`} aria-hidden="true" /></span>
            <h3 className="text-xl font-semibold text-white lg:min-h-[3.5rem]">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">{item.competencies.slice(0, 4).map((skill) => <li key={skill} className="rounded-md border border-slate-800 px-3 py-1.5 text-xs text-slate-300">{skill}</li>)}</ul>
            <p className="mt-4 text-xs leading-relaxed text-slate-400">{item.technologies.slice(0, 5).join(' · ')}</p>
            <div className="mt-auto pt-6"><p className="mb-3 text-xs font-medium text-slate-400">Related work</p><div className="flex flex-col items-start gap-3">{projects.slice(0, 2).map((project) => <a key={project.id} href={`/projects/${project.id}`} className={`inline-flex items-start gap-2 rounded text-xs leading-relaxed hover:text-white ${style.text}`}>{project.title}<ArrowUpRight className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" /></a>)}</div><a href={`#projects-${item.categoryId}`} className={`mt-5 inline-block text-sm font-medium hover:text-white ${style.text}`}>Explore {item.shortTitle} →</a></div>
          </article>;
        })}
      </div>
    </div>
  </section>;
}
