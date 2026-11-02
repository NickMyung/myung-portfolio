import { portfolio } from '@/lib/portfolio';
import type { PortfolioVersion } from '@/types';

export const DEFAULT_PORTFOLIO_VERSION: PortfolioVersion = 'rsch';
export type VersionSearchParams = { version?: string | string[] };

export function resolvePortfolioVersion(value?: string | string[]): PortfolioVersion {
  return (Array.isArray(value) ? value[0] : value) === 'v3' ? 'v3' : DEFAULT_PORTFOLIO_VERSION;
}

export function getPresentation(version: PortfolioVersion) {
  return portfolio.presentations[version];
}

export function sectionNumber(version: PortfolioVersion, section: 'experience' | 'expertise' | 'research' | 'about') {
  const base = { experience: 2, expertise: 3, research: 4, about: 5 };
  return String(base[section] + (version === 'rsch' ? 1 : 0)).padStart(2, '0');
}

export function withPortfolioVersion(href: string, version: PortfolioVersion) {
  const [path, hash] = href.split('#');
  const [pathname, query] = path.split('?');
  const params = new URLSearchParams(query);
  params.set('version', version);
  return `${pathname || '/'}?${params.toString()}${hash ? `#${hash}` : ''}`;
}
