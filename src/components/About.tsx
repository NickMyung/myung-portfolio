'use client';

import React from 'react';
import { User, Cpu, Compass, Target, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#070a12] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
            Profile Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            About My Professional Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging foundational mechatronics engineering with production data platforms, full-stack software development, and peer-reviewed robotics research.
          </p>
        </div>

        {/* 4 Structured Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 1. Professional Background */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0b1021] border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800 flex items-center justify-center">
                <User className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Professional Background</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed font-light mb-4">
              Graduated with a Bachelor of Science in Mechatronics Engineering from the National University of Engineering (UNI) in Peru, complemented by a Specialization in Big Data from UTEC. My professional trajectory has centered on data engineering within the financial sector (Santander Consumer Bank via IDM/SES), cross-platform software engineering, and mechatronic systems.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">• B.Sc. Mechatronics (UNI)</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">• Big Data (UTEC)</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">• Banking Data Platforms</span>
            </div>
          </div>

          {/* 2. Engineering Approach */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0b1021] border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800 flex items-center justify-center">
                <Compass className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Engineering Approach</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed font-light mb-4">
              I approach complex engineering problems by integrating mathematical formulations, cloud architectures, and disciplined software patterns. My background in mechatronics enables me to reason about physical systems, while my software and data engineering experience ensures that pipelines and applications remain maintainable, testable, and robust.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">• First-Principles Modeling</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">• Distributed Architecture</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">• Testable &amp; Clean Code</span>
            </div>
          </div>

          {/* 3. Research Interests */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0b1021] border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Research Interests</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed font-light mb-4">
              My scientific research centers on rehabilitation robotics, kinematic analysis of multi-DoF joint mechanisms (Denavit–Hartenberg convention), 3D workspace simulation, and assistive mechatronic devices. I also serve the international academic community as a Technical Program Committee (TPC) peer reviewer for international robotics conferences.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">• 3-DoF Hip Exoskeletons</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">• Denavit–Hartenberg Kinematics</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">• TPC Peer Review</span>
            </div>
          </div>

          {/* 4. Career Focus */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0b1021] border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-950/80 border border-pink-800 flex items-center justify-center">
                <Target className="w-5 h-5 text-pink-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Career Focus</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed font-light mb-4">
              Committed to architecting reliable, scalable data platforms in AWS and GCP, developing robust full-stack applications with TypeScript and Python, and collaborating on multidisciplinary engineering projects where physical systems, data intelligence, and reliable software converge.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">• Cloud Data Engineering</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">• Full-Stack Systems</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">• Multidisciplinary R&amp;D</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
