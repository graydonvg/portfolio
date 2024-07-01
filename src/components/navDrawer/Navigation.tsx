import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

// const menuOptions = [
//   // "about",
//   // "projects",
//   // "contact",
//   "github",
//   "linkedin",
//   "resume",
// ];

const menuOptions = [
  {
    label: "Github",
    link: "https://github.com/graydonvg",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];

export function Navigation() {
  return (
    <nav>
      <motion.ul
        variants={variants}
        className="fixed left-0 top-[116px] z-40 w-[230px] space-y-6 px-4"
      >
        {menuOptions.map((option) => (
          <MenuItem key={option.label} option={option} />
        ))}
      </motion.ul>
    </nav>
  );
}
