'use client';

import dynamic from 'next/dynamic';
import { Component, useEffect, useState, type ReactNode } from 'react';
import { ArrowUpRight, Box, ChevronDown, Loader2 } from 'lucide-react';
import { portfolio, getProject } from '@/lib/portfolio';
import { ResearchPublications } from '@/components/ResearchPublications';

const ExoskeletonWorkspace3D = dynamic(
  () => import('@/components/ExoskeletonWorkspace3D').then((module) => module.ExoskeletonWorkspace3D),
  { ssr: false, loading: () => <p role="status" className="flex items-center gap-3 p-8 text-sm text-slate-400"><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />Loading the interactive model…</p> },
);

class SimulationBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return <div className="rounded-xl border border-slate-800 p-6 text-sm leading-relaxed text-slate-400"><p className="mb-2 font-medium text-white">The 3D model could not be opened.</p><p>The demonstration needs WebGL. You can still explore the model overview, its limitations, and the publication in the research case.</p><a href="/projects/hip-exoskeleton-kinematics" className="mt-4 inline-block text-cyan-300">Read the research case</a></div>;
    return this.props.children;
  }
}

export function ResearchSection() {
  const [modelOpen, setModelOpen] = useState(false);
  const project = getProject('hip-exoskeleton-kinematics');
  useEffect(() => {
    const openFromHash = () => { if (window.location.hash === '#simulator') setModelOpen(true); };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);
  return <section id="research" className="section-spacing border-t border-slate-800 bg-[#0b1021]/30">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="section-eyebrow">04 / Robotics research & development</p><h2 className="section-title">Where mathematical models meet systems.</h2><p className="section-description max-w-2xl">Robotics research connects kinematic modeling, computational tools, and physical prototypes. Explore the publications, methods, and interactive model behind this area of my work.</p>
      {project && <div className="mt-8 grid gap-6 rounded-2xl border border-slate-800 bg-[#070a12] p-6 sm:p-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="flex flex-col justify-center rounded-xl border border-slate-800 bg-grid-pattern p-6"><Box className="mb-5 h-10 w-10 text-cyan-400" aria-hidden="true" /><p className="font-mono text-3xl tracking-tight text-slate-200">θ₁ · θ₂ · θ₃</p><p className="mt-3 text-xs leading-relaxed text-slate-400">Three joint angles.<br />A kinematic workspace to explore.</p></div>
        <div><p className="font-mono text-[10px] uppercase tracking-widest text-cyan-300">Rehabilitation robotics / 2021</p><h3 className="mt-3 text-2xl font-semibold text-white">Hip exoskeleton kinematics</h3><p className="mt-4 text-sm leading-relaxed text-slate-400">{project.summary}</p><p className="mt-4 text-xs leading-relaxed text-slate-400">The browser model is an illustrative companion. Its parameters have not been independently checked against the publication; it does not establish clinical performance.</p><a href={`/projects/${project.id}`} className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-100">Model, contribution & publication<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a></div>
      </div>}
      <div id="simulator" className="mt-5 rounded-2xl border border-slate-800 bg-[#070a12] p-4 sm:p-6">
        <button type="button" onClick={() => setModelOpen(!modelOpen)} aria-expanded={modelOpen} aria-controls="kinematics-model" className="flex w-full items-center justify-between gap-4 rounded-lg p-2 text-left"><span><span className="block text-sm font-medium text-white">{modelOpen ? 'Close the interactive model' : 'Open the interactive model'}</span><span className="mt-1 block text-xs text-slate-400">Joint controls, end-effector position in millimeters, and workspace visualization.</span></span><ChevronDown className={`h-5 w-5 shrink-0 text-cyan-300 transition-transform ${modelOpen ? 'rotate-180' : ''}`} aria-hidden="true" /></button>
        <div id="kinematics-model" hidden={!modelOpen}>{modelOpen && <div className="mt-5"><SimulationBoundary><ExoskeletonWorkspace3D onPaperClick={() => document.getElementById('publications')?.scrollIntoView()} /></SimulationBoundary></div>}</div>
      </div>
      <ResearchPublications compact onOpenSimulator={() => setModelOpen(true)} />
      <div className="mt-8 border-t border-slate-800 pt-8"><h3 className="text-xl font-semibold text-white">Further engineering work</h3><div className="mt-5 grid gap-5 md:grid-cols-2">
        <article className="rounded-xl border border-slate-800 p-5"><p className="font-mono text-[10px] text-cyan-300">TEAM PROJECT / 2019–2022</p><h4 className="mt-3 text-base font-semibold text-white">Grupo Tharsis — exploration rover</h4><p className="mt-3 text-sm leading-relaxed text-slate-400">Mechanical and telemetry subsystem contributions within the UNI rover team.</p><a href="/projects/nasa-rover-tharsis" className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-300">Explore the team project<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a></article>
        {portfolio.academicProjects.map((item) => <article key={item.id} className="rounded-xl border border-slate-800 p-5"><p className="font-mono text-[10px] text-cyan-300">ACADEMIC PROTOTYPE / {item.period}</p><h4 className="mt-3 text-base font-semibold text-white">Robotic hand prosthesis</h4><p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p><p className="mt-4 text-xs text-slate-400">{item.role} · {item.organization}</p></article>)}
      </div></div>
    </div>
  </section>;
}
