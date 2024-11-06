"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { projects } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const MotionCard = motion.create(Card);

type Props = {
  project: (typeof projects)[0];
  isEven: boolean;
};

export default function ProjectCard({ project, isEven }: Props) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <MotionCard
      ref={cardRef}
      style={{
        scale,
      }}
      className="z-10 grid grid-cols-1 gap-6 p-4 sm:gap-8 md:grid-cols-2 md:p-8 lg:gap-12 lg:p-12"
    >
      <div
        className={cn("order-1", {
          "md:order-2": !isEven,
        })}
      >
        <Image
          src={project.image}
          alt={`${project.title} mockup`}
          className="rounded-md"
          priority
          sizes="(min-width: 1280px) 576px, (min-width: 768px) 526px, calc(100vw - 64px)"
        />
      </div>
      <div
        className={cn("order-2 flex flex-col items-start", {
          "md:order-1": !isEven,
        })}
      >
        <CardHeader className="p-0 pb-6">
          <CardTitle className="md:text4xl text-3xl">{project.title}</CardTitle>
          <CardDescription className="text-pretty pt-[10px] text-base/5 text-card-foreground">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="m-0 p-0">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-[inset_0_0_0_1px] md:text-sm/5"
              >
                {tag}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex h-full w-full flex-wrap items-end gap-4 p-0 pt-8 sm:pt-12">
          <Link
            tabIndex={-1}
            href={project.links.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="outlined" className="w-full">
              Repository
            </Button>
          </Link>
          <Link
            tabIndex={-1}
            href={project.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button showBorderOnHover className="w-full">
              View website
            </Button>
          </Link>
        </CardFooter>
      </div>
    </MotionCard>
  );
}
