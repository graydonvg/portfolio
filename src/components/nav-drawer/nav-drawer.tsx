"use client";

import { useElementDimensions } from "@/hooks/use-element-dimension";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MenuToggle } from "./menu-toggle";
import { Navigation } from "./navigation";
import { useLenis } from "lenis/react";
import usePreloaderStatus from "@/hooks/use-preloader-status";

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
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const isLoading = usePreloaderStatus();
  const navDrawerBg =
    typeof window !== "undefined"
      ? document.getElementById("nav-drawer-bg")
      : null;
  const dimensions = useElementDimensions(navDrawerBg);

  useEffect(() => {
    // Prevent overflow = "visible" before loading screen is complete
    if (isLoading) return;

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
  }, [isLoading, isOpen, lenis]);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={dimensions?.height}
    >
      <MenuToggle onMenuClick={() => setIsOpen((prev) => !prev)} />
      <motion.div
        className="fixed bottom-0 left-0 top-0 z-20 w-full bg-zinc-900/80"
        variants={sidebar}
      >
        <motion.div
          id="nav-drawer-bg"
          className="fixed bottom-0 left-0 top-0 z-30 w-[300px] bg-zinc-900"
          variants={sidebar}
        >
          <Navigation onMenuClick={() => setIsOpen((prev) => !prev)} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
