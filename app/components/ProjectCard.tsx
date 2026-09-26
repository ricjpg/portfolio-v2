"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge, Card, Text } from "@radix-ui/themes";
import type { Language, ProjectProps } from "../interfaces/interface";
import { useLanguage } from "../lib/LanguageContext";

export type ProjectCardSize = "sm" | "md" | "lg";
export type ProjectCardColumns = 1 | 2 | 3 | 4;

export interface ProjectCardListProps {
  limit?: number;
  className?: string;
  columns?: ProjectCardColumns;
  size?: ProjectCardSize;
  items?: ProjectProps[];
  showMoreLink?: boolean;
}

interface ProjectCardViewProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  language: Language;
  size: ProjectCardSize;
  date?: string;
  stack?: string[];
  action?: string;
}

const FALLBACK_IMAGE = "/img/others.png";

const columnClasses: Record<ProjectCardColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const cardSizeClasses = {
  sm: {
    cardSize: "1",
    content: "px-0 pt-3 pb-3",
    titleWrapper: "min-h-10",
    title: "line-clamp-2 text-base",
    description: "mt-1.5 min-h-10 text-xs leading-4",
    footer: "gap-1.5 pt-2.5",
    badgeSize: "1",
    date: "left-3 top-3 px-2.5 py-0.5 text-[11px]",
    icon: "h-8 w-8",
  },
  md: {
    cardSize: "3",
    content: "px-0 pt-3.5 pb-3.5",
    titleWrapper: "min-h-11",
    title: "line-clamp-2 text-lg",
    description: "mt-1.5 min-h-12 text-sm leading-5",
    footer: "gap-1.5 pt-3",
    badgeSize: "1",
    date: "left-4 top-4 px-3 py-1 text-xs",
    icon: "h-9 w-9",
  },
  lg: {
    cardSize: "4",
    content: "px-0 pt-4 pb-4",
    titleWrapper: "min-h-12",
    title: "line-clamp-2 text-xl",
    description: "mt-2 min-h-14 text-sm leading-6",
    footer: "gap-2 pt-3.5",
    badgeSize: "2",
    date: "left-5 top-5 px-3.5 py-1.5 text-sm",
    icon: "h-10 w-10",
  },
} as const;

function formatProjectDate(date: string, language: Language): string | null {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return null;

  return new Intl.DateTimeFormat(language === "es" ? "es-ES" : "en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsedDate);
}

function getProjectHref(project: ProjectProps): string {
  if (project.href) return project.href;
  return `/projects/${project.slug.replace(/^\/+/, "")}`;
}

function ProjectCardView({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  language,
  size,
  date,
  stack,
  action,
}: ProjectCardViewProps) {
  const [currentImageSrc, setCurrentImageSrc] = useState(imageSrc);
  const styles = cardSizeClasses[size];
  const formattedDate = date ? formatProjectDate(date, language) : null;
  const visibleStack = stack?.slice(0, 3) ?? [];
  const remainingStack = stack ? stack.length - visibleStack.length : 0;

  return (
    <Card
      asChild
      size={styles.cardSize}
      variant="surface"
      className="group h-full w-full p-0 [--card-padding:0px] transition-transform duration-300 hover:-translate-y-1">
      <Link href={href} className="flex h-full flex-col" aria-label={title}>
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={currentImageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => {
              if (currentImageSrc !== FALLBACK_IMAGE) {
                setCurrentImageSrc(FALLBACK_IMAGE);
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

          {formattedDate && (
            <time
              dateTime={date}
              className={`absolute ${styles.date} rounded-full bg-slate-950/70 font-medium text-white backdrop-blur-sm`}>
              {formattedDate}
            </time>
          )}

          <span
            className={`absolute bottom-4 right-4 inline-flex ${styles.icon} items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}>
            <ArrowTopRightIcon aria-hidden />
          </span>
        </div>

        <div className={`flex flex-1 flex-col ${styles.content}`}>
          <div className={styles.titleWrapper}>
            <h3 className={`${styles.title} font-bold leading-tight`}>
              {title}
            </h3>
          </div>

          <Text
            color="gray"
            className={`block w-full ${styles.description} line-clamp-2`}>
            {description}
          </Text>

          <div
            className={`mt-auto flex min-h-8 flex-wrap items-center ${styles.footer}`}>
            {visibleStack.map((tool) => (
              <Badge
                key={tool}
                color="indigo"
                variant="soft"
                size={styles.badgeSize}
                radius="full">
                {tool}
              </Badge>
            ))}

            {remainingStack > 0 && (
              <Badge
                color="gray"
                variant="soft"
                size={styles.badgeSize}
                radius="full">
                +{remainingStack}
              </Badge>
            )}

            {action && (
              <Text
                color="indigo"
                className="inline-flex items-center gap-1 text-sm font-semibold">
                {action}
                <ArrowRightIcon aria-hidden />
              </Text>
            )}
          </div>
        </div>
      </Link>
    </Card>
  );
}

const ProjectCardList: React.FC<ProjectCardListProps> = ({
  limit = 0,
  className,
  columns = 2,
  size = "md",
  items,
  showMoreLink = true,
}) => {
  const { language, t } = useLanguage();
  const sortedItems = [...(items ?? t.projects)].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const limitedItems = limit > 0 ? sortedItems.slice(0, limit) : sortedItems;

  return (
    <div
      className={`grid w-full items-stretch gap-6 ${columnClasses[columns]} ${
        className ?? "lg:w-7/8"
      }`}>
      {limitedItems.map((item) => (
        <ProjectCardView
          key={item.slug || item.title}
          title={item.title}
          description={item.description}
          href={getProjectHref(item)}
          imageSrc={item.img ? `/img/${item.img}` : FALLBACK_IMAGE}
          imageAlt={item.title}
          language={language}
          size={size}
          date={item.date}
          stack={item.stack}
        />
      ))}

      {showMoreLink && (
        <ProjectCardView
          title={t.hero.moreProjectsTitle}
          description={t.hero.moreProjectsContent}
          href="/projects"
          imageSrc={FALLBACK_IMAGE}
          imageAlt={t.hero.moreProjectsTitle}
          language={language}
          size={size}
          action={t.hero.viewAllProjects}
        />
      )}
    </div>
  );
};

export default ProjectCardList;
