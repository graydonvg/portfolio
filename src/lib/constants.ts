import { scrollToContactForm } from "./utils";
import myStoreMockup from "/public/mockups/mystore-mockup.jpg";
import galleryAiMockup from "/public/mockups/gallery-ai-mockup.jpg";

export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://www.graydonvongossler.com/";
export const GITHUB_URL = "https://github.com/graydonvg";
export const LINKED_IN_URL = "https://linkedin.com/in/graydon-von-gossler";
export const EMAIL_ADDRESS = "graydonvg@gmail.com";

export const navOptions = [
  {
    label: "GitHub",
    link: GITHUB_URL,
  },
  {
    label: "LinkedIn",
    link: LINKED_IN_URL,
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
      "Developed a clothing e-commerce store featuring an admin panel with role-based access control to manage users, products, and orders efficiently. Inspired by South African e-commerce store, Superbalist.",
    tags: [
      "typescript",
      "react.js",
      "next.js",
      "redux",
      "supabase",
      "mui",
      "stripe",
    ],
    links: {
      repository: "https://github.com/graydonvg/my-store",
      website: "https://my-store-henna.vercel.app/",
    },
  },
  {
    image: galleryAiMockup,
    title: "Gallery AI",
    description:
      "Developing a dynamic media gallery platform with advanced management features, allowing users to seamlessly upload and enhance both photos and videos. Key features include Auto-Tagging for efficient categorization and search optimization, Image Optimization for high-quality display across devices, and Smart Editing with AI-driven enhancements.",
    tags: [
      "typescript",
      "react.js",
      "next.js",
      "redux",
      "supabase",
      "shadcn",
      "tailwind css",
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
    icon: "html",
  },
  {
    name: "CSS 3",
    icon: "css",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
  },
  {
    name: "JavaScript",
    icon: "javascript",
  },
  {
    name: "TypeScript",
    icon: "typescript",
  },
  {
    name: "React.js",
    icon: "react",
  },
  {
    name: "Next.js",
    icon: "netxjs",
  },
  {
    name: "Redux Toolkit",
    icon: "redux",
  },
  {
    name: "Supabase",
    icon: "supabase",
  },
  {
    name: "Material UI",
    icon: "mui",
  },
  {
    name: "shadcn",
    icon: "shadcn",
  },
  {
    name: "VS Code",
    icon: "vscode",
  },
];

export const TYPEWRITER_DURATION_IN_SEC = 1;

export const PRELOADER_TRANSITION_DELAY_IN_SEC = 0.2;
export const PRELOADER_TRANSITION_DURATION_IN_SEC = 0.8;

export const EARTH_DELAY_IN_SEC = PRELOADER_TRANSITION_DELAY_IN_SEC;
export const LIGHT_BEAM_DELAY_IN_SEC = PRELOADER_TRANSITION_DELAY_IN_SEC - 0.2;
export const HERO_DELAY_IN_SEC = PRELOADER_TRANSITION_DELAY_IN_SEC + 2;
export const HEADER_DELAY_IN_SEC = HERO_DELAY_IN_SEC;
