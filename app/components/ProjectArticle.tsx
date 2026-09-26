"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";
import type { Language } from "../interfaces/interface";
import type { ProjectFrontmatter } from "../interfaces/projects";

interface ProjectArticleProps {
  translations: Record<Language, ProjectFrontmatter | null>;
  articles: Record<Language, ReactNode>;
}

function BackToProjects() {
  const { t } = useLanguage();

  return (
    <Link
      href="/projects"
      className="group mb-8 inline-flex items-center text-sm font-medium text-gray-700 hover:text-black hover:scale-110 transition-all">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
      {t.projectsPage.backToProjects}
    </Link>
  );
}

export default function ProjectArticle({
  translations,
  articles,
}: ProjectArticleProps) {
  const { language } = useLanguage();
  const frontmatter =
    translations[language] ?? translations.en ?? translations.es;
  const article = articles[language] ?? articles.en ?? articles.es;

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

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <BackToProjects />

      <header className="mb-8">
        <h1 className="text-5xl font-bold mb-4">{frontmatter.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
          {frontmatter.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
          {formattedDate && (
            <time dateTime={frontmatter.date}>{formattedDate}</time>
          )}
          <div className="flex gap-2 flex-wrap">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        {article}
      </article>

      <BackToProjects />
    </div>
  );
}
