"use client";

import dynamic from "next/dynamic";
import LightBeams from "./background-elements/header-background-elements/light-beams";
import Hero from "./hero";
import { NavDrawer } from "./nav-drawer/nav-drawer";
import Navbar from "./navbar";

const Earth = dynamic(
  () =>
    import("@/components/background-elements/header-background-elements/earth"),
  {
    ssr: false,
  },
);

export default function Header() {
  return (
    <header className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 py-[122px]">
      <NavDrawer />
      <Navbar />
      <Hero />
      <LightBeams />
      <Earth />
    </header>
  );
}
