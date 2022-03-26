import type { Skill } from "./types";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const techColors = new Map();

export function getTechColor(techId?: string) {
  return (
    techColors.get(techId) ||
    (() => {
      const c = getRandomColor();
      techColors.set(techId, c);
      return c;
    })()
  );
}

const skills: Skill[] = [
  {
    icon: "js.png",
    name: "Javascript",
  },
  {
    icon: "js.png",
    name: "Ionic",
  },
  {
    icon: "htmlcss.png",
    name: "HTML5 & CSS3",
  },
  {
    icon: "vue.png",
    name: "Vue",
  },
  {
    icon: "react.png",
    name: "React",
  },
  {
    icon: "node.jpg",
    name: "Node",
  },
  {
    icon: "express.png",
    name: "Express",
  },
];

export default skills;
