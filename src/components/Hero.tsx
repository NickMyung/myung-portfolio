'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { portfolio, projectCategories, getAreaStyle } from '@/lib/portfolio';
import { Reveal } from '@/components/Reveal';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-20 sm:pb-24 lg:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c4b5fd]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#d8b4fe]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal>
          {/* Professional Identity Badge */}
          <div className="inline-flex max-w-full items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-left text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 shrink-0 rounded-full bg-cyan-400 animate-pulse" />
            <span className="min-w-0 leading-relaxed">{projectCategories.map((area) => area.label).join(' · ')}</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
            {portfolio.profile.name}
          </h1>

          {/* Primary Position Headline */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent mb-6">
            {portfolio.profile.headline}
          </p>

          {/* Professional Summary */}
          <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
            {portfolio.profile.professionalSummary}
          </p>

          </Reveal>
          <Reveal delay={80}>
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 font-mono text-xs sm:text-sm">
            <a
              href="#projects"
              className="hero-action flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <span>Explore Selected Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="hero-action rounded-xl border border-slate-600 bg-slate-950/30 px-6 py-3.5 text-slate-200 hover:border-violet-300 hover:text-white">Get in touch</a>
          </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 text-left md:grid-cols-3 md:gap-4" aria-label="Three engineering areas">
            {projectCategories.map((area, index) => {
              const style = getAreaStyle(area.id);
              return <Reveal key={area.id} delay={index * 70 + 120} className="h-full"><a href={`#projects-${area.id}`} className={`hero-area group flex h-full gap-4 rounded-xl border p-4 hover:bg-slate-900/80 md:flex-col md:p-5 ${style.border} ${style.surface}`}>
                <span className={`font-mono text-xs ${style.text}`}>0{index + 1}</span>
                <div><h2 className="text-sm font-semibold leading-snug text-white">{area.title}</h2><p className="mt-2 text-xs leading-relaxed text-slate-400">{area.description}</p><span className={`mt-3 inline-flex items-center gap-2 text-xs ${style.text}`}>Explore projects<ArrowRight className="h-3 w-3" aria-hidden="true" /></span></div>
              </a></Reveal>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
