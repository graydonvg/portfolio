import { ReactNode } from "react";

export function TypographyP({ children }: { children: ReactNode }) {
  return (
    <p className="text-pretty text-[1.125rem] leading-7 [&:not(:first-child)]:mt-6">
      {children}
    </p>
  );
}
