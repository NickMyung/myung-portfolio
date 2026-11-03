import type { CSSProperties, ReactNode } from 'react';
import { MenuEnvironment } from '@/menu/components/MenuEnvironment';
import { VersionSwitcher } from '@/components/VersionSwitcher';

export function MenuComparison({children}:{children:ReactNode}) {
 return <MenuEnvironment version="menu" comparison={<VersionSwitcher version="menu" />}><div style={{'--menu-nav-offset':'3.5rem'} as CSSProperties}>{children}</div></MenuEnvironment>;
}
