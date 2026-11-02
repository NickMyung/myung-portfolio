import data from '../../portfolio_data.json';
import type { PortfolioData } from '@/types';

export const portfolio: PortfolioData = data;

export const projectCategories = portfolio.expertise.map((area) => ({
  id: area.categoryId,
  value: area.categoryId,
  label: area.shortTitle,
  title: area.title,
  description: area.focus,
}));

const areaStyles: Record<string, { text: string; border: string; surface: string }> = {
  data: { text: 'text-cyan-300', border: 'border-cyan-900/70', surface: 'bg-cyan-950/20' },
  software: { text: 'text-violet-300', border: 'border-violet-900/70', surface: 'bg-violet-950/20' },
  robotics: { text: 'text-emerald-300', border: 'border-emerald-900/70', surface: 'bg-emerald-950/20' },
};

export function getAreaStyle(category: string) {
  return areaStyles[category] ?? areaStyles.data;
}

export const orderedProjects = [...portfolio.projects].sort((a, b) => a.priority - b.priority);

export function getProjectsForArea(category: string) {
  return orderedProjects.filter((project) => project.category === category);
}

export function getProject(id: string) {
  return portfolio.projects.find((project) => project.id === id);
}

export function getCategoryLabel(category: string) {
  return projectCategories.find((item) => item.id === category)?.label ?? category;
}
