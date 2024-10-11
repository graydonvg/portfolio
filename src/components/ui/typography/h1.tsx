import { ReactNode } from "react";

export default function TypographyH1({ children }: { children: ReactNode }) {
  return (
    <h1 className="flex flex-col text-[clamp(1.5rem,5vw+0.5rem,4.75rem)]/[clamp(2.25rem,5vw+1rem,5.25rem)] font-semibold tracking-tight">
      {children}
    </h1>
  );
}
