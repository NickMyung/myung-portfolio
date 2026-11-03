import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { ProjectsShowcase } from '@/components/ProjectsShowcase';
import { Expertise } from '@/components/Expertise';
export const metadata: Metadata = { title: 'Work | Nick Soto Conde', description: 'Professional case studies across data, software and robotics.' };
export default function Page() { return <SiteShell><ProjectsShowcase asPage /><Expertise /></SiteShell>; }
