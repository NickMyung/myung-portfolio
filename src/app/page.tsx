import { Hero } from '@/components/Hero';
import { HomeHighlights } from '@/components/HomeHighlights';
import { LegacySectionRedirect } from '@/components/LegacySectionRedirect';
import { SiteShell } from '@/components/SiteShell';
export default function Home() { return <SiteShell><LegacySectionRedirect /><Hero /><HomeHighlights /></SiteShell>; }
