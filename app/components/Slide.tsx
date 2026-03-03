import {
  Card,
  Code,
  Text,
  Heading,
  Separator,
  Badge,
  Link,
} from "@radix-ui/themes";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../content/db";
import { useRouter } from "next/navigation";

interface textProp {
  type: string;
  title?: string;
  degree?: string;
  institution?: string;
  period?: string;
  perks?: string[];
}

interface urlProp {
  url: string;
}

const Slide: React.FC<textProp> = ({ type }) => {
  const { t } = useLanguage();
  const education = [...t.education];
  const kind = education.filter((education) => education.type == type);

  return (
    <div className="">
      {kind.map((item) => (
        <Card
          variant="surface"
          size="3"
          key={item.title}
          className="m-2 hover:scale-103 transition-transform"
        >
          <Text>
            <Heading>{item.type}</Heading>
          </Text>
          <div className="flex">
            <div>
              <Separator orientation="vertical" size="4" color="iris" />
            </div>
            <div className="p-3 ">
              <p className="text-blue-600 text-sm font-bold">{item.period}</p>
              <Link
                weight={"bold"}
                href={item.url}
                color="indigo"
                size="8"
                className="font-extrabold "
              >
                {item.title}
              </Link>
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
