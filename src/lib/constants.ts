import { scrollToContactForm } from "./utils";
import myStoreMockup from "/public/mockups/mystore-mockup.jpg";
import galleryAi from "/public/gallery-ai-screenshot.png";

export const EMAIL_ADDRESS = "graydonvg@gmail.com";

export const NAV_OPTIONS = [
  {
    label: "GitHub",
    link: "https://github.com/graydonvg",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/",
  },
  {
    label: "Contact me",
    scrollTo: scrollToContactForm,
  },
];

export const projects = [
  {
    image: myStoreMockup,
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
    image: galleryAi,
    title: "Gallery AI",
    description:
      "Developed a dynamic media gallery platform with advanced management features, allowing users to seamlessly upload and enhance both photos and videos. Key features include Auto-Tagging for efficient categorization and search optimization, Image Optimization for high-quality display across devices, and Smart Editing with AI-driven enhancements.",
    tags: [
      "typescript",
      "react.js",
      "next.js",
      "redux",
      "supabase",
      "shadcn/ui",
      "cloudinary",
    ],
    links: {
      repository: "https://github.com/graydonvg/gallery-ai",
      website: "",
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

export const TYPEWRITER_DURATION_IN_SEC = 1;

export const PRELOADER_TRANSITION_DELAY_IN_SEC = 0.2;
export const PRELOADER_TRANSITION_DURATION_IN_SEC = 0.8;

export const EARTH_DELAY_IN_SEC = PRELOADER_TRANSITION_DELAY_IN_SEC;
export const LIGHT_BEAM_DELAY_IN_SEC = PRELOADER_TRANSITION_DELAY_IN_SEC - 0.2;
export const HERO_DELAY_IN_SEC = PRELOADER_TRANSITION_DELAY_IN_SEC + 2;
export const HEADER_DELAY_IN_SEC = HERO_DELAY_IN_SEC;
