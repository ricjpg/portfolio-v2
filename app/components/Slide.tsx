import {
  Card,
  Text,
  Heading,
  Separator,
  Link,
} from "@radix-ui/themes";
import { useLanguage } from "../lib/LanguageContext";
import { TimelineEntryProps } from "../interfaces/interface";

interface textProp {
  type: string;
  title?: string;
  degree?: string;
  institution?: string;
  period?: string;
  perks?: string[];
  items?: TimelineEntryProps[];
  showType?: boolean;
}

const Slide: React.FC<textProp> = ({ type, items, showType = true }) => {
  const { t } = useLanguage();
  const entries = items ?? t.education;
  const kind = entries.filter((entry) => entry.type == type);

  return (
    <div className="">
      {kind.map((item) => (
        <Card
          variant="surface"
          size="3"
          key={item.title}
          className="m-2 hover:scale-103 transition-transform"
        >
          {showType && (
            <Text>
              <Heading>{item.type}</Heading>
            </Text>
          )}
          <div className="flex">
            <div>
              <Separator orientation="vertical" size="4" color="iris" />
            </div>
            <div className="p-3 ">
              <p className="text-blue-600 text-sm font-bold">{item.period}</p>
              {item.url ? (
                <Link
                  weight={"bold"}
                  href={item.url}
                  color="indigo"
                  size="8"
                  className="font-extrabold "
                >
                  {item.title}
                </Link>
              ) : (
                <Text
                  weight="bold"
                  color="indigo"
                  size="8"
                  className="font-extrabold "
                >
                  {item.title}
                </Text>
              )}

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
