import { SVGMotionProps, motion } from "framer-motion";

function Path(props: SVGMotionProps<SVGPathElement>) {
  return <motion.path strokeWidth="2" {...props} />;
}

type MenuToggleProps = {
  toggle: () => void;
};

export function MenuToggle({ toggle }: MenuToggleProps) {
  return (
    <button
      className="fixed left-2 top-6 z-50 flex h-fit cursor-pointer select-none items-center justify-center rounded-full border-none p-2 outline-none"
      onClick={toggle}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 22 19"
        className="fill-yellow-200 stroke-yellow-200 dark:fill-slate-400 dark:stroke-slate-400"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}
