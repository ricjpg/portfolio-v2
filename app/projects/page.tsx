import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import { useLanguage } from "../lib/LanguageContext";
import ProjectList from "../components/ProjectCard";
import { Button, Text } from "@radix-ui/themes";
import { HomeIcon } from "@radix-ui/react-icons";

interface ProjectMeta {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
}

// // Metadata estática para SEO
export const metadata: Metadata = {
  title: "Proyectos | Mi Portfolio",
  description:
    "Explora mis proyectos y trabajos destacados en desarrollo web y cloud.",
  openGraph: {
    title: "Proyectos | Mi Portfolio",
    description: "Explora mis proyectos y trabajos destacados",
    type: "website",
  },
};

// Función para obtener todos los proyectos

async function getAllProjects(): Promise<ProjectMeta[]> {
  try {
    const contentDirectory = path.join(process.cwd(), "app/content/projects");

    if (!fs.existsSync(contentDirectory)) {
      return [];
    }

    const filenames = fs.readdirSync(contentDirectory);
    const mdxFiles = filenames.filter((filename) => /\.mdx?$/.test(filename));

    const projects = mdxFiles.map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const fullPath = path.join(contentDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        ...data,
        slug,
      } as ProjectMeta;
    });

    // Ordena por fecha (más reciente primero)
    return projects.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error("Error loading projects:", error);
    return [];
  }
}

// Componente de la página
export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="py-10">
      <div className="flex items-center justify-evenly">
        <Text className="font-extrabold text-3xl lg:text-7xl">Proyectos</Text>
        <Button
          color="crimson"
          variant="outline"
          size={"3"}
          ml={"2"}
          className="max-w-1/2 "
          asChild
        >
          <a href="/">Back</a>
        </Button>
      </div>
      <ProjectList limit={6} />
    </div>
  );
}
