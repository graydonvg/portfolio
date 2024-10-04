import { ReactNode } from "react";

export default function TypographyH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[3.5rem]/[3.875rem] font-semibold tracking-tight">
      {children}
    </h2>
  );
}
