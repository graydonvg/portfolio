"use client";

import { motion } from "framer-motion";

export default function AnimatedButton() {
  return (
    <motion.button
      className="radial-gradient relative rounded-md px-6 py-2 shadow-sm"
      initial={{ "--x": "100%", scale: 1 } as any}
      animate={{ "--x": "-100%" } as any}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
    >
      <span className="linear-mask relative block h-full w-full text-lg font-light tracking-wide text-slate-300">
        Contact me
      </span>
      <span className="linear-overlay absolute inset-0 block rounded-md p-px" />
    </motion.button>
  );
}
