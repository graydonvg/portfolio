import { ReactNode } from "react";

export default function TypographyH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text text-[clamp(2.5rem,5vw+1rem,3.5rem)]/[clamp(3rem,5vw+1.5rem,3.875rem)] font-semibold tracking-tight">
      {children}
    </h2>
  );
}
