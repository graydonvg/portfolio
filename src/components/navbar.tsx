"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { LINKS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Navbar() {
  function scrollToContactForm() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className="absolute left-0 top-0 flex w-full items-center justify-between px-20 py-8"
    >
      <span className="text-xl/[1.875rem]">Graydon von Gossler</span>
      <div className="flex gap-4">
        <Link href={LINKS.GITHUB} target="_blank" rel="noopener noreferrer">
          <Button variant="outline">GitHub</Button>
        </Link>
        <Link href={LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer">
          <Button variant="outline">LinkedIn</Button>
        </Link>
        <Button onClick={scrollToContactForm}>Contact me</Button>
      </div>
    </motion.nav>
  );
}
