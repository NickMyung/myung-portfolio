'use client';

import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, ChevronDown, ChevronUp, Layers, Cpu, Database, Award, ShieldAlert, ArrowUpRight, X } from 'lucide-react';
import portfolioData from '../../portfolio_data.json';
import { ProjectItem } from '../types';

export const ProjectsShowcase: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Data Engineering', label: 'Data Engineering' },
    { id: 'Software Development', label: 'Software Development' },
    { id: 'Robotics & Biomedical Engineering', label: 'Robotics & Biomedical' },
    { id: 'Robotics & Engineering', label: 'Space & Systems' },
  ];

  const filteredProjects = projects.filter(
    (p) => selectedCategory === 'all' || p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20 bg-[#070a12] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
            Technical Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Detailed case studies documenting real technical problems, architectural approaches, personal contributions, and verifiable engineering outcomes.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0b1021] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Badges: Category & Status */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                    <span className="text-emerald-400">• {project.status}</span>
                    <span>({project.period})</span>
                  </div>
                </div>

                {/* Title & Role */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-indigo-400 mb-4 font-medium">
                  Role: {project.role}
                </p>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {project.summary}
                </p>

                {/* Key Technical Highlights */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2 mb-6 text-xs text-slate-300">
                  <div>
                    <span className="font-mono text-slate-400 font-semibold uppercase text-[10px] block">
                      Problem Addressed:
                    </span>
                    <p className="font-light mt-0.5 line-clamp-2">{project.problem}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800">
                    <span className="font-mono text-cyan-400 font-semibold uppercase text-[10px] block">
                      Verifiable Results:
                    </span>
                    <p className="font-light mt-0.5">{project.results}</p>
                  </div>
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800 mb-6">
                  {project.technologies.slice(0, 5).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-xs font-mono px-2 py-1 rounded-md bg-slate-900/50 text-slate-500">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                {/* Actions: View Case Study Modal & Direct Links */}
                <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                  <button
                    onClick={() => setActiveModalProject(project as ProjectItem)}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-slate-800 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {project.id === 'hip-exoskeleton-kinematics' && (
                    <a
                      href="#simulator"
                      className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-800/80 hover:bg-cyan-900 transition-colors"
                    >
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Launch 3D Simulator</span>
                    </a>
                  )}

                  {project.links?.cris && (
                    <a
                      href={project.links.cris}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 text-slate-400 hover:text-white transition-colors"
                    >
                      <span>CRIS Repository</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Technical Case Study Modal */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="relative w-full max-w-3xl rounded-2xl bg-[#0b1021] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close Case Study"
                className="absolute top-6 right-6 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="pr-10 mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {activeModalProject.category}
                  </span>
                  <span className="text-emerald-400">• {activeModalProject.status}</span>
                  <span className="text-slate-400">({activeModalProject.period})</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs font-mono text-indigo-400 mt-1">
                  Role: {activeModalProject.role}
                </p>
              </div>

              {/* Structured Case Study Sections */}
              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold mb-1">
                    1. Problem &amp; Context
                  </h4>
                  <p className="text-slate-300 leading-relaxed font-light">
                    {activeModalProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold mb-1">
                    2. Objective
                  </h4>
                  <p className="text-slate-300 leading-relaxed font-light">
                    {activeModalProject.objective}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold mb-1">
                    3. Methodology &amp; Engineering Approach
                  </h4>
                  <p className="text-slate-300 leading-relaxed font-light">
                    {activeModalProject.approach}
                  </p>
                </div>

                {activeModalProject.architecture && (
                  <div>
                    <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold mb-1">
                      4. System Architecture &amp; Design
                    </h4>
                    <p className="text-slate-300 leading-relaxed font-light">
                      {activeModalProject.architecture}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold mb-1">
                    5. Personal Contributions &amp; Implementation
                  </h4>
                  <p className="text-slate-300 leading-relaxed font-light">
                    {activeModalProject.contributions}
                  </p>
                </div>

                {activeModalProject.challenges && (
                  <div>
                    <h4 className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold mb-1">
                      6. Technical Challenges Overcome
                    </h4>
                    <p className="text-slate-300 leading-relaxed font-light">
                      {activeModalProject.challenges}
                    </p>
                  </div>
                )}

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold mb-1">
                    7. Verifiable Results &amp; Evidence
                  </h4>
                  <p className="text-slate-300 leading-relaxed font-light mb-2">
                    {activeModalProject.results}
                  </p>
                  <p className="text-xs font-mono text-slate-400">
                    <span className="text-slate-500">Documented Evidence: </span>
                    {activeModalProject.evidence}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">
                    Technologies &amp; Methods Employed
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                {activeModalProject.links?.cris && (
                  <a
                    href={activeModalProject.links.cris}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    <span>View in CRIS Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {activeModalProject.id === 'hip-exoskeleton-kinematics' && (
                  <a
                    href="#simulator"
                    onClick={() => setActiveModalProject(null)}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors"
                  >
                    <Cpu className="w-4 h-4" />
                    <span>Launch 3D WebGL Simulator</span>
                  </a>
                )}

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 ml-auto transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
