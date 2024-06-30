import ThemeSwitch from "./ThemeSwitch";
import { NavDrawer } from "./navDrawer/NavDrawer";

export default function Navbar() {
  return (
    <header className="fixed z-50 flex w-full animate-fade-in-hero-lights-and-icons items-center justify-center py-7">
      <NavDrawer />
      <ThemeSwitch />
    </header>
  );
}
