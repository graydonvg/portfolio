import { Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: StaticImageData;
  inspiration?: {
    name: string;
    link: string;
  };
  designer?: {
    name: string;
    link: string;
  };
};

export default function ProjectCard(project: Props) {
  return (
    <div
      key={project.title}
      className="card flex flex-col gap-2 rounded-md p-4 md:flex-row md:gap-4"
    >
      <div className="flex-1">
        <Link href="https://my-store-henna.vercel.app/" target="_blank">
          <Image
            src={project.image}
            alt="Project screenshot"
            className="rounded-md"
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <div className="mt-2 space-y-2 font-light leading-tight">
          <p>{project.description}</p>
          {project.inspiration ? (
            <p>
              Inspired by{" "}
              <Link
                href={project.inspiration?.link}
                target="_blank"
                className="text-blue-400 underline hover-hover:hover:text-blue-500"
              >
                {project.inspiration?.name}
              </Link>
            </p>
          ) : null}
          {project.designer ? (
            <p>
              Inspired by{" "}
              <Link
                href={project.designer?.link}
                target="_blank"
                className="text-blue-400 underline hover-hover:hover:text-blue-500"
              >
                {project.designer?.name}
              </Link>
            </p>
          ) : null}
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="shadow-inner-[0_0_0_1px_rgba(186, 215, 247, 0.12)] flex items-center justify-center rounded-full bg-slate-900 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-slate-400 shadow-[inset_0_0_0_1px] shadow-slate-700/60 sm:text-sm"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex gap-4">
          <button className="flex min-w-fit flex-1 items-center justify-center gap-2 rounded-md bg-slate-300 px-2 py-1 text-lg font-medium text-slate-950">
            <span className="h-[18px] w-[18px]">
              <Github className="h-full w-full" />
            </span>
            Repository
          </button>
          <button className="min-w-fit flex-1 rounded-md bg-indigo-700 px-2 py-1 text-lg font-medium">
            Visit
          </button>
        </div>
      </div>
    </div>
  );
}
