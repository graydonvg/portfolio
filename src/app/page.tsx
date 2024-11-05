import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact/contact-me";
import Projects from "@/components/projects/projects";
import Technologies from "@/components/technologies/technologies";
import Section from "@/components/section";
import FixedFooter from "@/components/fixed-footer";
import GlobalBackgroundElements from "@/components/background-elements/global-background-elements/global-background-elements";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      {/* Must include a bg color to hide the footer */}
      <div className="relative z-10 bg-background">
        <Header />
        <main>
          <Hero />
          <Section className="bg-card">
            <AboutMe />
          </Section>
          <Section>
            <Projects />
          </Section>
          <Section className="bg-card shadow-[0_60px_50px_rgba(0,0,0,0.75)]">
            <Technologies />
          </Section>
        </main>
        <GlobalBackgroundElements />
      </div>
      <FixedFooter>
        <ContactMe />
      </FixedFooter>
    </>
  );
}
