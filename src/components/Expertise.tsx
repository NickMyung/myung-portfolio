'use client';

import React from 'react';
import { Database, Layers, Bot, CheckCircle2 } from 'lucide-react';
import portfolioData from '../../portfolio_data.json';

export const Expertise: React.FC = () => {
  const { expertise } = portfolioData;

  const iconMap: Record<string, typeof Database> = {
    'data-engineering': Database,
    'software-engineering': Layers,
    'robotics-biomedical': Bot,
  };

  const colorMap: Record<string, { badge: string; border: string; icon: string }> = {
    'data-engineering': {
      badge: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/60',
      border: 'hover:border-cyan-500/50',
      icon: 'text-cyan-400',
    },
    'software-engineering': {
      badge: 'bg-indigo-950/80 text-indigo-300 border-indigo-800/60',
      border: 'hover:border-indigo-500/50',
      icon: 'text-indigo-400',
    },
    'robotics-biomedical': {
      badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60',
      border: 'hover:border-emerald-500/50',
      icon: 'text-emerald-400',
    },
  };

  return (
    <section id="expertise" className="py-20 bg-[#0b1021]/50 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
            Technical Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            Areas of Core Expertise
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured into three verifiable domains: enterprise cloud data engineering, full-stack application development, and mechatronic robotics research.
          </p>
        </div>

        {/* 3 Main Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {expertise.map((item) => {
            const Icon = iconMap[item.id] || Database;
            const colors = colorMap[item.id] || colorMap['data-engineering'];

            return (
              <div
                key={item.id}
                className={`p-7 rounded-2xl bg-[#0b1021] border border-slate-800 ${colors.border} transition-all duration-300 flex flex-col justify-between shadow-xl`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                    {item.description}
                  </p>

                  {/* Core Competencies List */}
                  <div className="mb-6">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wide block mb-3 font-semibold">
                      Core Competencies
                    </span>
                    <div className="space-y-1.5">
                      {item.competencies.map((comp, cIdx) => (
                        <div key={cIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${colors.icon} mt-0.5 shrink-0`} />
                          <span>{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Verified Technologies Tags */}
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wide block mb-2 font-semibold pt-4 border-t border-slate-800">
                    Demonstrated Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
