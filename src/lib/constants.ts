import projectImage from "/public/mockups/mystore-mockup.jpg";

export const EMAIL_ADDRESS = "graydonvg@gmail.com";

export const LINKS = {
  GITHUB: "https://github.com/graydonvg",
  LINKEDIN: "https://www.linkedin.com/",
};

export const projects = [
  {
    image: projectImage,
    title: "MyStore",
    description:
      "Developed an e-commerce platform featuring an admin panel with role-based access control to manage users, products, and orders efficiently. Inspired by South African e-commerce store, Superbalist.",
    tags: [
      "typescript",
      "react.js",
      "next.js",
      "redux",
      "supabase",
      "firebase",
      "mui",
      "stripe",
    ],
    links: {
      repository: "https://github.com/graydonvg/my-store",
      website: "https://my-store-henna.vercel.app/",
    },
  },
  {
    image: projectImage,
    title: "MyStore",
    description:
      "Developed an e-commerce platform featuring an admin panel with role-based access control to manage users, products, and orders efficiently. Inspired by South African e-commerce store, Superbalist.",
    tags: [
      "typescript",
      "react.js",
      "next.js",
      "redux",
      "supabase",
      "firebase",
      "mui",
      "stripe",
    ],
    links: {
      repository: "https://github.com/graydonvg/my-store",
      website: "https://my-store-henna.vercel.app/",
    },
  },
];

export const technologies = [
  {
    name: "HTML 5",
    iconPath: "/icons/html5.svg",
  },
  {
    name: "CSS 3",
    iconPath: "/icons/css3.svg",
  },
  {
    name: "Tailwind CSS",
    iconPath: "/icons/tailwindcss.svg",
  },
  {
    name: "JavaScript",
    iconPath: "/icons/javascript.svg",
  },
  {
    name: "TypeScript",
    iconPath: "/icons/typescript.svg",
  },
  {
    name: "React.js",
    iconPath: "/icons/react.svg",
  },
  {
    name: "Next.js",
    iconPath: "/icons/nextjs.svg",
  },
  {
    name: "Redux Toolkit",
    iconPath: "/icons/redux.svg",
  },
  {
    name: "Supabase",
    iconPath: "/icons/supabase.svg",
  },
  {
    name: "Firebase",
    iconPath: "/icons/firebase.svg",
  },
  {
    name: "MUI",
    iconPath: "/icons/mui.svg",
  },
  {
    name: "Shadcn",
    iconPath: "/icons/shadcnui.svg",
  },
];

const TYPEWRITER_DURATION = 1000;
const TYPEWRITER_TRNASITION_DELAY = 1000;

export const FIRST_TYPEWRITER_DURATION =
  TYPEWRITER_DURATION + TYPEWRITER_TRNASITION_DELAY;
const SECOND_TYPEWRITER_DURATION =
  TYPEWRITER_DURATION + TYPEWRITER_TRNASITION_DELAY;

export const TOTAL_TYPEWRITER_DURATION =
  FIRST_TYPEWRITER_DURATION + SECOND_TYPEWRITER_DURATION;

export const PAGE_TRANSITION_DELAY = 0;
export const PAGE_TRANSITION_DURATION = 2000;
