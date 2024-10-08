import { LinksType, ProjectType, SkillType } from "@/@types/type";
import {
  Code2,
  Coffee,
  Github,
  Home,
  Instagram,
  Linkedin,
  LucideIcon,
  Terminal,
  Youtube,
} from "lucide-react";

export const menuItems: LinksType = [
  {
    name: "Home",
    href: "/",
    Icon: Home,
  },
  {
    name: "About",
    href: "/about",
    Icon: Coffee,
  },
  {
    name: "Skills",
    href: "/skills",
    Icon: Code2,
  },
  {
    name: "Projects",
    href: "/projects",
    Icon: Terminal,
  },
];
export const socials: LinksType = [
  {
    name: "Github",
    href: "https://github.com/Sisteminformasiu",
    Icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/moh-afizan/",
    Icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/moh_afizan/",
    Icon: Instagram,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@Mohafizan",
    Icon: Youtube,
  },
];

export const skillsTools: SkillType = [
  { title: "VS Code", logo: "skills/vscode.png" },
  { title: "Figma", logo: "skills/figma.png" },
  { title: "Git", logo: "skills/git.png" },
  { title: "GitHub", logo: "skills/github.png" },
  { title: "NPM", logo: "skills/npm.png" },
];

export const skillsLanguage: SkillType = [
  { title: "HTML 5", logo: "skills/html.png" },
  { title: "CSS 3", logo: "skills/css.png" },
  // { title: "SASS", logo: "skills/sass.png" },
  { title: "JavaScript", logo: "skills/javascript.png" },
  { title: "TypeScript", logo: "skills/typescript.png" },
];

export const skillsLibrary: SkillType = [
  { title: "Tailwind CSS", logo: "skills/tailwindcss.png" },
  { title: "Framer Motion", logo: "skills/framer.png" },
  { title: "React JS", logo: "skills/react.png" },
  { title: "Redux Toolkit", logo: "skills/redux.png" },
  { title: "Next JS", logo: "skills/nextjs.png" },
];

export const aboutLinks: {
  title: string;
  href: string;
  description: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "About Me",
    href: "/about",
    description: "Everything about me",
    Icon: Coffee,
  },
  {
    title: "Skills",
    href: "/skills",
    description: "Technologies I can use",
    Icon: Code2,
  },
  {
    title: "Projects",
    href: "/projects",
    description: "All projects I have worked on",
    Icon: Terminal,
  },
];

export const projects: ProjectType[] = [
  {
    title: "My Portfolio",
    image: "projects/my-porto.jpg",
    tags: [
      "Next JS",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
    ],
    gitHub: "https://github.com/Sisteminformasiu/My-Porto",
    demo: "https://my-porto-beta.vercel.app",
  },
  {
    title: "Village Tosale Profile Website",
    image: "projects/village-tosale-profile-website.jpg",
    tags: ["NextJS", "React JS", "Tailwind CSS", "Vite", "Next-UI", "Ant-Design"],
    gitHub: "https://github.com/kkntosale108/Tosale-app-fe",
    demo: "https://tosale.id/",
  },
  {
    title: "Mental Health Website",
    image: "projects/mental-health-web.jpg",
    tags: ["React JS", "Tailwind CSS", "Sweetalert", "Vite"],
    gitHub: "https://github.com/Sisteminformasiu/Mini-Project-React",
    demo: "https://pulih.netlify.app/",
  },
  {
    title: "Warehouse Management",
    image: "projects/warehouse-management-admin.jpg",
    tags: ["ReactJS", "Tailwind CSS", "Ant-design", "ViteJS"],
    gitHub: "https://github.com/Capstone-Tim-12/warehouse-managament-system-fe",
    demo: "https://digihouse-jaya.netlify.app/",
  },
  {
    title: "Library Book Web",
    image: "projects/library-web.jpg",
    tags: [
      "HTML",
      "CSS",
    ],
    gitHub: "https://github.com/Sisteminformasiu/Sisteminformasiu.github.io",
    demo: "https://zibook.netlify.app/",
  },
];

export const skillLogo = [
  "skills/html.png",
  "skills/css.png",
  "skills/sass.png",
  "skills/javascript.png",
  "skills/typescript.png",
  "skills/tailwindcss.png",
  "skills/framer.png",
  "skills/react.png",
  "skills/redux.png",
  "skills/nextjs.png",
  "skills/vscode.png",
  "skills/figma.png",
  "skills/git.png",
  "skills/github.png",
  "skills/npm.png",
];
