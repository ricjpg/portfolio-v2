"use client";

import { Button, Section } from "@radix-ui/themes";
import {
  CursorArrowIcon,
  DividerHorizontalIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import { useLanguage } from "./lib/LanguageContext";
import Avatar from "./components/Avatar";
import { Pictures, projectsList } from "./content/db";
import ProjectList from "./components/ProjectCard";

export default function Home() {
  const { t } = useLanguage();
  return (
    <Section className="place-items-center">
      <div className="w-full lg:w-5/8 p-2">
        <div>
          <p className="font-bold text-blue-500">{t.hero.greeting}</p>
          <DividerHorizontalIcon />
        </div>
        <h1 className="justify-self-center text-5xl font-bold lg:text-9xl ">
          Ricardo Guardiola
        </h1>
        <div className="flex flex-col lg:flex-row lg:gap-5 lg:items-center-safe">
          <div className="my-5 place-items-center-safe">
            <Avatar items={Pictures} />
          </div>
          <div>
            <p className="mt-5">{t.summary.title}</p>
            <DividerHorizontalIcon />
            <span className="mt-5 font-extralight">{t.summary.content}</span>
            <DividerHorizontalIcon />
            <div className="">
              <Button
                variant="solid"
                size={"3"}
                className="max-w-1/2 cursor-grab"
              >
                <CursorArrowIcon /> Get to know me!
              </Button>
              <Button
                color="crimson"
                variant="outline"
                size={"3"}
                ml={"2"}
                className="max-w-1/2"
              >
                <DownloadIcon /> Download my resume
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Section>
        <ProjectList items={projectsList} />
      </Section>
    </Section>
  );
}
