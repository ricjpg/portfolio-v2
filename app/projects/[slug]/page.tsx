// app/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "mdx/types";
import { Link } from "@radix-ui/themes";

// Tipos para el frontmatter
interface Frontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Componentes personalizados para MDX
const components: MDXComponents = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold mb-6 mt-8" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl font-semibold mb-4 mt-6" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-semibold mb-3 mt-4" {...props} />
  ),
  p: (props: any) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => (
    <ul className="list-disc list-inside mb-4 ml-4" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside mb-4 ml-4" {...props} />
  ),
  li: (props: any) => <li className="mb-2" {...props} />,
  code: (props: any) => (
    <code
      className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4"
      {...props}
    />
  ),
  a: (props: any) => (
    <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic my-4"
      {...props}
    />
  ),
};

// Función para obtener el contenido del proyecto
async function getProjectContent(slug: string): Promise<{
  frontmatter: Frontmatter;
  content: string;
} | null> {
  try {
    const contentDirectory = path.join(process.cwd(), "app/content/projects");
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      frontmatter: { ...data, slug } as Frontmatter,
      content,
    };
  } catch (error) {
    console.error("Error reading project:", error);
    return null;
  }
}

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: ProjectPageProps) {
  // ✅ CORRECCIÓN: Await params antes de acceder a sus propiedades
  const { slug } = await params;
  const project = await getProjectContent(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    keywords: project.frontmatter.tags.join(", "),
    openGraph: {
      title: project.frontmatter.title,
      description: project.frontmatter.description,
      type: "article",
      publishedTime: project.frontmatter.date,
      tags: project.frontmatter.tags,
    },
  };
}

// Generar rutas estáticas en build time
export async function generateStaticParams() {
  try {
    const contentDirectory = path.join(process.cwd(), "app/content/projects");

    if (!fs.existsSync(contentDirectory)) {
      return [];
    }

    const filenames = fs.readdirSync(contentDirectory);
    const mdxFiles = filenames.filter((filename) => /\.mdx?$/.test(filename));

    return mdxFiles.map((filename) => ({
      slug: filename.replace(/\.mdx?$/, ""),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Componente de la página
export default async function ProjectPage({ params }: ProjectPageProps) {
  // ✅ CORRECCIÓN: Await params antes de acceder a sus propiedades
  const { slug } = await params;
  const project = await getProjectContent(slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/projects"
        className="group mb-8 inline-flex items-center text-sm font-medium text-gray-700 hover:text-black hover:scale-110 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back to Projects
      </Link>
      {/* Header con metadata */}
      <header className="mb-8">
        <h1 className="text-5xl font-bold mb-4">{frontmatter.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
          {frontmatter.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
          <time dateTime={frontmatter.date}>
            {new Date(frontmatter.date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <div className="flex gap-2 flex-wrap">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Contenido MDX */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={content} components={components} />
      </article>
      <Link
        href="/projects"
        className="group mb-8 inline-flex items-center text-sm font-medium text-gray-700 hover:text-black hover:scale-110 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back to Projects
      </Link>
    </div>
  );
}
