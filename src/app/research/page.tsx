import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { AcademicService } from '@/components/AcademicService';
import { ResearchSection } from '@/components/ResearchSection';
export const metadata: Metadata = { title: 'Research | Nick Soto Conde', description: 'Scientific contribution, publications and robotics research.' };
export default function Page() { return <SiteShell><AcademicService asPage /><ResearchSection /></SiteShell>; }
