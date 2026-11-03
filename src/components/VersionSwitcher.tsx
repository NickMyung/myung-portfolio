'use client';
import { useEffect,useTransition } from 'react';
import { usePathname,useRouter } from 'next/navigation';
import { comparisonHref,type ComparisonVersion } from '@/lib/comparison-routing';

let refocusVersion: ComparisonVersion | null = null;

export function VersionSwitcher({version}:{version:'v3'|'rsch'|'menu'}) {
 const selected:ComparisonVersion=version==='menu'?'menu':'rsch';
 const router=useRouter(),pathname=usePathname();
 const [pending,startTransition]=useTransition();
 useEffect(()=>{const id=window.location.hash.slice(1);const frame=requestAnimationFrame(()=>{if(id)document.getElementById(id)?.scrollIntoView({block:'start'});else window.scrollTo(0,0);if(refocusVersion===selected){document.querySelector<HTMLInputElement>('input[name="portfolio-version"][value="'+selected+'"]')?.focus({preventScroll:true});refocusVersion=null;}});return()=>cancelAnimationFrame(frame);},[selected,pathname]);
 function change(next:ComparisonVersion){if(next===selected)return;if(document.activeElement?.getAttribute('name')==='portfolio-version')refocusVersion=next;const href=comparisonHref(new URL(location.href),next);startTransition(()=>router.push(href,{scroll:false}));}
 return <div className="flex h-14 items-center justify-center gap-3 border-t border-slate-800/60"><span className="font-mono text-[10px] uppercase tracking-widest text-slate-400" aria-hidden="true">Version</span><fieldset className="version-switch" aria-label="Portfolio version" aria-busy={pending}><span className="version-switch-thumb" style={{transform:selected==='menu'?'translateX(100%)':'translateX(0)'}} aria-hidden="true" />{(['rsch','menu'] as const).map(value=><label key={value} className="relative z-10 cursor-pointer"><input className="peer sr-only" type="radio" name="portfolio-version" value={value} checked={selected===value} onChange={()=>change(value)} /><span className={`flex h-9 items-center justify-center rounded-full px-5 font-mono text-xs font-semibold peer-focus-visible:ring-2 peer-focus-visible:ring-white peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-slate-950 ${selected===value?'text-slate-950':'text-slate-300 hover:text-white'}`}>{value.toUpperCase()}</span></label>)}</fieldset><span role="status" className="sr-only">{pending?'Changing portfolio version':`${selected.toUpperCase()} portfolio selected`}</span></div>;
}
