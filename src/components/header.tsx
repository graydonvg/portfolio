"use client";

import usePreloaderStatus from "@/hooks/use-preloader-status";
import { NavDrawer } from "./nav-drawer/nav-drawer";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { HEADER_DELAY_IN_SEC } from "@/lib/constants";

export default function Header() {
  const isLoading = usePreloaderStatus();

  return (
    <>
      {!isLoading && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            delay: HEADER_DELAY_IN_SEC,
            duration: 0.5,
          }}
        >
          <Navbar />
          <NavDrawer />
        </motion.header>
      )}
    </>
  );
}
