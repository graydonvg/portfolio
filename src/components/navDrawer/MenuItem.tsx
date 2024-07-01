import { motion } from "framer-motion";
import { Github, Linkedin, NotebookText } from "lucide-react";
import Link from "next/link";

function getIcon(icon: string, strokeWidth: number) {
  const icons = {
    // about: <User strokeWidth={strokeWidth} />,
    // projects: <Palette strokeWidth={strokeWidth} />,
    // contact: <Phone strokeWidth={strokeWidth} />,
    github: <Github strokeWidth={strokeWidth} />,
    linkedin: <Linkedin strokeWidth={strokeWidth} />,
    resume: <NotebookText strokeWidth={strokeWidth} />,
  };

  return icons[icon as keyof typeof icons];
}

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
    link: string;
    icon: string;
    newTab: boolean;
  };
};

export function MenuItem({ option }: Props) {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1, cursor: "pointer" }}
      whileTap={{ scale: 0.95 }}
      className="z-50 list-none"
    >
      <Link
        href={option.link}
        target={option.newTab ? "_blank" : "_self"}
        className="flex items-center gap-4 text-2xl"
      >
        <span>{getIcon(option.icon, 2)}</span>
        <span className="capitalize">{option.label}</span>
      </Link>
    </motion.li>
  );
}
