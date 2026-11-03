'use client';

import React, { useState } from 'react';
import { MenuLink } from '@/components/MenuEnvironment';
import { Briefcase, Calendar, Building2, MapPin, ChevronRight } from 'lucide-react';
import portfolioData from '../../portfolio_data.json';
import { portfolio, getCategoryLabel } from '@/lib/portfolio';

export const ExperienceTimeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'data' | 'software' | 'robotics'>('all');
  const { experience } = portfolioData;

  const filtered = experience.filter(
    (exp) => activeFilter === 'all' || exp.category === activeFilter
  );

  return (
    <section id="experience" className="section-spacing bg-[#0b1021]/50 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
            03 / Career progression
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A trajectory across data and business automation, full-stack software, and robotics research, shaped by research methods and scientific collaboration. Explore every role or follow one area to see its progression.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 font-mono text-xs">
            <button
              onClick={() => setActiveFilter('all')}
              aria-pressed={activeFilter === 'all'}
              className={`px-4 py-2 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                activeFilter === 'all'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              All Roles ({experience.length})
            </button>
            <button
              onClick={() => setActiveFilter('data')}
              aria-pressed={activeFilter === 'data'}
              className={`px-4 py-2 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                activeFilter === 'data'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {getCategoryLabel('data')}
            </button>
            <button
              onClick={() => setActiveFilter('software')}
              aria-pressed={activeFilter === 'software'}
              className={`px-4 py-2 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                activeFilter === 'software'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {getCategoryLabel('software')}
            </button>
            <button
              onClick={() => setActiveFilter('robotics')}
              aria-pressed={activeFilter === 'robotics'}
              className={`px-4 py-2 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                activeFilter === 'robotics'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {getCategoryLabel('robotics')}
            </button>
          </div>
        </div>

        {/* Experience Stream */}
        <p className="sr-only" aria-live="polite">{filtered.length} roles shown</p>
        <div className="space-y-6 max-w-4xl mx-auto">
          {filtered.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#0b1021] border border-slate-800 hover:border-slate-700 transition-all shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white flex flex-wrap items-center gap-2">
                    <span>{exp.role}</span>
                    {exp.client && (
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-pink-950 text-pink-300 border border-pink-800">
                        Client: {exp.client}
                      </span>
                    )}
                  </h3>
                  <div className="flex items-center space-x-3 text-xs font-mono text-cyan-400 mt-1">
                    <span className="flex items-center space-x-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.organization}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Technical Scope */}
              <div className="mb-4 text-xs font-mono text-indigo-300 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800/80">
                <span className="text-slate-500">Technical Scope: </span>
                {exp.scope}
              </div>

              {/* Contributions */}
              <div className="space-y-2 mb-5">
                {exp.contributions.slice(0, 2).map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                    <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="font-light">{point}</span>
                  </div>
                ))}
              </div>

              {exp.contributions.length > 2 && <details className="mb-5"><summary className="cursor-pointer rounded text-xs font-medium text-cyan-300">More contributions</summary><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-400">{exp.contributions.slice(2).map((point) => <li key={point}>{point}</li>)}</ul></details>}
              {portfolio.projects.filter((project) => project.experienceIds.includes(exp.id)).map((project) => <MenuLink key={project.id} href={`/projects/${project.id}`} className="mb-5 inline-block rounded text-sm text-cyan-300 hover:text-cyan-100">Related case: {project.title} →</MenuLink>)}

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                {exp.technologies.slice(0, 6).map((stk, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {stk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
