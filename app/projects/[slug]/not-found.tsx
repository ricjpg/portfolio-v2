// app/projects/[slug]/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Proyecto no encontrado</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        El proyecto que buscas no existe o ha sido eliminado.
      </p>
      <Link
        href="/projects"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Ver todos los proyectos
      </Link>
    </div>
  );
}
