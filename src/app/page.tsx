import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact/contact-me";
import Hero from "@/components/hero";
import Projects from "@/components/projects/projects";
import Technologies from "@/components/technologies";
import Navbar from "@/components/navbar";
import BackgroundElements from "@/components/background-elements/background-elements";
import Section from "@/components/section";
import FixedFooter from "@/components/fixed-footer";

export default function Home() {
  return (
    <>
      <div className="relative z-10 bg-slate-950">
        <BackgroundElements />
        <header className="relative flex min-h-dvh flex-col items-center justify-center px-4 py-[122px] text-slate-300">
          <Navbar />
          <Hero />
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
      </div>
      <FixedFooter>
        <ContactMe />
      </FixedFooter>
    </>
  );
}
