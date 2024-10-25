"use client";

import { useRef } from "react";
import Hero from "./hero";
import Navbar from "./navbar";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  return (
    <header
      ref={headerRef}
      className="relative flex min-h-dvh flex-col items-center justify-center px-4 py-[122px] text-slate-300"
    >
      <Navbar />
      <Hero headerRef={headerRef} />
    </header>
  );
}
