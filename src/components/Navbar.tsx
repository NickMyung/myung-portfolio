'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { portfolio } from '@/lib/portfolio';
import { menuNavigation, navigationGroup } from '@/lib/menu-navigation';
import { MenuLink, useMenuEnvironment } from '@/components/MenuEnvironment';

export function Navbar() {
 const pathname=usePathname(), active=navigationGroup(pathname);
 const [open,setOpen]=useState(false);
 const {comparison}=useMenuEnvironment();
 useEffect(()=>setOpen(false),[pathname]);
 useEffect(()=>{if(!open)return;const escape=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);document.getElementById('navigation-toggle')?.focus();}};document.addEventListener('keydown',escape);return()=>document.removeEventListener('keydown',escape);},[open]);
 const current=(href:string)=>active===href?(pathname===href?'page' as const:'location' as const):undefined;
 return <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-[#070a12]/95 backdrop-blur-md">
 <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex h-16 items-center justify-between gap-4 sm:h-20">
 <MenuLink href="/" aria-label={`${portfolio.profile.name}, home`} className="flex min-w-0 items-center gap-3 rounded-lg"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-500 font-mono text-sm font-bold text-cyan-300">NS</span><span className="min-w-0"><span className="block text-sm font-bold text-slate-100 sm:text-base">{portfolio.profile.name}</span><span className="block truncate font-mono text-[10px] text-slate-400 sm:text-[11px]">{portfolio.profile.headline}</span></span></MenuLink>
 <div className="hidden items-center gap-1 xl:flex">{menuNavigation.map(item=><MenuLink key={item.href} href={item.href} aria-current={current(item.href)} className={`rounded-lg px-3 py-2 font-mono text-xs ${active===item.href?'bg-cyan-950/40 text-cyan-300':'text-slate-400 hover:bg-slate-900 hover:text-white'}`}>{item.label}</MenuLink>)}</div>
 <div className="flex shrink-0 items-center gap-3"><div className="hidden items-center gap-2 md:flex"><a href={portfolio.profile.socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="rounded-lg border border-slate-800 p-2 text-slate-400 hover:text-white"><Github className="h-4 w-4" /></a><a href={portfolio.profile.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="rounded-lg border border-slate-800 p-2 text-slate-400 hover:text-white"><Linkedin className="h-4 w-4" /></a></div><MenuLink href="/contact" aria-current={current('/contact')} className="hidden items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 font-mono text-xs font-semibold text-slate-950 hover:bg-cyan-300 sm:inline-flex"><Mail className="h-3.5 w-3.5" aria-hidden="true" />Contact</MenuLink><button id="navigation-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?'Close navigation':'Open navigation'} onClick={()=>setOpen(!open)} className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-300 xl:hidden">{open?<X className="h-5 w-5" />:<Menu className="h-5 w-5" />}</button></div></div>
 {open&&<div id="mobile-navigation" className="space-y-1 border-t border-slate-800 py-4 xl:hidden">{[...menuNavigation,{href:'/contact',label:'Contact'}].map(item=><MenuLink key={item.href} href={item.href} onClick={()=>setOpen(false)} aria-current={current(item.href)} className={`block rounded-lg px-3 py-3 font-mono text-sm ${active===item.href?'bg-cyan-950/40 text-cyan-300':'text-slate-300 hover:bg-slate-900'}`}>{item.label}</MenuLink>)}</div>}</nav>{comparison}</header>;
}
