import { TYPEWRITER_DURATION_IN_SEC } from "@/lib/constants";

type Props = {
  children: string;
};

export default function Typewriter({ children }: Props) {
  return (
    <div className="relative">
      <p className="tracking-[0.15em] text-muted">
        {children.split("").map((char, index) => {
          const blinkDelay =
            (index / children.length) * TYPEWRITER_DURATION_IN_SEC;

          return (
            <span key={index} className="relative">
              <span
                style={{
                  opacity: 0,
                  animation: `reveal-character 0s ${blinkDelay}s forwards`,
                }}
              >
                {char}
              </span>
              <span
                style={{
                  opacity: 0,
                  animation: `character-blinker 0.05s ${blinkDelay}s forwards`,
                }}
                className="absolute right-0 top-0 h-full w-2 bg-foreground"
              />
            </span>
          );
        })}
      </p>
      <span
        style={{
          opacity: 0,
          animation: `end-blinker 1s ${TYPEWRITER_DURATION_IN_SEC}s infinite step-end`,
        }}
        className="absolute -right-2 top-0 h-full w-2 bg-foreground"
      />
    </div>
  );
}
