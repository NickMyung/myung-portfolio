import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { ContactFooter } from '@/components/ContactFooter';
export const metadata: Metadata = { title: 'Contact | Nick Soto Conde', description: 'Collaboration across data, software, robotics and research.' };
export default function Page() { return <SiteShell><ContactFooter asPage /></SiteShell>; }
