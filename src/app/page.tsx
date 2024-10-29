import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact/contact-me";
import Projects from "@/components/projects/projects";
import Technologies from "@/components/technologies/technologies";
import Section from "@/components/section";
import FixedFooter from "@/components/fixed-footer";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SmoothScroll from "@/components/smooth-scroll";
import HeaderBackgroundElements from "@/components/background-elements/header-background-elements";
import GlobalBackgroundElements from "@/components/background-elements/global-background-elements";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative z-10 bg-zinc-950">
        <header className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 py-[122px] text-zinc-300">
          <Navbar />
          <Hero />
          <HeaderBackgroundElements />
        </header>
        <main>
          <Section className="border-b-4 border-t-4 border-primary bg-background">
            <AboutMe />
          </Section>
          <Section>
            <Projects />
          </Section>
          <Section className="border-b-4 border-t-4 border-primary bg-background shadow-[0_60px_50px_rgba(0,0,0,0.75)]">
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
