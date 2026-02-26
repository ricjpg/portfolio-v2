// lib/mdx.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
}

// Ruta al directorio de proyectos en App Router
export const PROJECTS_PATH = path.join(process.cwd(), "app/content/projects");

/**
 * Obtiene todos los slugs de proyectos disponibles
 */
export function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_PATH)) {
    console.warn(`Directory not found: ${PROJECTS_PATH}`);
    return [];
  }

  const files = fs.readdirSync(PROJECTS_PATH);
  return files
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

/**
 * Obtiene un proyecto por su slug
 */
export function getProjectBySlug(slug: string): {
  frontmatter: ProjectFrontmatter;
  content: string;
} | null {
  try {
    const fullPath = path.join(PROJECTS_PATH, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      frontmatter: { ...data, slug } as ProjectFrontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

/**
 * Obtiene todos los proyectos ordenados por fecha
 */
export function getAllProjects(): ProjectFrontmatter[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => {
      const project = getProjectBySlug(slug);
      return project ? project.frontmatter : null;
    })
    .filter((project): project is ProjectFrontmatter => project !== null);

  // Ordena por fecha (más reciente primero)
  return projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Obtiene proyectos filtrados por tag
 */
export function getProjectsByTag(tag: string): ProjectFrontmatter[] {
  const allProjects = getAllProjects();
  return allProjects.filter((project) =>
    project.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  );
}

/**
 * Obtiene todos los tags únicos
 */
export function getAllTags(): string[] {
  const allProjects = getAllProjects();
  const tags = new Set<string>();

  allProjects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

/**
 * Busca proyectos por término
 */
export function searchProjects(query: string): ProjectFrontmatter[] {
  const allProjects = getAllProjects();
  const searchTerm = query.toLowerCase();

  return allProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
  );
}
