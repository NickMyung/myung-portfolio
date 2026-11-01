export interface Profile {
  name: string;
  headline: string;
  professionalSummary: string;
  location: string;
  email: string;
  phone: string;
  languages: { language: string; level: string }[];
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
  resumeUrl: string;
  about: {
    professionalBackground: string;
    engineeringApproach: string;
    researchInterests: string;
    careerFocus: string;
  };
}

export interface ExpertiseItem {
  id: string;
  categoryId: string;
  shortTitle: string;
  focus: string;
  title: string;
  description: string;
  competencies: string[];
  technologies: string[];
  overview?: {
    headline: string;
    description: string;
    pillars: { title: string; description: string }[];
  };
}

export interface ProjectBusinessContext {
  organization: string;
  industry: string;
  audience: string;
  context: string;
  teams: string[];
  decisions: string;
  domainGroups?: { title: string; teams: string[] }[];
  deliverables?: { title: string; description: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  preview?: {
    title: string;
    problem: string;
    contribution: string;
    outcome: string;
  };
  problem: string;
  objective: string;
  approach: string;
  architecture: string;
  technologies: string[];
  role: string;
  contributions: string;
  challenges: string;
  results: string;
  evidence: string;
  links: {
    cris?: string;
    github?: string;
    demo?: string;
  };
  status: string;
  period: string;
  featured: boolean;
  priority: number;
  evidenceLabel: string;
  experienceIds: string[];
  publicationIds: string[];
  flow: { label: string; detail: string }[];
  business?: ProjectBusinessContext;
  crossCutting?: { label: string; detail: string }[];
}

export interface AcademicProjectItem {
  id: string;
  organization: string;
  role: string;
  category: string;
  period: string;
  location: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  category: string;
  organization: string;
  client?: string;
  role: string;
  period: string;
  location: string;
  scope: string;
  contributions: string[];
  technologies: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  year: number;
  type: string;
  venue: string;
  abstract: string;
  keywords: string[];
  url: string;
  citationIEEE: string;
  citationAPA: string;
  bibtex: string;
}

export interface AcademicServiceItem {
  id: string;
  organization: string;
  role: string;
  category: string;
  period: string;
  location: string;
  description: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
}

export interface TechnicalSkills {
  programmingLanguages: string[];
  dataEngineering: string[];
  cloudAndInfrastructure: string[];
  softwareDevelopment: string[];
  roboticsAndSimulation: string[];
  researchMethods: string[];
}

export interface PortfolioData {
  profile: Profile;
  expertise: ExpertiseItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  publications: PublicationItem[];
  academicService: AcademicServiceItem[];
  academicProjects: AcademicProjectItem[];
  education: EducationItem[];
  technicalSkills: TechnicalSkills;
}
