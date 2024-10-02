import { ReactNode } from "react";

export function TypographyH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="scroll-m-20 text-[3.5rem] font-semibold leading-[3.75rem] tracking-tight">
      {children}
    </h2>
  );
}
