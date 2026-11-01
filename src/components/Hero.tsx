import React from 'react';
import { ArrowDown, Cpu, Database, Award, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Ingeniería Mecatrónica & Sistemas Ciber-Biológicos</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Software, Datos & <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Robótica en Bioingeniería
            </span>
          </h1>

          {/* Subtitle / Value proposition */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
            Soy <strong className="text-white font-semibold">Nick Soto Conde</strong>, Bachiller en Ingeniería Mecatrónica por la <strong className="text-cyan-400 font-semibold">Universidad Nacional de Ingeniería (UNI)</strong> con especialización en Big Data en <strong className="text-indigo-300 font-semibold">UTEC</strong>. Desarrollo soluciones escalables en la nube, pipelines de datos bancarios masivos, cinemática de exoesqueletos de rehabilitación e investigación científica internacional.
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#simulator"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl font-mono text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-black transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
            >
              <Cpu className="w-4 h-4" />
              <span>Probar Simulador 3D</span>
            </a>

            <a
              href="#publications"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all hover:border-slate-500"
            >
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Papers & TPC Reviewer</span>
            </a>

            <a
              href="#projects"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-all"
            >
              <Database className="w-4 h-4 text-indigo-400" />
              <span>Casos de Estudio</span>
            </a>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-400 mb-1">UNI + UTEC</div>
              <p className="text-xs text-slate-400 font-mono">Ing. Mecatrónica & Big Data</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-indigo-400 mb-1">2 Papers</div>
              <p className="text-xs text-slate-400 font-mono">CMAAE & RCAE Indexados</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400 mb-1">TPC Reviewer</div>
              <p className="text-xs text-slate-400 font-mono">ICCRE Japón (2024-2026)</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-pink-400 mb-1">AWS & Spark</div>
              <p className="text-xs text-slate-400 font-mono">Core Santander Consumer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
