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

  /** Slug para la URL (debe coincidir con el nombre del archivo) */
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
 * Interfaz para el proyecto completo con contenido
 */
export interface Project {
  /** Metadata del proyecto */
  frontmatter: ProjectFrontmatter;

  /** Contenido MDX en formato string */
  content: string;
}

/**
 * Props para el componente de página de proyecto individual
 */
export interface ProjectPageProps {
  params: {
    slug: string;
  };
}

/**
 * Props para el componente de tarjeta de proyecto
 */
export interface ProjectCardProps {
  project: ProjectFrontmatter;
  className?: string;
}
