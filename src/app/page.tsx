import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact/contact-me";
import Projects from "@/components/projects/projects";
import Technologies from "@/components/technologies/technologies";
import Section from "@/components/section";
import FixedFooter from "@/components/fixed-footer";
import GlobalBackgroundElements from "@/components/background-elements/global-background-elements/global-background-elements";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      {/* Must include a bg color to hide the footer */}
      <div className="relative z-10 bg-background">
        <Header />
        <main>
          <Section className="bg-card">
            <AboutMe />
          </Section>
          <Section>
            <Projects />
          </Section>
          <Section className="bg-card">
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
