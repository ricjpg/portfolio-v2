"use client";

import { Box, Button, Section, Separator } from "@radix-ui/themes";
import {
  CursorArrowIcon,
  DividerHorizontalIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import { useLanguage } from "./lib/LanguageContext";
import Avatar from "./components/Avatar";
import { Pictures, projectsList } from "./content/db";
import ProjectList from "./components/ProjectCard";
import CodeCard from "./components/Slide";
import { useRouter } from "next/navigation";
import DownloadButton from "./components/DownloadCVButton";
import Slide from "./components/Slide";
import TechSkillCard from "./components/TechSkillCard";

export default function Home() {
  const router = useRouter();

  const getToknowMe = () => {
    router.push("/aboutme"); // Redirige a /aboutme
  };
  const { t } = useLanguage();
  return (
    <Section className="place-items-center">
      <div className="w-full lg:w-5/8 p-2">
        <div>
          <p className="font-bold text-blue-500">{t.hero.greeting}</p>
          <DividerHorizontalIcon />
        </div>
        <h1 className="text-center text-7xl font-extrabold lg:text-[170px] font-funnel">
          Ricardo Guardiola
        </h1>
        <div className="flex flex-col lg:flex-row lg:gap-5 lg:items-center-safe">
          <div className="my-5 place-items-center-safe">
            <Avatar items={Pictures} />
          </div>
          <div>
            <p className="italic font-serif mt-5 text-lg">{t.summary.title}</p>
            <DividerHorizontalIcon />
            <span className="mt-5 font-extralight">{t.summary.content}</span>
            <DividerHorizontalIcon />
            <div className="">
              <Button
                variant="solid"
                size={"3"}
                className="max-w-1/2 cursor-grab"
                onClick={getToknowMe}
              >
                <CursorArrowIcon /> {t.hero.aboutme}
              </Button>
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
      <Section className="w-full flex flex-col lg:flex-row justify-self-center lg:w-3/5">
        <Box className="w-full ">
          <Slide type={t.hero.typeEd[0].type} />
        </Box>
      </Section>

      <Box className=" justify-self-center">
        <h1 className="font-extrabold text-4xl lg:text-7xl">
          {t.hero.techSkill}
        </h1>
      </Box>
      <Section>
        <TechSkillCard />
      </Section>
      <Box className=" justify-self-center">
        <h1 className="font-extrabold text-4xl lg:text-7xl">
          {t.hero.recentProjects}
        </h1>
      </Box>
      <Section>
        <ProjectList limit={3} />
      </Section>
    </Section>
  );
}
