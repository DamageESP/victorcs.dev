import type { Project } from "./types";

const projects: Project[] = [
  /* {
    id: "webmonster.io",
    name: "WebMonster",
    url: "webmonster.io",
    dateFrom: "August 2018",
    dateTo: "June 2019",
    description:
      "Fully elaborated with VueJS and optimized for SEO. The website has been pre-rendered to get the best performance possible.",
    image: "webmonster.png",
    technologies: ["Vue", "Javascript"],
  }, */
  {
    order: 3,
    id: "victorcs.dev",
    name: "VictorCS",
    url: "https://victorcs.dev",
    codeUrl: "https://github.com/DamageESP/victorcs.dev",
    dateFrom: "2019",
    dateTo: "Ongoing",
    description:
      "Personal website developed with VueJS as a showcase and portfolio.",
    image: "victorcs.png",
    technologies: ["Vue", "Javascript", "Typescript"],
  },
  {
    order: 2,
    id: "cgimemes.wtf",
    name: "CGI Memes",
    codeUrl: "https://github.com/DamageESP/cgi-memes",
    dateFrom: "April 2020",
    dateTo: "April 2020",
    description:
      "Webapp created with VueJS and ExpressJS, using Docker and Docker-Compose and later deployed on a VPS. From start to finish, this project took about a week. Its purpose was to gather memes created by CGI members for a small contest during lockdown.",
    image: "cgimemes.png",
    technologies: ["Node", "Express", "Vue"],
  },
  {
    order: 1,
    id: "seguridad-sl",
    name: "Seguridad SL",
    codeUrl: "https://github.com/DamageESP/seguridad-sl",
    url: "https://damageesp.github.io/seguridad-sl",
    dateFrom: "August 2020",
    dateTo: "August 2020",
    description:
      "Webapp created with VueJS and Firebase, hosted on GitHub Pages. From start to finish, this project took about 5 hours. It was made merely as a demo and training. Here's an uncut video of me creating this whole thing: https://www.youtube.com/watch?v=TdzI-wcRbvo",
    image: "seguridadsl.png",
    technologies: ["Javascript", "Vue"],
  },
  {
    order: 0,
    id: "stock-checker",
    name: "Stock Checker",
    codeUrl: "https://github.com/DamageESP/stock-checker-site",
    url: "https://damageesp.github.io/stock-checker-site",
    dateFrom: "November 2021",
    dateTo: "November 2021",
    description:
      "Webapp created with React and Firebase, hosted on GitHub Pages. It consists of two projects: the frontend webapp and the backend, which is a Node.js app. I was running the Node.js app in my Raspberry Pi.",
    image: "stockchecker.png",
    technologies: ["Javascript", "Node", "Express", "React"],
  },
];

export default projects;
