import { ReactNode } from "react";

export function TypographyH1({ children }: { children: ReactNode }) {
  return (
    <h1 className="flex scroll-m-20 flex-col text-7xl font-semibold leading-[5.25rem] tracking-tight">
      {children}
    </h1>
  );
}
