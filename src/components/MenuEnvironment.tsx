'use client';
import Link from 'next/link';
import { createContext, useContext, type ComponentProps, type ReactNode } from 'react';
const MenuContext=createContext<{comparison?:ReactNode;version?:'menu'}>({});
export function MenuEnvironment({children,comparison,version}:{children:ReactNode;comparison?:ReactNode;version?:'menu'}) { return <MenuContext.Provider value={{comparison,version}}>{children}</MenuContext.Provider>; }
export function useMenuEnvironment(){const environment=useContext(MenuContext);return {...environment,href:(href:string)=>{if(!environment.version||!href.startsWith('/'))return href;const url=new URL(href,'https://portfolio.local');url.searchParams.set('version',environment.version);return `${url.pathname}${url.search}${url.hash}`;}};}
export function MenuLink({href,...props}:Omit<ComponentProps<typeof Link>,'href'>&{href:string}) {const environment=useMenuEnvironment();return <Link {...props} href={environment.href(href)} />;}
