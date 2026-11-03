import type { Metadata } from 'next';
import { SiteShell } from '@/menu/components/SiteShell';
import { AcademicService } from '@/menu/components/AcademicService';
import { ResearchSection } from '@/menu/components/ResearchSection';
export const metadata: Metadata = { title: 'Research | Nick Soto Conde', description: 'Scientific contribution, publications and robotics research.' };
export default function Page() { return <SiteShell><AcademicService asPage /><ResearchSection /></SiteShell>; }
