import { SVGMotionProps, motion } from "framer-motion";

function Path(props: SVGMotionProps<SVGPathElement>) {
  return <motion.path strokeWidth="2" {...props} />;
}

type MenuToggleProps = {
  onMenuClick: () => void;
};

export function MenuToggle({ onMenuClick }: MenuToggleProps) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
      className="absolute left-4 top-7 z-50 cursor-pointer select-none rounded-full border-none outline-none lg:hidden"
      onClick={onMenuClick}
      aria-label="navigation menu button"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        className="fill-muted stroke-muted"
      >
        <Path
          variants={{
            closed: { d: "M 4 6 L 20 6" },
            open: { d: "M 6 9 L 18 21" },
          }}
        />
        <Path
          d="M 4 12 L 20 12"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 4 18 L 20 18" },
            open: { d: "M 6 21 L 18 9" },
          }}
        />
      </svg>
    </motion.button>
  );
}
