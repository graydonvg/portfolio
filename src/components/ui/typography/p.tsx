import { ReactNode } from "react";

export function TypographyP({ children }: { children: ReactNode }) {
  return <p className="text-xl [&:not(:first-child)]:mt-6">{children}</p>;
}
