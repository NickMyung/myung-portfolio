import { portfolio } from '@/lib/portfolio';

export function getPersonalProject(id: string) {
  return portfolio.personalProjects.find((project) => project.id === id);
}

export function personalProjectHref(id: string, version?: 'v3' | 'rsch') {
  return `/personal-projects/${id}${version ? `?version=${version}` : ''}`;
}

export function personalProjectsReturnHref(version?: 'v3' | 'rsch') {
  return `/${version ? `?version=${version}` : ''}#personal-projects`;
}
