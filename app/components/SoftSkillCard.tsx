import { Card } from "@radix-ui/themes";
import { useLanguage } from "../lib/LanguageContext";

const SoftSkillCard = () => {
  const { t } = useLanguage();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {t.softSkills.map((skill) => (
        <Card key={skill.title} variant="surface" size="3">
          <h3 className="text-base font-bold">{skill.title}</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {skill.description}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default SoftSkillCard;
