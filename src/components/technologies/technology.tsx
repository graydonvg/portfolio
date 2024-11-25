"use client";

import { motion } from "framer-motion";
import HTML5 from "../icons/html5";
import CSS from "../icons/css";
import JavaScript from "../icons/javascript";
import MUI from "../icons/mui";
import Nextjs from "../icons/nextjs";
import React from "../icons/react";
import Redux from "../icons/redux";
import Shadcn from "../icons/shadcn";
import Supabase from "../icons/supabase";
import TailwindCSS from "../icons/tailwind";
import TypeScript from "../icons/typescript";
import VSCode from "../icons/vs-code";

const ICONS = {
  html: HTML5,
  css: CSS,
  tailwind: TailwindCSS,
  javascript: JavaScript,
  typescript: TypeScript,
  react: React,
  netxjs: Nextjs,
  redux: Redux,
  supabase: Supabase,
  mui: MUI,
  shadcn: Shadcn,
  vscode: VSCode,
};

type Props = {
  name: string;
  icon: string;
};

export default function Technology({ name, icon }: Props) {
  const Component = ICONS[icon as keyof typeof ICONS];

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      }}
      viewport={{ once: true }}
      className="flex aspect-square flex-col items-center justify-center gap-4"
    >
      <Component height="100%" width="100%" />
      <span className="text-center text-sm font-semibold md:text-base lg:text-lg">
        {name}
      </span>
    </motion.div>
  );
}
