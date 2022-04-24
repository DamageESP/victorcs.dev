export interface Skill {
  icon: string;
  name: Technology;
}

export interface Project {
  id: string;
  name: string;
  url?: string;
  order: number;
  codeUrl?: string;
  dateFrom: string;
  dateTo: string;
  description: string;
  image: string;
  technologies: Technology[];
}

export interface Job {
  place: string;
  mainFocus: string;
  dateFrom: Date;
  dateTo: Date;
  tech: Technology[];
}

export type Technology =
  | "Javascript"
  | "Typescript"
  | "HTML5 & CSS3"
  | "Vue"
  | "React"
  | "Express"
  | "Node"
  | "Angular"
  | "Ionic";
