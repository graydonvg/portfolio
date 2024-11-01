"use client";

import { TYPEWRITER_DURATION_IN_MS } from "@/lib/constants";
import { CSSProperties, useEffect, useState } from "react";

type Props = {
  textArray: string[];
  isEarthLoading: boolean;
};

export default function Typewriter({ textArray, isEarthLoading }: Props) {
  const typewriterDuration = TYPEWRITER_DURATION_IN_MS / 1000;
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (isEarthLoading || textIndex === textArray.length - 1) return;

    setTextIndex((prevIndex) => prevIndex + 1);
  }, [textIndex, textArray.length, isEarthLoading]);

  return (
    <div className="top-1/2 z-50 text-lg text-muted sm:text-3xl">
      {/* Setting the key to textIndex forces React to treat the p element as a new element on each text change, which effectively resets the CSS animation. */}
      <p
        key={textIndex}
        className="typewriter w-fit overflow-hidden whitespace-nowrap border-r-8 tracking-[0.15em]"
        style={
          {
            "--typewriter-duration": `${typewriterDuration}s`,
          } as CSSProperties
        }
      >
        {textArray[textIndex]}
      </p>
    </div>
  );
}
