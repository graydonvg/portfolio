"use client";

import { AnimatePresence } from "framer-motion";
import usePreloaderStatus from "@/hooks/use-preloader-status";
import { useLenis } from "lenis/react";
import { useEffect } from "react";
import PreloaderContent from "./preloader-content";

export default function Preloader() {
  const isLoading = usePreloaderStatus();
  const lenis = useLenis();

  useEffect(() => {
    if (isLoading) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    }

    if (!isLoading) {
      lenis?.start();
      document.body.style.overflow = "visible";
      window.scrollTo(0, 0);
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "visible";
    };
  }, [isLoading, lenis]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && <PreloaderContent />}
    </AnimatePresence>
  );
}
