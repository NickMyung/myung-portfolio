import { ArrowRight, Boxes, Braces, Database, Network, Scan, Workflow } from 'lucide-react';
import type { CSSProperties } from 'react';
import { getAreaStyle, getCategoryLabel } from '@/lib/portfolio';
import type { ProjectItem } from '@/types';

const symbols = {
  data: [Database, Workflow, Boxes],
  software: [Scan, Braces, Network],
  robotics: [Scan, Network, Boxes],
};

/** Editorial diagrams use existing flow data; they do not depict original project artifacts. */
export function ProjectVisual({ project }: { project: ProjectItem }) {
  const style = getAreaStyle(project.category);
  const icons = symbols[project.category as keyof typeof symbols] ?? symbols.data;
  const steps = project.flow.slice(0, 3);
  return <figure className={`project-visual ${style.text}`} style={{ '--area-rgb': style.rgb } as CSSProperties}>
    <div className="relative z-10 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widest">
      <span>{getCategoryLabel(project.category)}</span>
      <span className="text-slate-400">System map</span>
    </div>
    <div className={`visual-network visual-network-${project.category}`} aria-hidden="true">
      <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="visual-connections">
        <path d="M66 60 H334" />
        <path d={project.category === 'robotics' ? 'M66 60 Q200 -18 334 60 Q200 138 66 60' : 'M66 60 V24 H334 V60'} className="visual-secondary-path" />
        <circle cx="200" cy="60" r="44" className="visual-orbit" />
      </svg>
      {steps.map((step, index) => {
        const Icon = icons[index];
        return <div key={step.label} className="visual-node"><span className="visual-node-frame"><Icon strokeWidth={1.3} className="h-7 w-7" /></span><span className="visual-node-index">0{index + 1}</span></div>;
      })}
    </div>
    <ol className="relative z-10 grid min-h-[36px] grid-cols-3 gap-3 text-center">
      {steps.map((step) => <li key={step.label} className="text-[11px] font-medium leading-relaxed text-slate-200">{step.label}</li>)}
    </ol>
    <figcaption className="relative z-10 mt-5 flex items-start gap-2 border-t border-white/10 pt-3 text-[10px] leading-relaxed text-slate-400">
      <ArrowRight aria-hidden="true" className="mt-0.5 h-3 w-3 shrink-0" />
      <span>Conceptual overview{project.flow.length > 3 ? ` · ${project.flow.slice(3).map((step) => step.label).join(' · ')}` : ''}</span>
    </figcaption>
  </figure>;
}
