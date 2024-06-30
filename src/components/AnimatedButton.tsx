"use client";

import { motion } from "framer-motion";

export default function AnimatedButton() {
  return (
    <motion.button
      className="hero-button-radial-gradient hero-button-fade-in relative w-fit rounded-md px-6 py-2 shadow-sm"
      initial={{ "--x": "100%" } as any}
      animate={{ "--x": "-100%" } as any}
      whileTap={{ scale: 0.97 }}
      transition={{
        delay: 1.05,
        // delay: 1.55,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 0.1,
        },
      }}
    >
      <span className="hero-button-linear-overlay absolute inset-0 block rounded-md p-px" />
      <span className="hero-button-linear-mask relative block h-full w-full text-lg font-light tracking-wide text-slate-300">
        Contact me
      </span>
    </motion.button>
  );
}
