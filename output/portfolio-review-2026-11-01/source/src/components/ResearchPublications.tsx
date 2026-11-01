'use client';

import React, { useState } from 'react';
import { BookOpen, Copy, Check, ExternalLink, FileText, Quote } from 'lucide-react';
import portfolioData from '../../portfolio_data.json';

export const ResearchPublications: React.FC<{ compact?: boolean; onOpenSimulator?: () => void }> = ({ compact = false, onOpenSimulator }) => {
  const { publications } = portfolioData;
  const [copiedFormat, setCopiedFormat] = useState<{ id: string; format: string } | null>(null);

  const handleCopy = (id: string, format: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat({ id, format });
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  return (
    <section id="publications" className={compact ? 'pt-12' : 'py-20 bg-[#070a12] border-t border-slate-900'}>
      <div className={compact ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        {/* Section Header */}
        <div className={compact ? 'max-w-3xl mb-6' : 'text-center max-w-3xl mx-auto mb-16'}>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-mono text-cyan-300 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Peer-Reviewed Literature</span>
          </div>
          <h2 className={compact ? 'text-2xl font-semibold text-white mb-4' : 'text-3xl sm:text-4xl font-extrabold text-white mb-4'}>
            Research &amp; Publications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Peer-reviewed scientific conference papers and schematic reviews in wearable robotics, lower-limb exoskeletons, and kinematic workspace modeling.
          </p>
        </div>

        {/* Publications Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0b1021] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Header: Type & Year */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-semibold">
                    {pub.type} • {pub.year}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Peer-Reviewed</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  {pub.title}
                </h3>

                {/* Venue */}
                <p className="text-xs font-mono text-indigo-300 mb-4 font-medium">
                  {pub.venue}
                </p>

                {/* Authors in Official Order */}
                <div className="text-xs text-slate-400 mb-4 font-mono bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                  <span className="text-slate-500 block text-[10px] uppercase tracking-wider mb-1">
                    Authors (Official Order):
                  </span>
                  <span className="text-slate-300">{pub.authors.join(', ')}</span>
                </div>

                {/* Abstract */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {pub.abstract}
                </p>

                {/* Keywords */}
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

              {/* Footer Actions: CRIS Link & Citation Copy Options */}
              <div className="pt-6 border-t border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    <span>View in CRIS Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {pub.id === 'cmaae-2021' && (
                    <a
                      href="#simulator"
                      onClick={onOpenSimulator}
                      className="text-xs font-mono text-indigo-400 hover:text-indigo-300"
                    >
                      Interactive 3D Demo ↑
                    </a>
                  )}
                </div>

                {/* Citation Actions */}
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs pt-2">
                  <span className="text-slate-500 text-[11px] flex items-center space-x-1 mr-1">
                    <Quote className="w-3 h-3" />
                    <span>Cite:</span>
                  </span>

                  <button
                    onClick={() => handleCopy(pub.id, 'IEEE', pub.citationIEEE)}
                    className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    {copiedFormat?.id === pub.id && copiedFormat.format === 'IEEE' ? (
                      <span className="text-emerald-400 font-bold">✓ IEEE Copied</span>
                    ) : (
                      'IEEE'
                    )}
                  </button>

                  <button
                    onClick={() => handleCopy(pub.id, 'APA', pub.citationAPA)}
                    className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    {copiedFormat?.id === pub.id && copiedFormat.format === 'APA' ? (
                      <span className="text-emerald-400 font-bold">✓ APA Copied</span>
                    ) : (
                      'APA'
                    )}
                  </button>

                  <button
                    onClick={() => handleCopy(pub.id, 'BibTeX', pub.bibtex)}
                    className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    {copiedFormat?.id === pub.id && copiedFormat.format === 'BibTeX' ? (
                      <span className="text-emerald-400 font-bold">✓ BibTeX Copied</span>
                    ) : (
                      'BibTeX'
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
