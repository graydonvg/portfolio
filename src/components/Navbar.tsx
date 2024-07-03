"use client";

import { NavDrawer } from "@/components/navDrawer/NavDrawer";
import { CONSTANTS } from "@/constants";
import emitter from "@/lib/eventEmitter";
import Link from "next/link";

export default function Navbar() {
  function scrollToSection(scrollTo: string) {
    emitter.emit(scrollTo);
  }

  return (
    <header className="hero-elements-fade-in absolute z-50 w-full px-8 py-7">
      <div className="block md:hidden">
        <NavDrawer />
      </div>
      <div className="flex justify-between">
        <nav className="hidden space-x-8 text-lg md:block">
          {CONSTANTS.NAV_OPTIONS.INTERNAL_LINKS.map((option) => (
            <span
              key={option.label}
              onClick={() => scrollToSection(option.scrollTo)}
              className="cursor-pointer"
            >
              {option.label}
            </span>
          ))}
        </nav>
        <nav className="hidden space-x-8 text-lg md:block">
          {CONSTANTS.NAV_OPTIONS.EXTERNAL_LINKS.map((option) => (
            <Link
              key={option.label}
              href={option.link}
              target={option.newTab ? "_blank" : "_self"}
              className="underline-offset-4"
            >
              {option.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
