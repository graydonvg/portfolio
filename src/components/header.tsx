"use client";

import { NavDrawer } from "./nav-drawer/nav-drawer";
import Navbar from "./navbar";
import { useEarthLoading } from "@/context/earth-loading-context";

export default function Header() {
  const { isEarthLoading } = useEarthLoading();

  return (
    <header>
      <Navbar />
      {!isEarthLoading && (
        // NavDrawer sets overflow = "visible"
        // Prevent overflow = "visible" before loading screen is complete
        <>
          <NavDrawer />
        </>
      )}
    </header>
  );
}
