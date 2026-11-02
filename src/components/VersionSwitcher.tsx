'use client';

import { useEffect, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import type { PortfolioVersion } from '@/types';

export function VersionSwitcher({ version }: { version: PortfolioVersion }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const frame = window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }));
    return () => window.cancelAnimationFrame(frame);
  }, [version]);

  function changeVersion(next: PortfolioVersion) {
    if (next === version) return;
    const url = new URL(window.location.href);
    url.searchParams.set('version', next);
    startTransition(() => router.push(`${url.pathname}${url.search}${url.hash}`, { scroll: false }));
  }

  return <div className="flex h-14 items-center justify-center gap-3 border-t border-slate-800/60">
    <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400" aria-hidden="true">Version</span>
    <fieldset className="version-switch" aria-label="Portfolio version" aria-busy={pending}>
      <span className="version-switch-thumb" style={{ transform: version === 'rsch' ? 'translateX(100%)' : 'translateX(0)' }} aria-hidden="true" />
      {(['v3', 'rsch'] as const).map((value) => <label key={value} className="relative z-10 cursor-pointer">
        <input className="peer sr-only" type="radio" name="portfolio-version" value={value} checked={version === value} onChange={() => changeVersion(value)} />
        <span className={`flex h-9 items-center justify-center rounded-full px-5 font-mono text-xs font-semibold transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-white peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-slate-950 ${version === value ? 'text-slate-950' : 'text-slate-300 hover:text-white'}`}>{value.toUpperCase()}</span>
      </label>)}
    </fieldset>
    <span role="status" className="sr-only">{pending ? 'Changing portfolio version' : `${version.toUpperCase()} portfolio selected`}</span>
  </div>;
}
