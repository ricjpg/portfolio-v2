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

  /** Nivel de encabezado más bajo que aparece en el índice (opcional) */
  toc_min_heading_level?: number;

  /** Nivel de encabezado más alto que aparece en el índice (opcional) */
  toc_max_heading_level?: number;
}

/**
 * Entrada del índice de un artículo
 */
export interface TableOfContentsItem {
  /** Id del encabezado en el artículo */
  id: string;
  /** Texto visible del encabezado */
  text: string;
  /** Profundidad del encabezado (1 = h1) */
  level: number;
}

/**
 * Un proyecto en un idioma concreto: su frontmatter, su contenido MDX
 * y el índice de sus encabezados
 */
export interface ProjectTranslation {
  frontmatter: ProjectFrontmatter;
  content: string;
  headings: TableOfContentsItem[];
}
