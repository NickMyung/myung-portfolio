'use client';

import React from 'react';
import { ArrowDown, Cpu, Database, Award, ExternalLink, FileText, Github, Linkedin, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Professional Identity Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>National University of Engineering (UNI) • UTEC Big Data</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
            Nick Soto Conde
          </h1>

          {/* Primary Position Headline */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent mb-6">
            Mechatronics Engineer | Data &amp; Software Engineering | Robotics Research
          </p>

          {/* Professional Summary */}
          <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
            I am a Mechatronics Engineer with professional experience in data engineering and software development, complemented by research experience in robotics and biomedical engineering. My work spans distributed data processing, cloud-based systems, application development, and robotic system modeling. I am interested in building reliable, scalable, and technically grounded solutions that connect engineering, software, and data.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14 font-mono text-xs sm:text-sm">
            <a
              href="#projects"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold bg-cyan-500 hover:bg-cyan-400 text-black transition-all shadow-lg shadow-cyan-500/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download CV</span>
            </a>

            <a
              href="https://github.com/NickMyung"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 px-4 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nick-soto-conde/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 px-4 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Grounded Technical Pillars Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-wide block mb-1">
                Data Platforms
              </span>
              <p className="text-sm font-semibold text-white">Data Engineering</p>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Apache Spark, AWS EMR/Glue, DataHub, Distributed ETLs
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <span className="font-mono text-xs text-indigo-400 uppercase tracking-wide block mb-1">
                Software Engineering
              </span>
              <p className="text-sm font-semibold text-white">Full-Stack &amp; APIs</p>
              <p className="text-xs text-slate-400 font-mono mt-1">
                React, React Native, TypeScript, GraphQL, Docker, Cloud
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-wide block mb-1">
                Research &amp; Systems
              </span>
              <p className="text-sm font-semibold text-white">Robotics &amp; Kinematics</p>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Denavit–Hartenberg, Exoskeletons, TPC Reviewer ICCRE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
