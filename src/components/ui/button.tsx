import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex relative items-center justify-center whitespace-nowrap ring-offset-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-base group rounded-full before:absolute before:top-0 before:left-0 before:w-full before:h-full after:absolute after:top-0 after:left-0 after:w-full after:h-full",
  {
    variants: {
      variant: {
        default: "text-white",
        secondary: "text-foreground",
        outlined: "text-foreground",
      },
      size: {
        default: "h-[58px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  showBorderOnHover?: boolean;
  asChild?: boolean;
  children: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      showBorderOnHover = false,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-full overflow-hidden rounded-full transition-transform duration-400 ease-gentle-ease-in-out group-active:scale-x-[0.9] group-active:scale-y-[0.9] hover-hover:group-hover:scale-x-[1.1] hover-hover:group-hover:scale-y-[1.1] hover-hover:group-active:scale-x-[1] hover-hover:group-active:scale-y-[1]",
          )}
        >
          <div
            id="background"
            className={cn("absolute inset-0 m-[1px] rounded-full bg-primary", {
              "border border-foreground bg-secondary":
                variant === "secondary" || variant === "outlined",
            })}
          >
            <div
              id="as-before"
              className={cn(
                "absolute left-1/2 top-1/2 w-[110%] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-secondary pb-[110%] opacity-0 transition-transform duration-400 ease-gentle-ease-in-out hover-hover:group-hover:-translate-x-1/2 hover-hover:group-hover:-translate-y-1/2 hover-hover:group-hover:scale-100 hover-hover:group-hover:opacity-100",
                {
                  "bg-primary":
                    variant === "secondary" || variant === "outlined",
                },
              )}
            ></div>
            <div
              id="as-after"
              className={cn(
                "absolute left-0 top-0 h-full w-full rounded-full bg-secondary opacity-0 transition-opacity duration-300 hover-hover:group-hover:opacity-100 hover-hover:group-hover:delay-300 hover-hover:group-hover:duration-0",
                {
                  "bg-primary":
                    variant === "secondary" || variant === "outlined",
                },
              )}
            ></div>
            {showBorderOnHover && (
              <div
                id="border"
                className={cn(
                  "absolute left-0 top-0 h-full w-full rounded-full",
                  {
                    "border-foreground hover-hover:group-hover:border":
                      variant !== "secondary" && variant !== "outlined",
                  },
                )}
              ></div>
            )}
          </div>
        </div>
        <span
          className={cn(
            "relative px-8 py-4 font-semibold transition-all duration-400 ease-gentle-ease-in-out hover-hover:group-hover:text-foreground",
            {
              "hover-hover:group-hover:text-white":
                variant === "secondary" || variant === "outlined",
            },
          )}
        >
          {children}
        </span>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
