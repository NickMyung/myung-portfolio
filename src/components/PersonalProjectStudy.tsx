import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { PersonalProject } from '@/types';
import { personalProjectsReturnHref } from '@/lib/personal-projects';

export function PersonalProjectStudy({ project, version }: { project: PersonalProject; version?: 'v3' | 'rsch' }) {
  return <>
    <a href={personalProjectsReturnHref(version)} className="inline-flex items-center gap-2 rounded text-sm text-slate-400 hover:text-violet-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Personal projects</a>
    <header className="mb-10 mt-9 max-w-3xl">
      <p className="section-eyebrow">Personal project / {project.status}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">{project.title}</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-300">{project.summary}</p>
      <p className="mt-5 rounded-xl border border-violet-900/60 bg-violet-950/20 p-4 text-sm leading-relaxed text-violet-200">Study design in progress. This page presents a proposed analysis website; it does not report a collected dataset, measured results or a released dashboard.</p>
    </header>
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
      <article className="min-w-0 space-y-10">
        <section aria-labelledby="study-question">
          <p className="font-mono text-xs text-violet-300">01 / Question & scope</p>
          <h2 id="study-question" className="mt-3 text-2xl font-semibold leading-snug text-white">{project.hypothesis}</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.scope}</p>
        </section>
        <section aria-labelledby="study-metrics">
          <h2 id="study-metrics" className="text-xl font-semibold text-white">What the study would measure</h2>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">{project.metrics.map((metric) => <div key={metric.label} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5"><dt className="text-sm font-semibold text-violet-200">{metric.label}</dt><dd className="mt-3 text-sm leading-relaxed text-slate-400">{metric.description}</dd></div>)}</dl>
        </section>
        <section aria-labelledby="study-method">
          <h2 id="study-method" className="text-xl font-semibold text-white">From source material to an explanation</h2>
          <ol className="mt-5 space-y-5">{project.methodology.map((step, index) => <li key={step.title} className="flex gap-4"><span className="font-mono text-sm text-violet-300" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div><h3 className="text-sm font-semibold text-slate-200">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p></div></li>)}</ol>
        </section>
        <section aria-labelledby="study-boundaries" className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
          <h2 id="study-boundaries" className="text-xl font-semibold text-white">Interpretation matters</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-300">{project.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul>
        </section>
      </article>
      <aside className="space-y-7 self-start rounded-2xl border border-slate-800 bg-[#0b1021] p-6">
        <section aria-labelledby="study-views"><h2 id="study-views" className="text-sm font-semibold text-white">Planned explorer</h2><ul className="mt-4 list-disc space-y-3 pl-4 text-xs leading-relaxed text-slate-400">{project.plannedViews.map((view) => <li key={view}>{view}</li>)}</ul></section>
        <section aria-labelledby="study-sources"><h2 id="study-sources" className="text-sm font-semibold text-white">Source examples</h2><p className="mt-2 text-xs leading-relaxed text-slate-400">Starting points for the study design, not an assembled dataset.</p><ul className="mt-4 space-y-5">{project.sourceExamples.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 text-xs leading-relaxed text-violet-200 underline decoration-violet-800 underline-offset-4 hover:text-white">{source.title}<ArrowUpRight className="mt-0.5 h-3 w-3 shrink-0" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a><p className="mt-2 text-xs leading-relaxed text-slate-400">{source.note}</p></li>)}</ul></section>
        <section aria-labelledby="study-next"><h2 id="study-next" className="text-sm font-semibold text-white">Next milestone</h2><p className="mt-3 text-xs leading-relaxed text-slate-400">{project.nextMilestone}</p></section>
      </aside>
    </div>
  </>;
}
