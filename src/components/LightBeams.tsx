export default function LightBeams() {
  return (
    <div className="hero-elements-fade-in pointer-events-none absolute inset-0 -z-40 h-full w-full overflow-hidden">
      {/* Light beams for larger screens */}
      <div className="hidden sm:flex">
        {Array.from(Array(5)).map((_, i) => (
          <div
            key={i}
            className={`light-beam-pulsate-animation light-beam-transform-animation light-beam-${i + 1} pointer-events-none absolute left-1/2 top-5 h-[calc(100svh+5%)] w-[800px] origin-[50%_0%] -translate-x-1/2 bg-moon-light-conic blur-[20px]`}
          ></div>
        ))}
      </div>

      {/* Light beams for mobile screens */}
      <div className="flex sm:hidden">
        {Array.from(Array(3)).map((_, i) => (
          <div
            key={i}
            className={`light-beam-pulsate-animation light-beam-transform-animation light-beam-${i + 1} pointer-events-none absolute left-1/2 top-5 h-[calc(100svh+1%)] w-[800px] origin-[50%_0%] -translate-x-1/2 bg-moon-light-conic blur-[20px]`}
          ></div>
        ))}
      </div>
    </div>
  );
}
