// "use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

type Props = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: Props) {
  return <ReactLenis root>{children}</ReactLenis>;
}
