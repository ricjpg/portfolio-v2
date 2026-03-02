import { Card, Code, Text, Heading, Separator, Badge } from "@radix-ui/themes";
import { useLanguage } from "../lib/LanguageContext";

interface textProp {
  title?: string;
  degree?: string;
  institution?: string;
  period?: string;
  perks?: string[];
}

const Slide: React.FC<textProp> = ({}) => {
  const { t } = useLanguage();

  const education = [...t.education];
  return (
    <div className="">
      {education.map((item) => (
        <Card variant="surface" size="3" key={item.degree}>
          <Text>
            <Heading>{"Education"}</Heading>
          </Text>
          <div className="flex">
            <div>
              <Separator orientation="vertical" size="4" color="iris" />
            </div>
            <div className="pl-3">
              <p className="text-blue-600 text-sm font-bold">{item.period}</p>
              <Text className="text-3xl font-extrabold">{item.title}</Text>
              <br />
              <Text color="gray" className="text-md font-extralight">
                {item.institution}
              </Text>
              {item.perks?.map((perk) => (
                <p key={perk} className="font-light  text-md">
                  • {perk}
                  <br />
                </p>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Slide;
