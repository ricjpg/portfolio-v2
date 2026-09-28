"use client";

import Link from "next/link";
import { Button } from "@radix-ui/themes";
import {
  ArrowRightIcon,
  CursorArrowIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { useLanguage } from "./lib/LanguageContext";
import Avatar from "./components/Avatar";
import { Pictures } from "./content/db";
import ProjectList from "./components/ProjectCard";
import Slide from "./components/Slide";
import DownloadButton from "./components/DownloadCVButton";
import { PortfolioTechnologyCarousel } from "./components/TechnologyCarousel";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6">
      <section className="grid items-center gap-12 pt-28 sm:pt-32 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20 lg:pt-36">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            {t.hero.greeting}
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Ricardo Guardiola
          </h1>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
            {t.summary.title}
          </p>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
            {t.summary.content}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="3">
              <Link href="/aboutme">
                <CursorArrowIcon aria-hidden />
                {t.hero.aboutme}
              </Link>
            </Button>
            <DownloadButton />
            <Button asChild size="3" variant="soft">
              <Link href="/contact">
                <EnvelopeClosedIcon aria-hidden />
                {t.hero.contactMeTitle}
              </Link>
            </Button>
          </div>
        </div>

        <div className="justify-self-center lg:justify-self-end">
          <Avatar items={Pictures} size={300} />
        </div>
      </section>

      <section className="mt-16 border-t border-gray-200 pt-12 sm:mt-20 dark:border-gray-800">
        <Slide type={t.hero.typeEd[0].type} />
      </section>

      <section className="mt-16 border-t border-gray-200 pt-12 sm:mt-20 dark:border-gray-800">
        <Slide type={t.hero.typeEd[2].type} items={t.experience} />
      </section>

      <section className="mt-16 border-t border-gray-200 pt-12 sm:mt-20 dark:border-gray-800">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t.hero.techSkill}
        </h2>

        <div className="-mx-4 mt-4 sm:-mx-6">
          <PortfolioTechnologyCarousel />
        </div>
      </section>

      <section className="mt-16 border-t border-gray-200 pt-12 pb-16 sm:mt-20 sm:pb-24 dark:border-gray-800">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t.hero.recentProjects}
          </h2>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400">
            {t.hero.viewAllProjects}
            <ArrowRightIcon aria-hidden />
          </Link>
        </div>

        <div className="mt-8">
          <ProjectList
            limit={6}
            columns={3}
            size="lg"
            showMoreLink={false}
            className="lg:w-full"
          />
        </div>
      </section>
    </main>
  );
}
