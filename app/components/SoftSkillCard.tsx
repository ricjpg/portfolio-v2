import { Card, Progress, Text } from "@radix-ui/themes";
import { useLanguage } from "../lib/LanguageContext";

const SoftSkillCard = () => {
  const { t } = useLanguage();
  return (
    <div className="justify-self-center flex flex-col lg:grid lg:grid-cols-3 gap-3">
      {t.softSkills.map((skill) => (
        <Card
          key={skill.title}
          className="text-2xl hover:scale-105 transition-transform duration-100 shadow-xl"
          size={"4"}
        >
          <h1 className="text-2xl font-bold ">{skill.title}</h1>
          <p className="font-light text-sm">{skill.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default SoftSkillCard;
