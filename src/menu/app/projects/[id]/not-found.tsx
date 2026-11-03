import { MenuLink } from '@/menu/components/MenuEnvironment';
export default function ProjectNotFound() {
  return <main id="main-content" className="mx-auto max-w-3xl px-6 py-32"><h1 className="text-3xl font-semibold text-white">Project not found</h1><p className="mt-4 text-slate-400">This project is not part of the published portfolio.</p><MenuLink href="/work#projects" className="mt-6 inline-block text-cyan-300">Return to projects</MenuLink></main>;
}
