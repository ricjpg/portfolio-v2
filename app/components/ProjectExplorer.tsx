"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button, Card, Text, TextField } from "@radix-ui/themes";
import {
  ArrowLeftIcon,
  Cross2Icon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import ProjectList from "./ProjectCard";
import { useLanguage } from "../lib/LanguageContext";

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export default function ProjectExplorer() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = t.projects.flatMap((project) => project.stack ?? []);
    return [...new Set(tags)].sort((a, b) => a.localeCompare(b));
  }, [t.projects]);

  const filteredProjects = useMemo(() => {
    const term = normalize(query.trim());

    return t.projects.filter((project) => {
      const searchable = [
        project.title,
        project.description,
        ...(project.stack ?? []),
      ].join(" ");

      const matchesQuery = term.length === 0 || normalize(searchable).includes(term);
      const matchesTags = selectedTags.every((tag) =>
        project.stack?.includes(tag),
      );

      return matchesQuery && matchesTags;
    });
  }, [t.projects, query, selectedTags]);

  const hasFilters = query.trim().length > 0 || selectedTags.length > 0;
  const resultsLabel =
    filteredProjects.length === 1
      ? t.projectsPage.resultsOne
      : t.projectsPage.resultsMany.replace(
          "{count}",
          String(filteredProjects.length),
        );

  const toggleTag = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((selected) => selected !== tag)
        : [...current, tag],
    );
  };

  const clearFilters = () => {
    setQuery("");
    setSelectedTags([]);
  };

  return (
    <div className="flex w-full flex-col gap-8">
      <header className="flex flex-col items-start gap-4">
        <Button
          asChild
          size="2"
          variant="ghost"
          color="gray"
          className="-ml-3">
          <Link href="/">
            <ArrowLeftIcon />
            {t.projectsPage.back}
          </Link>
        </Button>

        <div className="flex flex-col gap-2">
          <h1 className="font-funnel text-4xl font-extrabold lg:text-6xl">
            {t.projectsPage.title}
          </h1>
          <Text as="p" size="3" color="gray" className="max-w-2xl">
            {t.projectsPage.subtitle}
          </Text>
        </div>
      </header>

      <Card variant="surface" size="3" className="w-full">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Text as="label" htmlFor="project-search" size="2" weight="medium">
              {t.projectsPage.searchLabel}
            </Text>
            <TextField.Root
              id="project-search"
              type="search"
              size="3"
              className="w-full"
              value={query}
              placeholder={t.projectsPage.searchPlaceholder}
              onChange={(event) => setQuery(event.target.value)}>
              <TextField.Slot side="left">
                <MagnifyingGlassIcon />
              </TextField.Slot>
            </TextField.Root>
          </div>

          <div className="flex flex-col gap-3">
            <Text size="2" weight="medium" color="gray">
              {t.projectsPage.filterLabel}
            </Text>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label={t.projectsPage.filterLabel}>
              {allTags.map((tag) => {
                const isSelected = selectedTags.includes(tag);

                return (
                  <Button
                    key={tag}
                    type="button"
                    size="1"
                    radius="full"
                    variant={isSelected ? "solid" : "soft"}
                    color={isSelected ? "indigo" : "gray"}
                    aria-pressed={isSelected}
                    onClick={() => toggleTag(tag)}>
                    {tag}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </Card>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Text size="2" color="gray" aria-live="polite">
          {resultsLabel}
        </Text>
        {hasFilters && (
          <Button
            type="button"
            size="1"
            variant="ghost"
            color="gray"
            onClick={clearFilters}>
            <Cross2Icon />
            {t.projectsPage.clearFilters}
          </Button>
        )}
      </div>

      {filteredProjects.length > 0 ? (
        <ProjectList
          items={filteredProjects}
          columns={3}
          size="lg"
          showMoreLink={false}
          className="lg:w-full"
        />
      ) : (
        <Card variant="surface" size="3" className="w-full">
          <div className="flex flex-col items-center gap-2 py-12 text-center">
            <Text size="4" weight="bold">
              {t.projectsPage.noResultsTitle}
            </Text>
            <Text size="2" color="gray">
              {t.projectsPage.noResultsContent}
            </Text>
            <Button
              type="button"
              mt="2"
              size="2"
              variant="soft"
              onClick={clearFilters}>
              {t.projectsPage.clearFilters}
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
