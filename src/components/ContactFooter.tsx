'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Copy, Check, ExternalLink, Linkedin, Github, Send } from 'lucide-react';
import portfolioData from '../../portfolio_data.json';

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { profile } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="bg-[#050810] border-t border-slate-800 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-slate-800/80">
          {/* Left Column: Intro & Headline */}
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-mono mb-4">
              <span>Contact &amp; Collaboration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-light">
              Available for technical inquiries, professional opportunities in <strong>Data Engineering</strong>, <strong>Full-Stack Software Engineering</strong>, and collaborative <strong>Robotics &amp; Biomedical Research</strong>.
            </p>

            <div className="flex flex-wrap gap-4 font-mono text-xs sm:text-sm">
              <a
                href={profile.socialLinks.email}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold bg-cyan-500 hover:bg-cyan-400 text-black transition-all shadow-lg shadow-cyan-500/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center space-x-2 px-5 py-3.5 rounded-xl font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Social Network Links */}
            <div className="flex items-center space-x-4 mt-8 font-mono text-xs">
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github.com/NickMyung</span>
              </a>

              <span className="text-slate-700">•</span>

              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center space-x-2 text-slate-400 hover:text-sky-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>linkedin.com/in/nick-soto-conde</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-5 rounded-2xl bg-[#0b1021] border border-slate-800">
              <div className="text-slate-400 mb-1 flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="uppercase text-[10px] tracking-wide">Direct Email</span>
              </div>
              <a
                href={profile.socialLinks.email}
                className="text-sm font-bold text-white hover:text-cyan-400 break-all transition-colors"
              >
                {profile.email}
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b1021] border border-slate-800">
              <div className="text-slate-400 mb-1 flex items-center space-x-2">
                <Phone className="w-4 h-4 text-pink-400" />
                <span className="uppercase text-[10px] tracking-wide">Telephone / WhatsApp</span>
              </div>
              <p className="text-sm font-bold text-white">{profile.phone}</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b1021] border border-slate-800">
              <div className="text-slate-400 mb-1 flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="uppercase text-[10px] tracking-wide">Location</span>
              </div>
              <p className="text-sm font-bold text-white">Jesús María, Lima, Peru</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Available for Remote / Hybrid</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b1021] border border-slate-800">
              <div className="text-slate-400 mb-1 flex items-center space-x-2">
                <Globe className="w-4 h-4 text-indigo-400" />
                <span className="uppercase text-[10px] tracking-wide">Languages</span>
              </div>
              <div className="space-y-1 text-slate-300">
                {profile.languages.map((l, idx) => (
                  <p key={idx} className="text-[11px]">
                    • <strong>{l.language}:</strong> {l.level}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {profile.name}. Bachelor in Mechatronics Engineering (UNI).
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-cyan-400">ICCRE Japan TPC Reviewer (2024–2026)</span>
            <span>•</span>
            <span className="text-indigo-400">UTEC Big Data</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
