import type { ReactNode } from 'react';
import { Navbar } from '@/menu/components/Navbar';
import { SiteFooter } from '@/menu/components/SiteFooter';
export function SiteShell({children}:{children:ReactNode}) {return <><Navbar /><main id="main-content" data-portfolio-layout="menu">{children}</main><SiteFooter /></>;}
