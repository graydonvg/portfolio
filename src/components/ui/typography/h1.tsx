import { ReactNode } from "react";

export function TypographyH1({ children }: { children: ReactNode }) {
  return (
    <h1 className="flex flex-col text-[4.75rem] font-semibold leading-[5.25rem] tracking-tight">
      {children}
    </h1>
  );
}
