import { FC } from "react";
import { SkillSetProps } from "../interfaces/interface";
import { Card, Progress, Text } from "@radix-ui/themes";
import { skills } from "../content/db";

const TechSkillCard = () => {
  return (
    <div className="justify-self-center flex flex-col lg:grid lg:grid-cols-4 gap-3 ">
      {skills.map((skill) => (
        <Card
          key={skill.tittle}
          className="text-2xl  hover:scale-105 transition-transform duration-100 shadow-xl"
          size={"4"}
        >
          {skill.tittle}
          {skill.skills.map((item) => (
            <div className="" key={item.name}>
              <Text size="2">{item.name}</Text>
              <Progress
                value={item.level}
                size="3"
                radius="full"
                duration="30s"
              />
            </div>
          ))}
        </Card>
      ))}
    </div>
  );
};

export default TechSkillCard;
