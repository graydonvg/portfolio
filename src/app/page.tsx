import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact/contact-me";
import Projects from "@/components/projects/projects";
import Technologies from "@/components/technologies";
import BackgroundElements from "@/components/background-elements/background-elements";
import Section from "@/components/section";
import FixedFooter from "@/components/fixed-footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <div className="relative z-10 bg-slate-950">
        <Header />
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
    </>
  );
}
