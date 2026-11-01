'use client';

import React, { useState, useEffect } from 'react';
import { Cpu, Terminal, Database, BookOpen, Briefcase, Mail, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Simulador 3D', href: '#simulator', icon: Cpu },
    { name: 'Pilares', href: '#pillars', icon: Terminal },
    { name: 'Proyectos', href: '#projects', icon: Database },
    { name: 'Investigación & TPC', href: '#publications', icon: BookOpen },
    { name: 'Experiencia', href: '#experience', icon: Briefcase },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070a12]/90 backdrop-blur-md border-b border-slate-800 shadow-xl'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Identity */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#070a12] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-cyan-400 text-base">NS</span>
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-100 tracking-tight text-sm sm:text-base flex items-center gap-2">
                <span>Nick Soto Conde</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60 hidden sm:inline-block">
                  UNI Mecatrónica
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">Data Engineer & Bio-Robotics</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 font-mono text-xs">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-1.5 px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action: Contact */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="#contact"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-cyan-500 hover:bg-cyan-400 text-black transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contactar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-[#0b1021] border-b border-slate-800 space-y-1 font-mono text-xs">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-cyan-400"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <span>{link.name}</span>
              </a>
            );
          })}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold bg-cyan-500 text-black"
            >
              <Mail className="w-4 h-4" />
              <span>Contactar</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
