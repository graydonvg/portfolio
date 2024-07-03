"use client";

import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import { useEffect, useState } from "react";
import { useDimensions } from "@/hooks/useDimensions";

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
    clipPath: "circle(00px at 40px 52px)",
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

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    if (!isOpen) {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={dimensions?.height}
    >
      <MenuToggle toggleMenu={() => setIsOpen((prev) => !prev)} />
      <motion.div
        className="fixed bottom-0 left-0 top-0 z-20 w-full bg-slate-900/80"
        variants={sidebar}
      >
        <motion.div
          id="nav-drawer-bg"
          className="fixed bottom-0 left-0 top-0 z-30 w-[300px] bg-slate-900"
          variants={sidebar}
        >
          <Navigation toggleMenu={() => setIsOpen((prev) => !prev)} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
