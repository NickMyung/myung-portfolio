'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

/** Content stays visible without JavaScript, observer support, or motion permission. */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const element = useRef<HTMLDivElement>(null);
  const [state, setState] = useState('idle');

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setState('visible');
        observer.disconnect();
      }
    }, { threshold: 0, rootMargin: '0px 0px -32px 0px' });
    if (element.current) observer.observe(element.current);
    const handlePreference = () => {
      if (preference.matches) {
        observer.disconnect();
        setState('static');
      }
    };
    preference.addEventListener('change', handlePreference);
    return () => { observer.disconnect(); preference.removeEventListener('change', handlePreference); };
  }, []);

  return <div ref={element} className={`reveal ${className}`} data-reveal={state} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}>{children}</div>;
}
