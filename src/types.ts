export interface Publication {
  id: string;
  title: string;
  conference: string;
  authors: string[];
  year: number;
  crisUrl: string;
  abstract: string;
  keywords: string[];
  bibtex: string;
}

export interface ExperienceItem {
  company: string;
  client?: string;
  role: string;
  period: string;
  stack: string[];
  achievements: string[];
}

export interface Pillar {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
}
