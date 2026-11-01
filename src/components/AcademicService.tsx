'use client';

import React from 'react';
import { ShieldCheck, Award, Users, Orbit, Building2, MapPin, Calendar } from 'lucide-react';
import portfolioData from '../../portfolio_data.json';

export const AcademicService: React.FC = () => {
  const { academicService } = portfolioData;

  const categoryIcons: Record<string, typeof ShieldCheck> = {
    'Conference Service': ShieldCheck,
    'Student & Professional Organizations': Users,
    'Research Leadership & Competition': Orbit,
    'Academic Engineering Project': Award,
  };

  return (
    <section id="academic-service" className="py-20 bg-[#0b1021]/50 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-800 text-xs font-mono text-indigo-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Academic Community Contribution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Academic Service &amp; Leadership
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Peer review service for international conferences, leadership within IEEE student societies, and competitive university engineering teams.
          </p>
        </div>

        {/* Highlight Banner: ICCRE Japan TPC Member */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-slate-950 border border-indigo-500/40 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-900/60 border border-indigo-500/50 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-indigo-300" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-indigo-900 text-indigo-300 border border-indigo-700 font-semibold">
                    ICCRE • Japan
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                    2024 • 2025 • 2026
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Technical Program Committee (TPC) Member &amp; Scientific Reviewer
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  International Conference on Control, Robotics and Automation Engineering
                </p>
                <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed max-w-2xl font-light">
                  Appointed to the Technical Program Committee to perform peer reviews of scientific submissions in robot kinematics, control algorithms, autonomous systems, and bio-robotic applications across three consecutive editions in Japan.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-col space-y-2 w-full md:w-auto font-mono text-xs">
              <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between gap-3">
                <span className="text-slate-400">Official Function:</span>
                <span className="text-cyan-400 font-bold">TPC Member &amp; Reviewer</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between gap-3">
                <span className="text-slate-400">Venue:</span>
                <span className="text-indigo-300 font-bold">Japan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {academicService
            .filter((item) => item.id !== 'iccre-japan-tpc')
            .map((item) => {
              const Icon = categoryIcons[item.category] || ShieldCheck;
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-[#0b1021] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {item.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{item.period}</span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1 leading-snug">
                      {item.role}
                    </h4>

                    <p className="text-xs font-mono text-cyan-400 mb-3 flex items-center gap-1.5">
                      <Building2 className="w-3 h-3" />
                      <span>{item.organization}</span>
                    </p>

                    <p className="text-slate-300 text-xs leading-relaxed font-light mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
