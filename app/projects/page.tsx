import type { Metadata } from "next";
import ProjectExplorer from "../components/ProjectExplorer";

export const metadata: Metadata = {
  title: "Projects | Ricardo Guardiola",
  description:
    "Explore my projects: web applications, cloud infrastructure and data systems, with search and technology filters.",
  openGraph: {
    title: "Projects | Ricardo Guardiola",
    description: "Explore my projects and the technologies behind them.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col px-4 pt-16 pb-10 sm:px-6 sm:pt-10">
      <ProjectExplorer />
    </main>
  );
}
