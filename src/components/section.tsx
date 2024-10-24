import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function Section({ className, children }: Props) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:py-24 md:px-8 md:py-36 xl:px-[7.5rem]">
        {children}
      </div>
    </section>
  );
}
