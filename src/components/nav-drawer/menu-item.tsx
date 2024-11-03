import { wait } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: "flex",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    display: "none",
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type Props = {
  option: {
    label: string;
    link?: string;
    scrollTo?: () => void;
  };
  onMenuClick: () => void;
};

export function MenuItem({ option, onMenuClick }: Props) {
  async function handleScrollTo() {
    onMenuClick();
    await wait(300);
    option.scrollTo?.();
  }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1, cursor: "pointer" }}
      whileTap={{ scale: 0.95 }}
      className="z-50 list-none pl-2 text-2xl"
    >
      {option.link ? (
        <Link href={option.link} onClick={onMenuClick} target="_blank">
          {option.label}
        </Link>
      ) : (
        <button onClick={handleScrollTo}>{option.label}</button>
      )}
    </motion.li>
  );
}
