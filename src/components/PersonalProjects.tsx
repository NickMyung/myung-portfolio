import { ArrowUpRight, AudioLines } from 'lucide-react';
import { MenuLink } from '@/components/MenuEnvironment';
import { portfolio } from '@/lib/portfolio';
import { personalProjectHref } from '@/lib/personal-projects';
import { Reveal } from '@/components/Reveal';

export function PersonalProjects({ version, asPage = false }: { version?: 'v3' | 'rsch'; asPage?: boolean }) {
  const Title = asPage ? 'h1' : 'h2';
  return <section id="personal-projects" aria-labelledby="personal-projects-title" className={`${asPage ? 'menu-page-top pb-16 sm:pb-24' : 'section-spacing'} border-t border-slate-800/80`}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal className="max-w-2xl">
        <p className="section-eyebrow">Independent explorations</p>
        <Title id="personal-projects-title" className="section-title">Personal projects</Title>
        <p className="section-description">Questions beyond the workplace, explored through data, research and software.</p>
      </Reveal>
      {portfolio.personalProjects.map((project) => <Reveal key={project.id} className="mt-8">
        <article className="overflow-hidden rounded-3xl border border-violet-900/50 bg-slate-950/60">
          <div className="grid lg:grid-cols-[1.2fr_1fr]">
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <AudioLines className="h-5 w-5 text-violet-300" aria-hidden="true" />
                <span className="rounded-full border border-violet-800/60 bg-violet-950/30 px-3 py-1 font-mono text-[11px] text-violet-200">{project.status}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.summary}</p>
              <ul aria-label="Project focus" className="mt-5 flex flex-wrap gap-2">{project.focusAreas.map((area) => <li key={area} className="rounded-md border border-slate-800 px-2.5 py-1 text-xs text-slate-400">{area}</li>)}</ul>
              <MenuLink href={personalProjectHref(project.id, version)} className="mt-7 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-violet-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300">Explore the study plan<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></MenuLink>
            </div>
            <div className="flex flex-col justify-center border-t border-slate-800 bg-gradient-to-br from-violet-950/25 to-transparent p-6 sm:p-8 lg:border-l lg:border-t-0">
              <p className="font-mono text-[10px] uppercase tracking-widest text-violet-300">The research question</p>
              <p className="mt-4 text-xl font-medium leading-relaxed text-slate-100">{project.hypothesis}</p>
              <ol aria-label="Proposed generation coverage" className="mt-6 grid grid-cols-5 gap-2">{[1, 2, 3, 4, 5].map((generation) => <li key={generation} className="rounded-xl border border-slate-700/70 bg-slate-900/70 py-3 text-center font-mono text-[10px] text-slate-300 sm:text-xs">Gen {generation}</li>)}</ol>
              <p className="mt-4 text-xs leading-relaxed text-slate-400">Five proposed cohorts. A hypothesis to test, with no measured findings published yet.</p>
            </div>
          </div>
        </article>
      </Reveal>)}
    </div>
  </section>;
}
