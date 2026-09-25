"use client";

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  FaAws,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaJava,
  FaMicrosoft,
  FaPause,
  FaPlay,
} from "react-icons/fa6";
import {
  SiAstro,
  SiCloudflare,
  SiDjango,
  SiFigma,
  SiFastapi,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLaravel,
  SiMermaid,
  SiMysql,
  SiNotion,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpring,
  SiTerraform,
} from "react-icons/si";
import { skills } from "../content/db";

const technologyIcons: Record<string, readonly IconType[]> = {
  "HTML+CSS": [SiHtml5, FaCss3Alt],
  JavaScript: [SiJavascript],
  React: [SiReact],
  Astro: [SiAstro],
  Python: [SiPython],
  "Python+FastAPI": [SiPython, SiFastapi],
  Java: [FaJava],
  "Java+Spring": [FaJava, SiSpring],
  "Python+Django": [SiPython, SiDjango],
  PHP: [SiPhp],
  "PHP+Laravel": [SiPhp, SiLaravel],
  Terraform: [SiTerraform],
  Azure: [FaMicrosoft],
  AWS: [FaAws],
  "CI/CD": [SiGithubactions],
  "Cloudflare tunnels and pages": [SiCloudflare],
  "SQL Server": [FaDatabase],
  Oracle: [FaDatabase],
  MySQL: [SiMysql],
  PostgreSQL: [SiPostgresql],
  "PL/SQL": [FaDatabase],
  Jira: [SiJira],
  Mermaid: [SiMermaid],
  Notion: [SiNotion],
  Figma: [SiFigma],
};

const technologyItems = skills.flatMap((skillSet) =>
  skillSet.skills.map((skill) => ({
    id: `${skillSet.tittle}-${skill.name}`,
    label: skill.name,
    icons: technologyIcons[skill.name] ?? [FaCode],
  })),
);

export interface TechnologyCarouselItem {
  id: string;
  label: string;
  icons: readonly IconType[];
}

export interface TechnologyCarouselProps {
  items: readonly TechnologyCarouselItem[];
  ariaLabel?: string;
  durationSeconds?: number;
  className?: string;
}

export function TechnologyCarousel({
  items,
  ariaLabel = "Technologies",
  durationSeconds = 36,
  className,
}: TechnologyCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const shouldAnimate = !isHovered && !isTouching && !isPaused;

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport || !shouldAnimate) {
      return;
    }

    let frameId = 0;
    let previousTime = performance.now();

    const move = (time: number) => {
      const elapsedSeconds = Math.min((time - previousTime) / 1000, 0.1);
      const loopWidth = viewport.scrollWidth / 2;
      previousTime = time;

      if (loopWidth > 0) {
        viewport.scrollLeft +=
          (loopWidth / Math.max(durationSeconds, 1)) * elapsedSeconds;

        if (viewport.scrollLeft >= loopWidth) {
          viewport.scrollLeft -= loopWidth;
        }
      }

      frameId = requestAnimationFrame(move);
    };

    frameId = requestAnimationFrame(move);

    return () => cancelAnimationFrame(frameId);
  }, [durationSeconds, shouldAnimate]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className={["relative min-w-0 max-w-full self-stretch", className]
        .filter(Boolean)
        .join(" ")}
      role="region"
      aria-label={ariaLabel}
      data-motion={shouldAnimate ? "running" : "paused"}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          setIsHovered(true);
        }
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") {
          setIsHovered(false);
        }
      }}>
      <div
        ref={viewportRef}
        className="technology-carousel__viewport w-full min-w-0 max-w-full overflow-x-auto"
        onTouchStart={() => setIsTouching(true)}
        onTouchEnd={() => setIsTouching(false)}
        onTouchCancel={() => setIsTouching(false)}>
        <div className="technology-carousel__track py-4">
          {[0, 1].map((groupIndex) => (
            <ul
              className="technology-carousel__group"
              key={groupIndex}
              aria-hidden={groupIndex === 1}>
              {items.map((item) => (
                <li
                  className="flex w-28 shrink-0 flex-col items-center gap-2 sm:w-32"
                  key={`${groupIndex}-${item.id}`}>
                  <span className="flex min-h-16 w-fit min-w-16 items-center justify-center gap-1 rounded-2xl border border-zinc-200 bg-white/75 px-2 shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/75">
                    {item.icons.map((Icon, iconIndex) => (
                      <Icon
                        className={`shrink-0 text-cyan-600 drop-shadow-sm dark:text-cyan-300 ${item.icons.length > 1 ? "size-7" : "size-8"}`}
                        key={`${item.id}-${iconIndex}`}
                        aria-hidden="true"
                      />
                    ))}
                  </span>
                  <span className="text-center text-sm font-medium text-zinc-700 dark:text-zinc-200">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="absolute right-1 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:focus-visible:outline-cyan-300"
        onClick={() => setIsPaused((paused) => !paused)}
        aria-label="Pause carousel animation"
        aria-pressed={isPaused}>
        {isPaused ? (
          <FaPlay className="size-3.5" aria-hidden="true" />
        ) : (
          <FaPause className="size-3.5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

export function PortfolioTechnologyCarousel() {
  return (
    <TechnologyCarousel
      items={technologyItems}
      ariaLabel="Technologies I use"
    />
  );
}
