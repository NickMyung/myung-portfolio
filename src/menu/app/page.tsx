import { Hero } from '@/menu/components/Hero';
import { HomeHighlights } from '@/menu/components/HomeHighlights';
import { LegacySectionRedirect } from '@/menu/components/LegacySectionRedirect';
import { SiteShell } from '@/menu/components/SiteShell';
export default function Home() { return <SiteShell><LegacySectionRedirect /><Hero /><HomeHighlights /></SiteShell>; }
