export interface SkillProps {
  name: string;
  level: number;
}

export interface SkillSetProps {
  tittle: string;
  skills: SkillProps[];
}

export interface SoftSkillProp {
  title: string;
  description: string;
}

export interface DataPage {
  slug: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface ProjectProps {
  slug: string;
  title: string;
  img?: string;
  description: string;
  href?: string;
  date: string;
  stack?: string[];
}

export interface SummaryProps {
  title?: string;
  content: string;
}

export interface HeroStrings {
  greeting: string;
  recentProjects: string;
  aboutme: string;
  techSkill: string;
  softSkill: string;
}

export interface EducationProps {
  title?: string;
  degree?: string;
  institution?: string;
  period?: string;
  perks?: string[];
}

export interface Translations {
  en: {
    skills: SkillSetProps[];
    projects: ProjectProps[];
    summary: SummaryProps;
    hero: HeroStrings;
    education: EducationProps[];
    softSkills: SoftSkillProp[];
  };
  es: {
    skills: SkillSetProps[];
    projects: ProjectProps[];
    summary: SummaryProps;
    hero: HeroStrings;
    education: EducationProps[];
    softSkills: SoftSkillProp[];
  };
}

export type Language = "en" | "es";

export type Appearance = "light" | "dark";

export interface ThemeContextType {
  appearance: Appearance;
  toggleTheme: () => void;
  setAppearance?: (theme: "light" | "dark") => void;
}

export interface PicProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
  className?: string;
}
