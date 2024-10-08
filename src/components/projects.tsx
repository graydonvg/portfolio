import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import TypographyH2 from "./ui/typography/h2";
import { projects } from "@/constants";

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center gap-16">
      <TypographyH2>Projects</TypographyH2>

      {projects.map((project, index) => (
        <Card key={index} className="grid grid-cols-2 bg-slate-200">
          <div className="py-8 pl-8">
            <Image
              src={project.image}
              alt="Project screenshot"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col items-start">
            <CardHeader className="p-8 pb-6">
              <CardTitle className="text-4xl">{project.title}</CardTitle>
              <CardDescription className="text-pretty pt-[10px] text-base/5 text-foreground">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="m-0 p-8 pt-0">
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="flex items-center justify-center rounded-full px-3 py-1 text-[0.875rem]/5 font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_0_0_1px]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex h-full w-full items-end gap-4 p-8 pt-0">
              <Button variant="outline" className="flex-1">
                Repository
              </Button>
              <Button className="flex-1">View website</Button>
            </CardFooter>
          </div>
        </Card>
      ))}
    </section>
  );
}
