import type { Metadata } from 'next';
import { SiteShell } from '@/menu/components/SiteShell';
import { PersonalProjects } from '@/menu/components/PersonalProjects';
export const metadata: Metadata = { title: 'Personal projects | Nick Soto Conde', description: 'Independent explorations through data, research and software.' };
export default function Page() { return <SiteShell><PersonalProjects asPage /></SiteShell>; }
