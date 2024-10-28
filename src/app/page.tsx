import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact/contact-me";
import Projects from "@/components/projects/projects";
import Technologies from "@/components/technologies/technologies";
import BackgroundElements from "@/components/background-elements/background-elements";
import Section from "@/components/section";
import FixedFooter from "@/components/fixed-footer";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/smooth-scroll";

const Earth = dynamic(() => import("@/components/earth"), {
  ssr: false,
});

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative z-10 bg-slate-950">
        <header className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 py-[122px] text-slate-300">
          <Navbar />
          <Hero />
          <Earth />
        </header>
        <main>
          <Section className="bg-background">
            <AboutMe />
          </Section>
          <Section>
            <Projects />
          </Section>
          <Section className="bg-background">
            <Technologies />
          </Section>
        </main>
        <BackgroundElements />
      </div>
      <FixedFooter>
        <ContactMe />
      </FixedFooter>
    </SmoothScroll>
  );
}
