import TypographyH2 from "./ui/typography/h2";
import TypographyP from "./ui/typography/p";

export default function AboutMe() {
  return (
    <section className="grid grid-cols-2 gap-16">
      <div className="aspect-square w-full rounded-2xl bg-slate-200"></div>
      <div className="flex flex-col justify-center gap-4">
        <TypographyH2>About me</TypographyH2>
        <div>
          <TypographyP>
            I started my career in hospitality as a restaurant manager, but I
            soon craved more intellectual challenges. My love for
            problem-solving, sparked by high school calculus, led me to explore
            applied mathematics and programming languages such as C++, MATLAB,
            and R.
          </TypographyP>
          <TypographyP>
            Curiosity then brought me to web development, where I began with
            HTML, CSS, and JavaScript, eventually falling in love with React and
            Next.js. I thrive on the creative problem-solving that coding
            offers, and I&apos;m always excited to tackle new challenges.
          </TypographyP>
          <TypographyP>
            My goal is to master front-end development and grow into full-stack
            development.
          </TypographyP>
        </div>
      </div>
    </section>
  );
}
