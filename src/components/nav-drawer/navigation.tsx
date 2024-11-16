import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";
import { navOptions } from "@/lib/constants";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

type Props = {
  onMenuClick: () => void;
};

export function Navigation({ onMenuClick }: Props) {
  return (
    <nav className="fixed left-0 top-[120px] z-40 w-[300px] px-4">
      <motion.ul variants={variants} className="space-y-6">
        {navOptions.map((option) => (
          <MenuItem
            key={option.label}
            option={option}
            onMenuClick={onMenuClick}
          />
        ))}
      </motion.ul>
    </nav>
  );
}
