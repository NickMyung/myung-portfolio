'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Database, BookOpen, Briefcase, Mail, Menu, X, Award, GraduationCap, Github, Linkedin } from 'lucide-react';

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
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Publications', href: '#publications' },
    { name: 'Academic Service', href: '#academic-service' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070a12]/95 backdrop-blur-md border-b border-slate-800 shadow-xl'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Identity */}
          <a
            href="#"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#070a12] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-cyan-400 text-sm">NS</span>
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-100 tracking-tight text-sm sm:text-base flex items-center gap-2">
                <span>Nick Soto Conde</span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">Mechatronics • Data • Robotics</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action: Social Icons & Contact */}
          <div className="hidden sm:flex items-center space-x-3 font-mono text-xs">
            <a
              href="https://github.com/NickMyung"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/nick-soto-conde/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl font-semibold bg-cyan-500 hover:bg-cyan-400 text-black transition-all shadow-md shadow-cyan-500/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 bg-[#0b1021] border-b border-slate-800 space-y-1 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <div className="flex space-x-2">
              <a
                href="https://github.com/NickMyung"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/nick-soto-conde/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl font-bold bg-cyan-500 text-black text-xs"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
