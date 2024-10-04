import { ReactNode } from "react";

export default function TypographyH1({ children }: { children: ReactNode }) {
  return (
    <h1 className="flex flex-col text-[4.75rem]/[5.25rem] font-semibold tracking-tight">
      {children}
    </h1>
  );
}
