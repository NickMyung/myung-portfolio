'use client';

import React from 'react';
import { GraduationCap, Award, BookCheck, MapPin, CheckCircle2 } from 'lucide-react';
import portfolioData from '../../portfolio_data.json';

export const EducationSection: React.FC = () => {
  const { education, technicalSkills } = portfolioData;

  const skillCategories = [
    { label: 'Programming Languages', skills: technicalSkills.programmingLanguages },
    { label: 'Data Engineering', skills: technicalSkills.dataEngineering },
    { label: 'Cloud & Infrastructure', skills: technicalSkills.cloudAndInfrastructure },
    { label: 'Software Development', skills: technicalSkills.softwareDevelopment },
    { label: 'Robotics & Simulation', skills: technicalSkills.roboticsAndSimulation },
    { label: 'Research & Academic Methods', skills: technicalSkills.researchMethods },
  ];

  return (
    <section id="education" className="py-20 bg-[#070a12] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
            Academic Background &amp; Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            Education &amp; Technical Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal university engineering degree, specialized post-graduate training, and functional categorization of technical proficiencies.
          </p>
        </div>

        {/* Formal Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#0b1021] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                  <span className="text-cyan-400 font-bold uppercase tracking-wider">
                    {edu.period}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {edu.degree}
                </h3>

                <p className="text-xs font-mono text-indigo-300 mb-4 font-semibold">
                  {edu.institution}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {edu.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center space-x-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Academic Credential</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Skills Categorization (No Arbitrary Percentages) */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Functional Skill Distribution
            </h3>
            <p className="text-xs font-mono text-slate-400">
              Categorized by real engineering function and evidenced across industry and academic projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/90"
              >
                <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wide font-semibold mb-3 pb-2 border-b border-slate-800">
                  {cat.label}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0b1021] text-slate-300 border border-slate-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
