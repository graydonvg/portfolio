"use client";

import dynamic from "next/dynamic";
import LightBeams from "./elements/light-beams";

const Earth = dynamic(
  () => import("@/components/background-elements/elements/earth"),
  {
    ssr: false,
  },
);

export default function HeaderBackgroundElements() {
  return (
    <>
      <Earth />
      <LightBeams />
    </>
  );
}
