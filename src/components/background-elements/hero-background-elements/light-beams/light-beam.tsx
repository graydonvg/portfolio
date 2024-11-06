type Props = {
  lightBeamNumber: number;
};

export default function LightBeam({ lightBeamNumber }: Props) {
  return (
    <div
      className={`light-beam hero-light-beam-intro light-beam-${lightBeamNumber} pointer-events-none absolute -top-20 left-1/2 h-[130vh] w-[800px] origin-[50%_0%] -translate-x-1/2 bg-light-beam-conic blur-[20px]`}
    />
  );
}
