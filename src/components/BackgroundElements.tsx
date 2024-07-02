import Image from "next/image";
import LightBeams from "./LightBeams";
import StarsBackground from "./StarsBackground";
import moon from "../../public/moon.png";

export default function BackgroundElements() {
  return (
    <>
      <Image
        src={moon}
        alt="Image of a moon"
        priority
        height={80}
        width={80}
        sizes="80px"
        className="hero-elements-fade-in absolute left-1/2 top-6 -z-30 -translate-x-1/2 overflow-hidden rounded-full"
        quality={100}
      />
      <LightBeams />
      <StarsBackground />
    </>
  );
}
