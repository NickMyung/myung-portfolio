import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { ProjectItem } from '@/types';

export function ProjectLinks({ project }: { project: ProjectItem }) {
  const links = [
    { href: project.links.cris, label: 'Publication record' },
    { href: project.links.github, label: 'Source code' },
    { href: project.links.demo, label: 'Live demo' },
  ].filter((link): link is { href: string; label: string } => Boolean(link.href));

  return <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
    {links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-100">{link.label}<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>)}
    {project.id === 'hip-exoskeleton-kinematics' && <a href="/#simulator" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-100">Explore the interactive model<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>}
  </div>;
}
