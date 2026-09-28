"use client";

import { useRef, type ReactNode } from "react";
import BackToProjects from "./BackToProjects";
import BackToTop from "./BackToTop";
import TableOfContents from "./TableOfContents";
import { useLanguage } from "../lib/LanguageContext";
import type { Language } from "../interfaces/interface";
import type {
  ProjectFrontmatter,
  TableOfContentsItem,
} from "../interfaces/projects";

interface ProjectArticleProps {
  translations: Record<Language, ProjectFrontmatter | null>;
  articles: Record<Language, ReactNode>;
  headings: Record<Language, TableOfContentsItem[]>;
}

export default function ProjectArticle({
  translations,
  articles,
  headings,
}: ProjectArticleProps) {
  const { language } = useLanguage();
  const articleRef = useRef<HTMLElement>(null);
  const frontmatter =
    translations[language] ?? translations.en ?? translations.es;
  const article = articles[language] ?? articles.en ?? articles.es;
  const tableOfContents = headings[language] ?? headings.en ?? headings.es ?? [];

  if (!frontmatter || !article) {
    return null;
  }

  const publishedAt = new Date(frontmatter.date);
  const formattedDate = Number.isNaN(publishedAt.getTime())
    ? null
    : new Intl.DateTimeFormat(language === "es" ? "es-ES" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      }).format(publishedAt);

  const hasTableOfContents = tableOfContents.length > 0;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
      <BackToProjects className="mb-6 lg:mb-8" />

      <div
        className={
          hasTableOfContents
            ? "lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12"
            : "mx-auto max-w-3xl"
        }>
        {hasTableOfContents && (
          <aside className="mb-10 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents
              items={tableOfContents}
              containerRef={articleRef}
            />
          </aside>
        )}

        <div className="min-w-0">
          <header className="mb-10 border-b border-gray-200 pb-8 dark:border-gray-800">
            <h1
              tabIndex={-1}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {frontmatter.title}
            </h1>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
              {frontmatter.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-gray-500 dark:text-gray-400">
              {formattedDate && (
                <time dateTime={frontmatter.date}>{formattedDate}</time>
              )}
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <article ref={articleRef} className="max-w-3xl">
            {article}
          </article>

          <BackToProjects className="mt-12" />
        </div>
      </div>

      <BackToTop />
    </div>
  );
}
