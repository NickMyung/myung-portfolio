'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { getProjectsForArea, getAreaStyle, projectCategories } from '@/lib/portfolio';
import { ProjectCard } from '@/components/ProjectCard';
import { Reveal } from '@/components/Reveal';
import { AreaOverview } from '@/components/AreaOverview';

export function ProjectsShowcase() {
  const [selection, setSelection] = useState('featured');
  const pendingAreaScroll = useRef(false);
  const tabs = [{ id: 'featured', label: 'Selected work' }, ...projectCategories, { id: 'all', label: 'All projects' }];
  useEffect(() => {
    const syncAreaFromHash = () => {
      const area = projectCategories.find((item) => window.location.hash === `#projects-${item.id}`);
      if (area) {
        pendingAreaScroll.current = true;
        setSelection(area.id);
      } else if (window.location.hash === '#projects') {
        pendingAreaScroll.current = false;
        setSelection('featured');
      }
    };
    syncAreaFromHash();
    window.addEventListener('hashchange', syncAreaFromHash);
    return () => window.removeEventListener('hashchange', syncAreaFromHash);
  }, []);

  useEffect(() => {
    if (pendingAreaScroll.current && window.location.hash === `#projects-${selection}`) {
      const frame = window.requestAnimationFrame(() => {
        pendingAreaScroll.current = false;
        document.getElementById(`projects-${selection}`)?.scrollIntoView({ block: 'start', behavior: 'instant' });
      });
      return () => window.cancelAnimationFrame(frame);
    }
  }, [selection]);

  function selectArea(id: string, scrollToArea = false) {
    pendingAreaScroll.current = scrollToArea;
    setSelection(id);
    const hash = projectCategories.some((area) => area.id === id) ? `#projects-${id}` : '#projects';
    window.history.replaceState(null, '', hash);
  }

  const groups = projectCategories
    .filter((area) => selection === 'featured' || selection === 'all' || selection === area.id)
    .map((area) => {
      const available = getProjectsForArea(area.id);
      return { ...area, available, visible: selection === 'featured' ? available.filter((project) => project.featured).slice(0, 1) : available };
    });
  const visibleCount = groups.reduce((count, area) => count + area.visible.length, 0);
  const singleArea = groups.length === 1;
  return (
    <section id="projects" className="section-spacing border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-eyebrow">01 / Selected work</p>
          <h2 className="section-title">Across disciplines. One engineering perspective.</h2>
          <p className="section-description">Explore data and business automation, full-stack software, and robotics. A research foundation connects how I frame problems, examine assumptions, and document decisions across these disciplines.</p>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {tabs.map((tab) => <button type="button" key={tab.id} onClick={() => selectArea(tab.id)} aria-pressed={selection === tab.id} className={`rounded-full border px-4 py-2.5 text-xs transition-colors ${selection === tab.id ? 'border-cyan-400 bg-cyan-400 text-slate-950' : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-600 hover:text-white'}`}>{tab.label}</button>)}
        </div>
        <p className="sr-only" aria-live="polite">{visibleCount} projects shown across {groups.length} areas</p>
        <div className={`mt-8 grid gap-6 ${singleArea ? '' : 'lg:grid-cols-3'}`}>
          {groups.map((area) => {
            const style = getAreaStyle(area.id);
            return <section key={area.id} id={`projects-${area.id}`} aria-labelledby={`area-title-${area.id}`} className="flex min-w-0 flex-col">
              <header className={`rounded-2xl border p-5 lg:min-h-[140px] ${style.border} ${style.surface}`}>
                <p className={`font-mono text-[10px] uppercase tracking-widest ${style.text}`}>{area.label}</p>
                <h3 id={`area-title-${area.id}`} className="mt-2 text-lg font-semibold text-white">{area.title}</h3>
                <p className="mt-3 text-xs text-slate-400">{area.available.length} {area.available.length === 1 ? 'case study' : 'case studies'}</p>
              </header>
              {singleArea && area.overview && <AreaOverview overview={area.overview} projects={area.available} />}
              <div className={`mt-4 grid flex-1 gap-5 ${singleArea ? 'md:grid-cols-2 xl:grid-cols-3' : ''}`}>
                {area.visible.map((project, index) => <Reveal key={project.id} delay={index * 70} className="h-full"><ProjectCard project={project} /></Reveal>)}
              </div>
              {selection === 'featured' && <button type="button" onClick={() => selectArea(area.id, true)} className={`mt-4 inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm hover:bg-slate-900 ${style.border} ${style.text}`}>Explore {area.label} ({area.available.length})<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>}
            </section>;
          })}
        </div>
      </div>
    </section>
  );
}
