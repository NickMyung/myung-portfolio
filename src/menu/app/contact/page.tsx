import type { Metadata } from 'next';
import { SiteShell } from '@/menu/components/SiteShell';
import { ContactFooter } from '@/menu/components/ContactFooter';
export const metadata: Metadata = { title: 'Contact | Nick Soto Conde', description: 'Collaboration across data, software, robotics and research.' };
export default function Page() { return <SiteShell><ContactFooter asPage /></SiteShell>; }
