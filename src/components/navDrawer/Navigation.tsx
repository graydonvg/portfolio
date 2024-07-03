import { motion } from "framer-motion";
import { MenuItemScrollLink } from "./MenuItemScrollLink";
import { MenuItemExternalLink } from "./MenuItemExternalLink";
import { CONSTANTS } from "@/constants";

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

export function Navigation({ toggleMenu }: Props) {
  return (
    <nav>
      <motion.ul
        variants={variants}
        className="fixed left-0 top-[120px] z-40 w-[300px] space-y-10 px-4"
      >
        <div className="space-y-6">
          {CONSTANTS.NAV_OPTIONS.INTERNAL_LINKS.map((option) => (
            <MenuItemScrollLink
              key={option.label}
              option={option}
              toggleMenu={toggleMenu}
            />
          ))}
        </div>
        <div className="space-y-6">
          {CONSTANTS.NAV_OPTIONS.EXTERNAL_LINKS.map((option) => (
            <MenuItemExternalLink
              key={option.label}
              option={option}
              toggleMenu={toggleMenu}
            />
          ))}
        </div>
      </motion.ul>
    </nav>
  );
}
