"use client";
import { Box, Section, Separator } from "@radix-ui/themes";
import Avatar from "../components/Avatar";
import { Pictures, skills } from "../content/db";
import { useLanguage } from "../lib/LanguageContext";
import Slide from "../components/Slide";
import { useRouter } from "next/navigation";
import TechSkillCard from "../components/TechSkillCard";
import BackButton from "../components/BackButton";
import SoftSkillCard from "../components/SoftSkillCard";
import DownloadButton from "../components/DownloadCVButton";

export default function aboutme() {
  const { t } = useLanguage();
  return (
    <Section className="p-3">
      <h1 className="justify-self-center font-extrabold text-2xl lg:text-7xl">
        {t.hero.aboutme}
      </h1>
      <Section className="w-full flex flex-col lg:flex-row justify-self-center lg:w-3/5">
        <Box className="w-full lg:w-1/2">
          <p className="font-extrabold text-4xl lg:font-6xl ">
            {t.summary.title}
          </p>
          <Separator color="orange" size="3" />
          <p className="">{t.summary.content}</p>
        </Box>
        <Box className="w-full lg:w-1/2">
          <Slide type={t.hero.typeEd[0].type} />
          <DownloadButton />
        </Box>
      </Section>

      <Box className=" justify-self-center">
        <h1 className="font-extrabold text-4xl lg:text-7xl">
          {t.hero.typeEd[1].title}
        </h1>
      </Box>
      <Section className="w-full lg:w-3/5  justify-self-center">
        <Slide type={t.hero.typeEd[1].type} />
      </Section>

      <Box className=" justify-self-center">
        <h1 className="font-extrabold text-4xl lg:text-7xl">
          {t.hero.techSkill}
        </h1>
      </Box>
      <Section className="w-full lg:w-3/5  justify-self-center">
        <TechSkillCard />
      </Section>

      <Box className=" justify-self-center">
        <h1 className="font-extrabold text-4xl lg:text-7xl">
          {t.hero.softSkill}
        </h1>
      </Box>
      <Section className="w-full lg:w-3/5  justify-self-center">
        {/* <Box> */}
        <SoftSkillCard />
        {/* </Box> */}
      </Section>
      <Box className="justify-self-center">
        <BackButton title={"Back"} path={"/"} />
      </Box>
    </Section>
  );
}
