'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { legacySectionRoutes } from '@/menu/lib/menu-navigation';
import { useMenuEnvironment } from '@/menu/components/MenuEnvironment';
export function LegacySectionRedirect(){const router=useRouter();const {version}=useMenuEnvironment();useEffect(()=>{function redirect(){const destination=legacySectionRoutes[location.hash.slice(1)];if(!destination)return;const url=new URL(destination,location.origin);if(version)url.searchParams.set('version',version);router.replace(`${url.pathname}${url.search}${url.hash}`);}redirect();addEventListener('hashchange',redirect);return()=>removeEventListener('hashchange',redirect);},[router,version]);return null;}
