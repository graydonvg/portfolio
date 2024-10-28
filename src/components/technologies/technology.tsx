"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  name: string;
  iconPath: string;
};

export default function Technology({ name, iconPath }: Props) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        ease: "easeIn",
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      }}
      viewport={{ once: true }}
      className="flex aspect-square flex-col items-center justify-center gap-4"
    >
      <div className="relative aspect-square w-full">
        <Image src={iconPath} alt={name} fill />
      </div>
      <span className="text-center text-sm font-semibold md:text-base lg:text-lg">
        {name}
      </span>
    </motion.div>
  );
}
