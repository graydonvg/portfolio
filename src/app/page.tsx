import AboutMe from "@/components/about-me";
import Projects from "@/components/projects/projects";
import Technologies from "@/components/technologies/technologies";
import FixedFooter from "@/components/fixed-footer";
import GlobalBackgroundElements from "@/components/background-elements/global-background-elements/global-background-elements";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Toast from "@/components/ui/toast";
import dynamic from "next/dynamic";

const Earth = dynamic(
  () =>
    import("@/components/background-elements/hero-background-elements/earth"),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <>
      {/* Must include a bg color to hide the footer */}
      <div className="relative z-10 bg-background">
        <Header />
        <main>
          <Hero>
            <Earth />
          </Hero>
          <AboutMe />
          <Projects />
          <Technologies />
        </main>
        <GlobalBackgroundElements />
      </div>
      <FixedFooter />
      <Toast />
    </>
  );
}
