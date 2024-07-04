import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  label: string;
  animationDelay: number;
  className: string;
  onClick: () => void;
};

export default function AnimatedButton({
  label,
  animationDelay,
  className,
  onClick,
}: Props) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "hero-elements-grow-unblur relative w-fit rounded-md px-4 py-2 shadow-sm sm:px-6",
        className,
      )}
      initial={{ "--x": "100%" } as any}
      animate={{ "--x": "-100%" } as any}
      whileTap={{ scale: 0.97 }}
      transition={{
        delay: animationDelay,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 0.1,
        },
      }}
    >
      <span className="hero-button-linear-overlay absolute inset-0 block rounded-md p-px" />
      <span className="hero-button-linear-mask relative block h-full w-full text-lg font-light tracking-wide">
        {label}
      </span>
    </motion.button>
  );
}
