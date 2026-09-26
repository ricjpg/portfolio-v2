// interfaces/project.ts

/**
 * Interfaz para el frontmatter de los proyectos MDX
 */
export interface ProjectFrontmatter {
  /** Título del proyecto */
  title: string;

  /** Descripción breve del proyecto */
  description: string;

  /** Fecha de publicación en formato ISO (YYYY-MM-DD) */
  date: string;

  /** Tags/etiquetas del proyecto */
  tags: string[];

  /** Slug base para la URL, sin sufijo de idioma */
  slug: string;

  /** URL de imagen de portada (opcional) */
  cover?: string;

  /** URL del repositorio (opcional) */
  repository?: string;

  /** URL del demo/proyecto en vivo (opcional) */
  demo?: string;

  /** Autor del proyecto (opcional) */
  author?: string;
}

/**
 * Un proyecto en un idioma concreto: su frontmatter y su contenido MDX
 */
export interface ProjectTranslation {
  frontmatter: ProjectFrontmatter;
  content: string;
}
