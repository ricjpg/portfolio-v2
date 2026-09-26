// app/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import { isValidElement, type ComponentProps, type ReactNode } from "react";
import rehypePrettyCode from "rehype-pretty-code";
import ProjectArticle from "../../components/ProjectArticle";
import {
  getProjectSlugs,
  getProjectTranslations,
  slugifyHeading,
} from "../../lib/mdx";
import type { Language } from "../../interfaces/interface";
import type { ProjectTranslation } from "../../interfaces/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

type CodeProps = ComponentProps<"code"> & {
  "data-language"?: string;
};

const mdxRemoteOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: {
            light: "github-light",
            dark: "github-dark",
          },
          keepBackground: true,
          bypassInlineCode: true,
        },
      ],
    ],
  },
};

/** Texto plano de los hijos de un encabezado, para derivar su id */
const headingText = (children: ReactNode): string => {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(headingText).join("");
  }

  if (isValidElement(children)) {
    return headingText(
      (children.props as { children?: ReactNode }).children as ReactNode,
    );
  }

  return "";
};

type HeadingProps = ComponentProps<"h2">;

/** El id comparte fuente de verdad con el índice: lib/mdx slugifyHeading */
const headingId = (children: ReactNode) => slugifyHeading(headingText(children));

// Componentes personalizados para MDX
const components: MDXComponents = {
  h1: ({ children, ...props }: ComponentProps<"h1">) => (
    <h1
      id={headingId(children)}
      tabIndex={-1}
      className="mt-8 mb-4 text-3xl font-bold scroll-mt-24"
      {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: HeadingProps) => (
    <h2
      id={headingId(children)}
      tabIndex={-1}
      className="mt-8 mb-3 text-2xl font-semibold scroll-mt-24"
      {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentProps<"h3">) => (
    <h3
      id={headingId(children)}
      tabIndex={-1}
      className="mt-6 mb-2 text-xl font-semibold scroll-mt-24"
      {...props}>
      {children}
    </h3>
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="mb-4 leading-relaxed" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="list-disc list-inside mb-4 ml-4" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="list-decimal list-inside mb-4 ml-4" {...props} />
  ),
  li: (props: ComponentProps<"li">) => <li className="mb-2" {...props} />,
  code: ({ className, ...props }: CodeProps) => (
    <code
      className={
        props["data-language"]
          ? className
          : [
              "bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm text-gray-900 dark:text-gray-100",
              className,
            ]
              .filter(Boolean)
              .join(" ")
      }
      {...props}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4"
      {...props}
    />
  ),
  a: (props: ComponentProps<"a">) => (
    <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic my-4"
      {...props}
    />
  ),
  hr: (props: ComponentProps<"hr">) => (
    <hr className="my-10 border-gray-200 dark:border-gray-800" {...props} />
  ),
};

const DEFAULT_LANGUAGE: Language = "en";

/** Renderiza un idioma en el servidor para que el cliente solo elija cuál mostrar */
const renderArticle = (translation: ProjectTranslation | null) =>
  translation ? (
    <MDXRemote
      source={translation.content}
      components={components}
      options={mdxRemoteOptions}
    />
  ) : null;

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const translations = getProjectTranslations(slug);
  const project = translations[DEFAULT_LANGUAGE] ?? translations.es;

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  const { frontmatter } = project;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.tags.join(", "),
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
      publishedTime: frontmatter.date,
      tags: frontmatter.tags,
    },
  };
}

// Generar rutas estáticas en build time
export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

// Componente de la página
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const translations = getProjectTranslations(slug);

  if (!translations.en && !translations.es) {
    notFound();
  }

  return (
    <ProjectArticle
      translations={{
        en: translations.en?.frontmatter ?? null,
        es: translations.es?.frontmatter ?? null,
      }}
      articles={{
        en: renderArticle(translations.en),
        es: renderArticle(translations.es),
      }}
      headings={{
        en: translations.en?.headings ?? [],
        es: translations.es?.headings ?? [],
      }}
    />
  );
}
