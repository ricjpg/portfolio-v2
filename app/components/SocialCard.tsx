import { Card, Inset, Progress, Text } from "@radix-ui/themes";
import { useLanguage } from "../lib/LanguageContext";
import Image from "next/image";

const SocialCard = () => {
  const { t } = useLanguage();
  return (
    <div className="justify-self-center grid grid-cols-2 lg:grid lg:grid-cols-4 gap-3 py-4">
      {t.social.map((item) => (
        <Card
          key={item.name}
          className="text-2xl hover:scale-105 transition-transform duration-100 shadow-xl"
          size={"1"}
        >
          <a href={`${item.url}`}>
            <Image
              src={`${item.icon}`}
              alt="background"
              width={300}
              height={300}
              loading="eager"
              className="w-full h-30 object-fit rounded-xl "
            />
          </a>
        </Card>
      ))}
    </div>
  );
};

export default SocialCard;
