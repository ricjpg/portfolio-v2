"use client";

import Link from "next/link";
import { Button } from "@radix-ui/themes";
import { EnvelopeClosedIcon, ResetIcon } from "@radix-ui/react-icons";
import { useLanguage } from "../lib/LanguageContext";
import Avatar from "../components/Avatar";
import DownloadButton from "../components/DownloadCVButton";
import Slide from "../components/Slide";
import SoftSkillCard from "../components/SoftSkillCard";
import TechSkillCard from "../components/TechSkillCard";
import { Pictures } from "../content/db";

export default function AboutMe() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6">
      <section className="grid items-center gap-12 pt-28 sm:pt-32 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:pt-36">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            {t.hero.aboutme}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t.summaryExtended.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
            {t.summaryExtended.content}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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
          <Avatar items={Pictures} size={260} />
        </div>
      </section>

      <section className="mt-16 border-t border-gray-200 pt-12 sm:mt-20 dark:border-gray-800">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t.hero.typeEd[2].title}
        </h2>
        <div className="mt-6">
          <Slide
            type={t.hero.typeEd[2].type}
            items={t.experience}
            showType={false}
          />
        </div>
      </section>

      <section className="mt-16 border-t border-gray-200 pt-12 sm:mt-20 dark:border-gray-800">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t.hero.typeEd[0].title}
        </h2>

        <div className="mt-6">
          <Slide type={t.hero.typeEd[0].type} showType={false} />
        </div>
      </section>

      <section className="mt-16 border-t border-gray-200 pt-12 sm:mt-20 dark:border-gray-800">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t.hero.typeEd[1].title}
        </h2>

        <div className="mt-6">
          <Slide type={t.hero.typeEd[1].type} showType={false} />
        </div>
      </section>

      <section className="mt-16 border-t border-gray-200 pt-12 sm:mt-20 dark:border-gray-800">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t.hero.techSkill}
        </h2>

        <div className="mt-6">
          <TechSkillCard />
        </div>
      </section>

      <section className="mt-16 border-t border-gray-200 pt-12 sm:mt-20 dark:border-gray-800">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t.hero.softSkill}
        </h2>

        <div className="mt-6">
          <SoftSkillCard />
        </div>
      </section>

      <section className="mt-16 border-t border-gray-200 pt-12 sm:mt-20 dark:border-gray-800">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t.contactPage.title}
        </h2>

        <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
          {t.contactPage.subtitle}
        </p>

        <div className="mt-6">
          <Button asChild size="3" variant="soft">
            <Link href="/contact">
              <EnvelopeClosedIcon aria-hidden />
              {t.hero.contactMeTitle}
            </Link>
          </Button>
        </div>
      </section>

      <section className="mt-16 border-t border-gray-200 py-12 sm:mt-20 sm:pb-20 dark:border-gray-800">
        <Button asChild size="3" variant="soft">
          <Link href="/">
            <ResetIcon aria-hidden />
            {t.hero.backButton}
          </Link>
        </Button>
      </section>
    </main>
  );
}
