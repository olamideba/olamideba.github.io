// TYPESCRIPT INTERFACES
// =====================
// These interfaces define the "shape" of our data.
// Using types helps catch errors (like missing a title) before the app runs.

export type ProjectCategory = 'ai-ml' | 'full-stack';

export interface ProjectLinks {
  github?: string;
  live?: string;        // live demo or deployed site
  video?: string;       // demo video
  devpost?: string;
  certificate?: string;
  doi?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  status?: string;              // small badge, e.g. "Under review · NIJOTECH"
  highlights?: string[];        // notable engineering bullets (AI/ML cards)
  metrics?: {                   // optional headline numbers
    [key: string]: string;
  };
  links?: ProjectLinks;
  privateRepo?: boolean;        // repo exists but is not public
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  platform: string;             // e.g. "Medium"
  date: string;
  readTime: string;
  url: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  journal: string;
  status: 'Published' | 'Under Review' | 'Submitted';
  year: string;
  links?: {
    pdf?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[]; // An array of bullet points
  type: 'Work' | 'Internship' | 'Leadership';
}

export interface SkillCategory {
  category: string;
  items: string[];
}
