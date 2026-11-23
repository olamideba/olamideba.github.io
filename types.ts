export interface ProjectLinks {
  github?: string;
  live?: string;
  video?: string;
  writeup?: string;
  doi?: string;
}

export interface ProjectSection {
  heading: string;
  paragraphs: string[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  context: string;
  stack: string;
  links?: ProjectLinks;
  sections?: ProjectSection[]; // present => gets a page at /projects/<id>/
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  platform: string;
  date: string;
  url: string;
}
