'use client';

import React, { useState } from 'react';
import { BookOpen, Award, Copy, Check, ExternalLink, ShieldCheck, FileText, Globe } from 'lucide-react';

export const ScientificPublications: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const publications = [
    {
      id: 'cmaae-2021',
      title: 'Kinematics Analysis of a 3DoF Hip Exoskeleton and Workspace Simulation',
      conference: 'CMAAE 2021 (International Conference on Mechanical, Automotive and Aerospace Engineering)',
      authors: 'Deyby Huamanchahua, Nick Soto Conde, Jean Carlos Vasquez Frias, Diego Lopez Meza, Ángel E. Alvarez-Rodríguez',
      year: 2021,
      crisUrl: 'https://cris.utec.edu.pe/es/publications/kinematics-analysis-of-a-3dof-hip-exoskeleton-and-workspace-simul/',
      abstract:
        'Focuses on the direct kinematic analysis of a 3-Degrees-of-Freedom (3-DoF) hip exoskeleton designed to assist human walking. Utilizes the Denavit-Hartenberg (D-H) convention alongside Euler angles for orientation modeling. Incorporates open-source computational tools (Jupyter/Python) and Wolfram software for numerical workspace simulation and visual validation, establishing the mechanical and dynamic groundwork for lower-limb assistive devices.',
      keywords: ['Hip Exoskeleton', 'Kinematics Analysis', 'Denavit-Hartenberg', 'Workspace Simulation', 'Rehabilitation Robotics'],
      bibtex: `@inproceedings{sotoconde2021kinematics,
  title={Kinematics Analysis of a 3DoF Hip Exoskeleton and Workspace Simulation},
  author={Huamanchahua, Deyby and Soto Conde, Nick and Vasquez Frias, Jean Carlos and Lopez Meza, Diego and Alvarez-Rodr{\\'\\i}guez, {\\'A}ngel E.},
  booktitle={Proceedings of CMAAE 2021},
  year={2021}
}`,
    },
    {
      id: 'rcae-2021',
      title: 'Mechatronic Exoskeletons for Hip Rehabilitation: A Schematic Review',
      conference: 'RCAE 2021 (International Conference on Robotics, Control and Automation Engineering)',
      authors: 'Deyby Huamanchahua, Jean Carlos Vasquez-Frias, Nick Soto-Conde, Diego Lopez-Meza, Angel E. Alvarez-Rodriguez',
      year: 2021,
      crisUrl: 'https://cris.continental.edu.pe/es/publications/mechatronic-exoskeletons-for-hip-rehabilitation-a-schematic-revie/',
      abstract:
        'A comprehensive schematic review of mechatronic architectures, degrees of freedom, actuator typologies (DC, pneumatic, series elastic), and control strategies for hip and lower-limb rehabilitation exoskeletons, evaluating mitigation of human-robot kinematic misalignments in clinical recovery protocols.',
      keywords: ['Mechatronic Exoskeletons', 'Hip Rehabilitation', 'Schematic Review', 'Actuator Systems', 'Assistive Devices'],
      bibtex: `@inproceedings{sotoconde2021mechatronic,
  title={Mechatronic Exoskeletons for Hip Rehabilitation: A Schematic Review},
  author={Huamanchahua, Deyby and Vasquez-Frias, Jean Carlos and Soto-Conde, Nick and Lopez-Meza, Diego and Alvarez-Rodriguez, Angel E.},
  booktitle={Proceedings of RCAE 2021},
  year={2021}
}`,
    },
  ];

  const handleCopyBibtex = (id: string, bibtex: string) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="publications" className="py-20 bg-[#070a12] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-xs font-mono text-cyan-300 mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academia & Comunidad Científica Internacional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Investigación Científica & Servicio TPC
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Producción científica indexada en robótica biomecánica y contribución continua a la revisión técnica de papers en conferencias internacionales en Asia.
          </p>
        </div>

        {/* TPC Highlight Banner (ICCRE Japón) */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-slate-950 border border-indigo-500/40 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-900/60 border border-indigo-500/50 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-indigo-300" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-indigo-900 text-indigo-300 border border-indigo-700 font-semibold">
                    ICCRE • Japón
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                    2024 • 2025 • 2026
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Miembro del Comité Técnico de Revisión (TPC / Scientific Reviewer)
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  International Conference on Control, Robotics and Automation Engineering
                </p>
                <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed max-w-2xl font-light">
                  Designado como evaluador técnico por pares de artículos científicos internacionales en robótica avanzada, cinemática de manipuladores, algoritmos de control y bioingeniería para tres ediciones consecutivas en Japón.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-col space-y-2 w-full md:w-auto font-mono text-xs">
              <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between gap-3">
                <span className="text-slate-400">Rol:</span>
                <span className="text-cyan-400 font-bold">Technical Program Committee</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between gap-3">
                <span className="text-slate-400">Sede:</span>
                <span className="text-indigo-300 font-bold">Japón</span>
              </div>
            </div>
          </div>
        </div>

        {/* Publications Cards Grid */}
        <div className="space-y-6">
          <h3 className="text-lg font-mono text-cyan-400 font-semibold flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <span>Artículos Publicados en Conferencias Internacionales</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {publications.map((pub) => (
              <div
                key={pub.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#0b1021] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-semibold">
                      {pub.conference.split(' ')[0]} {pub.year}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Peer-Reviewed Paper</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {pub.title}
                  </h4>

                  <p className="text-xs font-mono text-indigo-300 mb-3 font-medium">
                    {pub.conference}
                  </p>

                  <div className="text-xs text-slate-400 mb-4 font-mono">
                    <span className="text-slate-500">Autores: </span>
                    {pub.authors}
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {pub.abstract}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {pub.keywords.map((kw, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800 font-mono text-xs">
                  <a
                    href={pub.crisUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    <span>Ver en Repositorio CRIS</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-colors"
                  >
                    {copiedId === pub.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">¡BibTeX Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copiar BibTeX</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
