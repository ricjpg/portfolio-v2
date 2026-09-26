import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Language } from "../interfaces/interface";
import type {
  ProjectTranslation,
  TableOfContentsItem,
} from "../interfaces/projects";

export const PROJECTS_PATH = path.join(process.cwd(), "app/content/projects");

const LANGUAGE_SUFFIXES = {
  en: "-en",
  es: "-es",
} satisfies Record<Language, string>;

const TRANSLATION_SUFFIX = new RegExp(
  `-(${Object.keys(LANGUAGE_SUFFIXES).join("|")})$`,
);

const HEADING_PATTERN = /^(#{1,6})\s+(.+?)\s*#*$/;
const FENCE_PATTERN = /^\s*(?:```|~~~)/;

const DEFAULT_MIN_HEADING_LEVEL = 1;
const DEFAULT_MAX_HEADING_LEVEL = 6;

/**
 * Identificador de un encabezado. Es la única fuente de verdad para el
 * `id` que se renderiza en el artículo y para el enlace del índice.
 */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
}

/**
 * Encabezados del contenido MDX en orden de aparición, ignorando los
 * que viven dentro de bloques de código.
 */
export function extractHeadings(
  content: string,
  minLevel = DEFAULT_MIN_HEADING_LEVEL,
  maxLevel = DEFAULT_MAX_HEADING_LEVEL,
): TableOfContentsItem[] {
  const headings: TableOfContentsItem[] = [];
  let insideFence = false;

  for (const line of content.split("\n")) {
    if (FENCE_PATTERN.test(line)) {
      insideFence = !insideFence;
      continue;
    }

    if (insideFence) continue;

    const match = HEADING_PATTERN.exec(line);
    if (!match) continue;

    const level = match[1].length;
    if (level < minLevel || level > maxLevel) continue;

    const text = match[2]
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[*_`]/g, "")
      .trim();

    if (!text) continue;

    headings.push({ id: slugifyHeading(text), text, level });
  }

  return headings;
}

function readTranslation(
  slug: string,
  language: Language,
): ProjectTranslation | null {
  const fullPath = path.join(
    PROJECTS_PATH,
    `${slug}${LANGUAGE_SUFFIXES[language]}.mdx`,
  );

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  const frontmatter = { ...data, slug } as ProjectTranslation["frontmatter"];

  return {
    frontmatter,
    content,
    headings: extractHeadings(
      content,
      frontmatter.toc_min_heading_level ?? DEFAULT_MIN_HEADING_LEVEL,
      frontmatter.toc_max_heading_level ?? DEFAULT_MAX_HEADING_LEVEL,
    ),
  };
}

/**
 * Slugs de proyectos disponibles, sin el sufijo de idioma
 * (por ejemplo "poke-q" para "poke-q-en.mdx" y "poke-q-es.mdx").
 */
export function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_PATH)) {
    console.warn(`Directory not found: ${PROJECTS_PATH}`);
    return [];
  }

  const slugs = fs
    .readdirSync(PROJECTS_PATH)
    .filter((filename) => /\.mdx?$/.test(filename))
    .map((filename) =>
      filename.replace(/\.mdx?$/, "").replace(TRANSLATION_SUFFIX, ""),
    );

  return [...new Set(slugs)].sort();
}

/**
 * Contenido de un proyecto en cada idioma. Las traducciones que faltan
 * se devuelven como null para que la interfaz pueda aplicar un fallback.
 */
export function getProjectTranslations(
  slug: string,
): Record<Language, ProjectTranslation | null> {
  return {
    en: readTranslation(slug, "en"),
    es: readTranslation(slug, "es"),
  };
}
