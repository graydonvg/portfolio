import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";
import { scrollToContactForm } from "@/lib/utils";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

type Props = {
  toggleMenu: () => void;
};

const NAV_OPTIONS = [
  {
    label: "GitHub",
    link: "https://github.com/graydonvg",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/",
  },
  {
    label: "Contact Me",
    scrollTo: scrollToContactForm,
  },
];

export function Navigation({ toggleMenu }: Props) {
  return (
    <nav className="fixed left-0 top-[120px] z-40 w-[300px] px-4">
      <motion.ul variants={variants} className="space-y-6">
        {NAV_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            option={option}
            toggleMenu={toggleMenu}
          />
        ))}
      </motion.ul>
    </nav>
  );
}
