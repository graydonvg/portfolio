import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact/contact-me";
import Projects from "@/components/projects/projects";
import Technologies from "@/components/technologies/technologies";
import Section from "@/components/section";
import FixedFooter from "@/components/fixed-footer";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SmoothScroll from "@/components/smooth-scroll";
import GlobalBackgroundElements from "@/components/global-background-elements/global-background-elements";
import LightBeams from "@/components/global-background-elements/elements/light-beams";
import dynamic from "next/dynamic";

const Earth = dynamic(
  () => import("@/components/global-background-elements/elements/earth"),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative z-10 bg-spaceBackground">
        <header className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 py-[122px]">
          <Navbar />
          <LightBeams />
          <Earth />
          <Hero />
        </header>
        <main>
          <Section className="bg-background">
            <AboutMe />
          </Section>
          <Section>
            <Projects />
          </Section>
          <Section className="bg-background shadow-[0_60px_50px_rgba(0,0,0,0.75)]">
            <Technologies />
          </Section>
        </main>
        <GlobalBackgroundElements />
      </div>
      <FixedFooter>
        <ContactMe />
      </FixedFooter>
    </SmoothScroll>
  );
}
