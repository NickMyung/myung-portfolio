import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { About } from '@/components/About';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
export const metadata: Metadata = { title: 'About & experience | Nick Soto Conde', description: 'Professional experience, education and a research-informed mechatronics background.' };
export default function Page() { return <SiteShell><About asPage /><ExperienceTimeline /></SiteShell>; }
