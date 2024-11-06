import { CSSProperties, ReactNode } from "react";

type Props = {
  duration: number;
  children: ReactNode;
};

export default function Typewriter({ duration, children }: Props) {
  return (
    <div>
      <p
        className="typewriter w-fit overflow-hidden whitespace-nowrap border-r-8 tracking-[0.15em]"
        style={
          {
            "--typewriter-duration": `${duration}s`,
          } as CSSProperties
        }
      >
        {children}
      </p>
    </div>
  );
}
