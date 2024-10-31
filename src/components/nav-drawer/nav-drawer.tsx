"use client";

import { useDimensions } from "@/hooks/use-dimension";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MenuToggle } from "./menu-toggle";
import { Navigation } from "./navigation";
import { useLenis } from "lenis/react";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 40px 52px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export function NavDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const element =
    typeof window !== "undefined"
      ? document.getElementById("nav-drawer-bg")
      : null;
  const dimensions = useDimensions(element);
  const lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    }

    if (!isOpen) {
      lenis?.start();
      document.body.style.overflow = "visible";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "visible";
    };
  }, [isOpen, lenis]);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={dimensions?.height}
    >
      <MenuToggle toggleMenu={() => setIsOpen((prev) => !prev)} />
      <motion.div
        className="fixed bottom-0 left-0 top-0 z-20 w-full bg-zinc-900/80"
        variants={sidebar}
      >
        <motion.div
          id="nav-drawer-bg"
          className="fixed bottom-0 left-0 top-0 z-30 w-[300px] bg-zinc-900"
          variants={sidebar}
        >
          <Navigation toggleMenu={() => setIsOpen((prev) => !prev)} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
