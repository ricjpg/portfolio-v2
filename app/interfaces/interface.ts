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

export interface TypeEducation {
  type: string;
  title: string;
}

export interface HeroStrings {
  greeting: string;
  recentProjects: string;
  aboutme: string;
  techSkill: string;
  softSkill: string;
  typeEd: TypeEducation[];
  backButton: string;
  downloadCV: string;
  moreProjectsTitle: string;
  moreProjectsContent: string;
  viewAllProjects: string;
  contactMeTitle: string;
  contactMeContent: string;
}

export interface TimelineEntryProps {
  type: string;
  title?: string;
  degree?: string;
  institution?: string;
  period?: string;
  perks?: string[];
  url?: string;
}

export interface ProjectsPageStrings {
  title: string;
  subtitle: string;
  searchLabel: string;
  searchPlaceholder: string;
  filterLabel: string;
  clearFilters: string;
  resultsOne: string;
  resultsMany: string;
  noResultsTitle: string;
  noResultsContent: string;
  back: string;
}

export interface ProjectPageStrings {
  backToProjects: string;
  onThisPage: string;
}

export interface ContactPageStrings {
  title: string;
  subtitle: string;
  emailTitle: string;
  socialTitle: string;
  email: string;
}

export interface Translations {
  en: {
    skills: SkillSetProps[];
    projects: ProjectProps[];
    summary: SummaryProps;
    hero: HeroStrings;
    education: TimelineEntryProps[];
    experience: TimelineEntryProps[];
    softSkills: SoftSkillProp[];
    social: Social[];
    projectsPage: ProjectsPageStrings;
    projectPage: ProjectPageStrings;
    contactPage: ContactPageStrings;
  };
  es: {
    skills: SkillSetProps[];
    projects: ProjectProps[];
    summary: SummaryProps;
    hero: HeroStrings;
    education: TimelineEntryProps[];
    experience: TimelineEntryProps[];
    softSkills: SoftSkillProp[];
    social: Social[];
    projectsPage: ProjectsPageStrings;
    projectPage: ProjectPageStrings;
    contactPage: ContactPageStrings;
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
