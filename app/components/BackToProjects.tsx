"use client";

import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";

interface BackToProjectsProps {
  className?: string;
}

export default function BackToProjects({ className = "" }: BackToProjectsProps) {
  const { t } = useLanguage();

  return (
    <Link
      href="/projects"
      className={`group inline-flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        aria-hidden="true"
        className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
      {t.projectPage.backToProjects}
    </Link>
  );
}
