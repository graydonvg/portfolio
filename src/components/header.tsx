"use client";

import dynamic from "next/dynamic";
import LightBeams from "./background-elements/header-background-elements/light-beams";
import Hero from "./hero";
import { NavDrawer } from "./nav-drawer/nav-drawer";
import Navbar from "./navbar";
import { useEarthLoading } from "@/context/earth-loading-context";

const Earth = dynamic(
  () =>
    import("@/components/background-elements/header-background-elements/earth"),
  {
    ssr: false,
  },
);

export default function Header() {
  const { isEarthLoading } = useEarthLoading();

  return (
    <header className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-4 py-[122px]">
      {!isEarthLoading && (
        <>
          <NavDrawer />
          <Navbar />
          <Hero />
          <LightBeams />
        </>
      )}
      <Earth />
    </header>
  );
}
