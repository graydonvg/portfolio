import HeroSection from "@/components/HeroSection";
import ThemeSwitch from "@/components/ThemeSwitch";
import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import { NavDrawer } from "@/components/navDrawer/NavDrawer";

export default function Home() {
  return (
    <>
      <header className="hero-elements-fade-in absolute z-50 flex w-full items-center justify-center px-4 py-7">
        <NavDrawer />
        <ThemeSwitch />
      </header>
      <main className="mx-auto flex max-w-screen-2xl flex-col items-center px-4">
        <HeroSection />
        <div className="flex flex-col items-center gap-8">
          <AboutSection />
          <section>
            <h2 className="w-full text-center text-xl font-semibold md:text-2xl">
              Projects section
            </h2>
          </section>
          <ContactSection />
        </div>
      </main>
    </>
  );
}
