export interface ProjectFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  cover?: string;
  repository?: string;
  demo?: string;
  author?: string;
  toc_min_heading_level?: number;
  toc_max_heading_level?: number;
}

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}
export interface ProjectTranslation {
  frontmatter: ProjectFrontmatter;
  content: string;
  headings: TableOfContentsItem[];
}
