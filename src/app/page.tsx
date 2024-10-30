import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact/contact-me";
import Projects from "@/components/projects/projects";
import Technologies from "@/components/technologies/technologies";
import Section from "@/components/section";
import FixedFooter from "@/components/fixed-footer";
import SmoothScroll from "@/components/smooth-scroll";
import GlobalBackgroundElements from "@/components/background-elements/global-background-elements/global-background-elements";
import Header from "@/components/header";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative z-10 bg-spaceBackground">
        <Header />
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
