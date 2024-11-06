import { motion } from "framer-motion";
import {
  PRELOADER_TRANSITION_DELAY_IN_SEC,
  PRELOADER_TRANSITION_DURATION_IN_SEC,
  TYPEWRITER_DURATION_IN_SEC,
} from "@/lib/constants";
import { useEarthLoading } from "@/context/earth-loading-context";
import Typewriter from "./typewriter";

export default function PreloaderContent() {
  const { loadingProgress } = useEarthLoading();

  return (
    <motion.div
      initial={{ y: "0" }}
      exit={{ y: "-100vh" }}
      transition={{
        delay: PRELOADER_TRANSITION_DELAY_IN_SEC,
        duration: PRELOADER_TRANSITION_DURATION_IN_SEC,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="pointer-events-none fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black p-12 text-2xl text-foreground sm:text-3xl"
    >
      <Typewriter duration={TYPEWRITER_DURATION_IN_SEC}>
        Hello, World!
      </Typewriter>
      <span className="absolute bottom-6 right-6 text-muted-foreground">
        {loadingProgress.toFixed(0)}%
      </span>
    </motion.div>
  );
}
