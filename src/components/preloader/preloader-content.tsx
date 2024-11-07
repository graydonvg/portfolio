import { motion } from "framer-motion";
import {
  PRELOADER_TRANSITION_DELAY_IN_SEC,
  PRELOADER_TRANSITION_DURATION_IN_SEC,
} from "@/lib/constants";
import Typewriter from "./typewriter";
import PreloaderProgress from "./preloader-progress";
import { memo } from "react";

const PreloaderContent = memo(() => {
  return (
    <motion.div
      initial={{ y: "0" }}
      exit={{ y: "-100vh" }}
      transition={{
        delay: PRELOADER_TRANSITION_DELAY_IN_SEC,
        duration: PRELOADER_TRANSITION_DURATION_IN_SEC,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="pointer-events-none fixed inset-0 z-50 flex h-dvh w-screen items-center justify-center bg-black p-12 text-2xl sm:text-3xl"
    >
      <Typewriter>Hello, World!</Typewriter>
      <PreloaderProgress />
    </motion.div>
  );
});

PreloaderContent.displayName = "PreloaderContent";

export default PreloaderContent;
