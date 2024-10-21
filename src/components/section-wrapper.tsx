import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SectionWrapper({ children }: Props) {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-24 sm:pt-24 md:px-8 md:py-36 xl:px-[7.5rem]">
      {children}
    </section>
  );
}
