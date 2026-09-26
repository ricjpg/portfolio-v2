import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Language } from "../interfaces/interface";
import type { ProjectTranslation } from "../interfaces/projects";

export const PROJECTS_PATH = path.join(process.cwd(), "app/content/projects");

const LANGUAGE_SUFFIXES = {
  en: "-en",
  es: "-es",
} satisfies Record<Language, string>;

const TRANSLATION_SUFFIX = new RegExp(
  `-(${Object.keys(LANGUAGE_SUFFIXES).join("|")})$`,
);

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

  return {
    frontmatter: { ...data, slug } as ProjectTranslation["frontmatter"],
    content,
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
