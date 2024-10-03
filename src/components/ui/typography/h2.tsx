import { ReactNode } from "react";

export default function TypographyH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[3.5rem] font-semibold leading-[3.875rem] tracking-tight">
      {children}
    </h2>
  );
}
