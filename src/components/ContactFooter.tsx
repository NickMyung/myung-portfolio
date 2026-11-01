'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Copy, Check, Download, ExternalLink, Linkedin, Github } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'nicksc1911@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="bg-[#050810] border-t border-slate-800 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-slate-800/80">
          {/* Left Column: Intro & Headline */}
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-mono mb-4">
              <span>Contacto & Colaboración</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              ¿Listo para construir el futuro de los datos, el software y la robótica?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-light">
              Estoy disponible para proyectos de alto impacto, roles como <strong>Staff / Senior Data Engineer</strong>, <strong>Tech Lead Full Stack</strong>, o iniciativas de <strong>I+D en Robótica y Bioingeniería</strong> a nivel nacional e internacional.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl font-mono text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-black transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Escríbeme un Correo</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center space-x-2 px-5 py-3.5 rounded-xl font-mono text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copied ? '¡Correo Copiado!' : 'Copiar Correo'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-5 rounded-2xl bg-[#0b1021] border border-slate-800">
              <div className="text-slate-400 mb-1 flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="uppercase text-[10px] tracking-wide">Correo Electrónico</span>
              </div>
              <a href={`mailto:${email}`} className="text-sm font-bold text-white hover:text-cyan-400 break-all transition-colors">
                {email}
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b1021] border border-slate-800">
              <div className="text-slate-400 mb-1 flex items-center space-x-2">
                <Phone className="w-4 h-4 text-pink-400" />
                <span className="uppercase text-[10px] tracking-wide">Teléfono / WhatsApp</span>
              </div>
              <p className="text-sm font-bold text-white">+51 942 002 064</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b1021] border border-slate-800">
              <div className="text-slate-400 mb-1 flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="uppercase text-[10px] tracking-wide">Ubicación</span>
              </div>
              <p className="text-sm font-bold text-white">Jesús María, Lima, Perú</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Disponible Remoto / Híbrido</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b1021] border border-slate-800">
              <div className="text-slate-400 mb-1 flex items-center space-x-2">
                <Globe className="w-4 h-4 text-indigo-400" />
                <span className="uppercase text-[10px] tracking-wide">Idiomas</span>
              </div>
              <p className="text-[11px] text-slate-200">
                • <strong>Español:</strong> Nativo<br />
                • <strong>Inglés:</strong> Avanzado (Profesional)<br />
                • <strong>Coreano:</strong> Básico
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Nick Soto Conde. Bachiller en Ingeniería Mecatrónica (UNI).
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-cyan-400">ICCRE Japón TPC (2024-2026)</span>
            <span>•</span>
            <span className="text-indigo-400">UTEC Big Data</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
