"use client";

import Image from "next/image";
import { Badge, Card, Heading, Inset, Text } from "@radix-ui/themes";
import { useLanguage } from "../lib/LanguageContext";

interface ItemProjectProps {
  limit: number;
}

const ProjectCardList: React.FC<ItemProjectProps> = ({ limit }) => {
  const { t } = useLanguage();
  const sortedItems = [...t.projects].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const limitedItems = limit ? sortedItems.slice(0, limit) : sortedItems;

  return (
    <div
      className="flex flex-col justify-self-center px-3
      lg:grid lg:grid-cols-2
    gap-10 items-center lg:w-5/8"
    >
      {limitedItems.map((item) => (
        <Card
          size="4"
          key={item.title}
          className="w-full
          shrink-0 hover:scale-101 duration-200 ease-in-out 
          rounded-2xl mt-5 align-bottom shadow-xl"
          variant="surface"
        >
          <Inset clip="padding-box" side="top" pb="current">
            <a href={`/projects/${item.slug || item.title.toLowerCase()}`}>
              <Image
                src={`/img/${item.img}`}
                alt="background"
                width={500}
                height={500}
                loading="eager"
                className="w-full h-56 object-cover rounded-xl "
              />

              <Text className="flex flex-col gap-2 px-5">
                <h3 className="font-extrabold text-3xl mt-3">{item.title}</h3>
                <Text className="text-wrap font-extralight text-sm line-clamp-3">
                  {item.description}
                </Text>
                <div>
                  {item.stack?.map((tool) => (
                    <Badge color={"crimson"} className="mx-1" key={tool}>
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Text>
            </a>
          </Inset>
        </Card>
      ))}
      {/* <div> */}
      <Card
        size="3"
        className="w-full
          shrink-0 hover:scale-101 duration-200 ease-in-out 
          rounded-2xl mt-5 align-bottom shadow-xl
          outline-amber-300 outline-1"
        variant="classic"
      >
        <Inset side="top" pb="current">
          <a href={`/projects/`}>
            <Image
              src={`/img/others.png`}
              alt="background"
              width={500}
              height={500}
              loading="eager"
              className="w-full h-56 object-cover rounded-xl justify-self-center"
            />

            <Text className="flex flex-col gap-2 px-5">
              <h3 className="font-extrabold text-3xl mt-3">
                {t.hero.moreProjectsTitle}
              </h3>
              <Text className="text-wrap font-extralight text-sm line-clamp-3">
                {t.hero.moreProjectsContent}
              </Text>
            </Text>
          </a>
        </Inset>
      </Card>
    </div>
  );
};

export default ProjectCardList;
