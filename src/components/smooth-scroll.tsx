"use client";

import { ReactNode, useEffect } from "react";
import { ReactLenis } from "lenis/react";

type Props = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ReactLenis root>{children}</ReactLenis>;
}
