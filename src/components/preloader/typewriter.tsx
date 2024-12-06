import { TYPEWRITER_DURATION_IN_SEC } from "@/lib/constants";

type Props = {
  children: string;
};

export default function Typewriter({ children }: Props) {
  return (
    <p
      className="w-[13ch] overflow-hidden whitespace-nowrap border-r-[3px] font-mono"
      style={{
        animation: `typing ${TYPEWRITER_DURATION_IN_SEC}s steps(13), blink 0.5s step-end infinite alternate`,
      }}
    >
      {children}
    </p>
  );
}
