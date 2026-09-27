"use client";

import { useEffect, useState, type RefObject } from "react";
import { useLanguage } from "../lib/LanguageContext";
import type { TableOfContentsItem } from "../interfaces/projects";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  containerRef: RefObject<HTMLElement | null>;
}

const ACTIVE_OFFSET = 120;

export default function TableOfContents({
  items,
  containerRef,
}: TableOfContentsProps) {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const headings = items
      .map((item) =>
        container.querySelector<HTMLElement>(`[id="${CSS.escape(item.id)}"]`),
      )
      .filter((heading): heading is HTMLElement => heading !== null);

    if (headings.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      let current = headings[0].id;

      for (const heading of headings) {
        if (heading.getBoundingClientRect().top - ACTIVE_OFFSET > 0) break;
        current = heading.id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) current = headings[headings.length - 1].id;

      setActiveId(current);
    };

    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items, containerRef]);

  if (items.length === 0) return null;

  const baseLevel = Math.min(...items.map((item) => item.level));

  return (
    <nav aria-label={t.projectPage.onThisPage}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
        {t.projectPage.onThisPage}
      </p>
      <ol className="mt-3 space-y-0.5 border-l border-gray-200 dark:border-gray-800">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                style={{
                  paddingLeft: `${0.75 + (item.level - baseLevel) * 0.75}rem`,
                }}
                className={`-ml-px block border-l-2 py-1 pr-2 text-sm leading-snug transition-colors ${
                  isActive
                    ? "border-blue-600 font-medium text-black dark:border-blue-400 dark:text-white"
                    : "border-transparent text-gray-600 hover:border-gray-300 hover:text-black dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-white"
                }`}>
                {item.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
