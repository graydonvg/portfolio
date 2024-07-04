import { CONSTANTS } from "@/constants";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

function getIcon(icon: string, className: string, strokeWidth: number) {
  const icons = {
    github: <Github strokeWidth={strokeWidth} className={className} />,
    linkedin: <Linkedin strokeWidth={strokeWidth} className={className} />,
  };

  return icons[icon as keyof typeof icons];
}

export default function Navbar() {
  return (
    <header className="hero-elements-fade-in absolute z-50 w-full px-4 py-7">
      <nav className="flex justify-between space-x-4 md:justify-end">
        {CONSTANTS.NAV_OPTIONS.map((option) => (
          <Link
            key={option.label}
            href={option.link}
            target="_blank"
            className="shadow-inner-[0_0_0_1px_rgba(186, 215, 247, 0.12)] flex items-center justify-center gap-2 rounded-full bg-slate-800/60 p-3 text-lg text-slate-400 shadow-[inset_0_0_0_1px] shadow-slate-700/60 sm:px-4 sm:py-1"
          >
            <span className="h-6 w-6 sm:w-[18px]">
              {getIcon(option.icon, "h-full w-full", 2)}
            </span>
            <span className="hidden capitalize sm:inline">{option.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
