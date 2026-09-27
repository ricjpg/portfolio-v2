"use client";

import Link from "next/link";
import { Button } from "@radix-ui/themes";
import { EnvelopeClosedIcon, ResetIcon } from "@radix-ui/react-icons";
import { useLanguage } from "../lib/LanguageContext";
import SocialCard from "../components/SocialCard";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6">
      <section className="pt-28 sm:pt-32 lg:pt-36">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          {t.hero.contactMeTitle}
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {t.contactPage.title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
          {t.contactPage.subtitle}
        </p>
      </section>

      <section className="mt-14 border-t border-gray-200 pt-12 sm:mt-16 dark:border-gray-800">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t.contactPage.emailTitle}
        </h2>

        <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
          {t.hero.contactMeContent}
        </p>

        <div className="mt-6">
          <Button asChild size="3">
            <a href={`mailto:${t.contactPage.email}`}>
              <EnvelopeClosedIcon aria-hidden />
              {t.contactPage.email}
            </a>
          </Button>
        </div>
      </section>

      <section className="mt-14 border-t border-gray-200 pt-12 sm:mt-16 dark:border-gray-800">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t.contactPage.socialTitle}
        </h2>

        <SocialCard />
      </section>

      <section className="mt-14 border-t border-gray-200 py-12 sm:mt-16 sm:pb-20 dark:border-gray-800">
        <Button asChild variant="soft" size="3">
          <Link href="/">
            <ResetIcon aria-hidden />
            {t.hero.backButton}
          </Link>
        </Button>
      </section>
    </main>
  );
}
