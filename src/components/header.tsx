"use client";

import { useRef } from "react";
import Hero from "./hero";
import Navbar from "./navbar";
import { useScroll, useTransform } from "framer-motion";

export default function Header() {
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0dvh", "-40dvh"]);

  return (
    <header
      ref={headerRef}
      className="relative flex min-h-dvh flex-col items-center justify-center px-4 py-[122px] text-slate-300"
    >
      <Navbar />
      <Hero y={y} />
    </header>
  );
}
