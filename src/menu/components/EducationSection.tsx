import { portfolio } from '@/menu/lib/portfolio';

const skillLabels: Record<string, string> = { programmingLanguages: 'Languages', dataEngineering: 'Data engineering', cloudAndInfrastructure: 'Cloud & infrastructure', softwareDevelopment: 'Software', roboticsAndSimulation: 'Robotics & simulation', researchMethods: 'Research methods' };
export function EducationSection() {
  return <section id="education" className="mt-12 border-t border-slate-800 pt-10" aria-labelledby="education-title">
    <h3 id="education-title" className="text-xl font-semibold text-white">Education</h3>
    <div className="mt-6 grid gap-5 md:grid-cols-2">{portfolio.education.map((item) => <article key={item.id} className="rounded-xl border border-slate-800 bg-[#0b1021] p-5"><p className="font-mono text-[10px] text-cyan-300">{item.period}</p><h4 className="mt-3 text-base font-semibold text-white">{item.degree}</h4><p className="mt-2 text-sm text-slate-400">{item.institution}</p><p className="mt-3 text-xs leading-relaxed text-slate-400">{item.description}</p></article>)}</div>
    <details className="mt-6 rounded-xl border border-slate-800 p-5"><summary className="cursor-pointer text-sm font-medium text-cyan-300">Full technology & methods inventory</summary><dl className="mt-6 grid gap-5 sm:grid-cols-2">{Object.entries(portfolio.technicalSkills).map(([key, values]) => <div key={key}><dt className="text-sm font-medium text-slate-200">{skillLabels[key] ?? key}</dt><dd className="mt-2 text-xs leading-relaxed text-slate-400">{values.join(' · ')}</dd></div>)}</dl></details>
  </section>;
}
