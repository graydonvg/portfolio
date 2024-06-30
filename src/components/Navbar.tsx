import ThemeSwitch from "./ThemeSwitch";
import { NavDrawer } from "./navDrawer/NavDrawer";

export default function Navbar() {
  return (
    <header className="hero-elements-fade-in fixed z-50 flex w-full items-center justify-center py-7">
      <NavDrawer />
      <ThemeSwitch />
    </header>
  );
}
