"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Card, Progress, Text } from "@radix-ui/themes";
import { useLanguage } from "../lib/LanguageContext";

const CARD_DELAY = 70;
const BAR_DELAY = 110;

const TechSkillCard = () => {
  const { t } = useLanguage();
  const gridRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const groups = t.skills;

  useEffect(() => {
    const node = gridRef.current;
    if (!node || revealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <div ref={gridRef} className="flex flex-wrap gap-6">
      {groups.map((skill, groupIndex) => (
        <Card
          key={skill.tittle}
          variant="surface"
          size="3"
          className="w-full grow basis-[23rem]">
          <h3 className="text-base font-bold">{skill.tittle}</h3>

          <div className="mt-4 flex flex-col gap-4">
            {skill.skills.map((item, index) => (
              <div key={item.name}>
                <Text size="2">{item.name}</Text>
                <Progress
                  className="skill-progress"
                  style={
                    {
                      "--progress-delay": `${groupIndex * CARD_DELAY + index * BAR_DELAY}ms`,
                    } as CSSProperties
                  }
                  value={revealed ? item.level : 0}
                  size="3"
                  radius="full"
                />
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TechSkillCard;
