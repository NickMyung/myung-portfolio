'use client';

import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PillarsSection } from '@/components/PillarsSection';
import { ProjectsShowcase } from '@/components/ProjectsShowcase';
import { ScientificPublications } from '@/components/ScientificPublications';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ContactFooter } from '@/components/ContactFooter';
import { Cpu, BookOpen, Loader2 } from 'lucide-react';

// Dynamic import with ssr: false ensures Three.js runs exclusively in the browser
const ExoskeletonWorkspace3D = dynamic(
  () =>
    import('@/components/ExoskeletonWorkspace3D').then(
      (mod) => mod.ExoskeletonWorkspace3D
    ),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[460px] sm:h-[540px] rounded-2xl bg-[#0b1021] border border-cyan-500/20 flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
        <span className="font-mono text-xs text-cyan-300">
          Cargando Entorno 3D WebGL (Three.js)...
        </span>
      </div>
    ),
  }
);

export default function Home() {
  const scrollToPublications = () => {
    const el = document.getElementById('publications');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* 3D Interactive Kinematics & Workspace Simulator Section */}
        <section id="simulator" className="py-16 sm:py-24 bg-[#070a12] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-mono text-cyan-300 mb-3">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive Research Showcase</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Simulador Cinemático 3D de Exoesqueleto de Cadera
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl font-light">
                  Implementación interactiva del modelo cinemático directo bajo convención Denavit-Hartenberg (D-H) y espacio de trabajo publicado en el artículo científico <em>CMAAE 2021</em>.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="#publications"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-mono transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Ver Especificación en Papers</span>
                </a>
              </div>
            </div>

            {/* 3D WebGL / Three.js Component */}
            <ExoskeletonWorkspace3D onPaperClick={scrollToPublications} />
          </div>
        </section>

        {/* The 6 Pillars */}
        <PillarsSection />

        {/* Featured Projects Showcase */}
        <ProjectsShowcase />

        {/* Scientific Publications & TPC Reviewer Status */}
        <ScientificPublications />

        {/* Experience & Academic Timeline */}
        <ExperienceTimeline />
      </main>

      {/* Contact & Footer */}
      <ContactFooter />
    </div>
  );
}
