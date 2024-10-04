import { ReactNode } from "react";

export default function TypographyP({ children }: { children: ReactNode }) {
  return (
    <p className="text-[1.125rem]/7 [&:not(:first-child)]:mt-6">{children}</p>
  );
}
