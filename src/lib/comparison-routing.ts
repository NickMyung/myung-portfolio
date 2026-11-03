export type ComparisonVersion = 'rsch' | 'menu';
const sections: Record<string,string> = {projects:'/work','projects-data':'/work','projects-software':'/work','projects-robotics':'/work',expertise:'/work','academic-service':'/research',research:'/research',publications:'/research',simulator:'/research','personal-projects':'/personal',experience:'/about',about:'/about',education:'/about',contact:'/contact'};
const defaults: Record<string,string> = {'/work':'projects','/research':'academic-service','/personal':'personal-projects','/about':'about','/contact':'contact'};
export function comparisonHref(current:URL,next:ComparisonVersion){
 const url=new URL(current.href);
 if(next==='menu'&&url.pathname==='/')url.pathname=sections[url.hash.slice(1)]||'/';
 if(next==='rsch'&&defaults[url.pathname]){if(!url.hash)url.hash=defaults[url.pathname];url.pathname='/';}
 url.searchParams.set('version',next);
 return `${url.pathname}${url.search}${url.hash}`;
}
