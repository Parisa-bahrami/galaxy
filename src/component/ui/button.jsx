/* eslint-disable react/prop-types */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../../utils/cn";

const buttonVariants = cva(
  "relative outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:border-transparent transition-all duration-300",
  {
    variants: {
      variant: {
        primary:
          "bg-gray-900 text-white border border-gray-800 hover:bg-gray-800 hover:border-gray-600",
        secondary:
          "bg-gray-700 text-white border border-gray-600 hover:bg-gray-600 hover:border-gray-500",
        outline:
          "bg-transparent text-gray-900 dark:text-gray-400 border border-gray-800 hover:bg-gray-800 hover:text-white",
        link: "bg-transparent text-gray-900 underline underline-offset-4 hover:text-gray-700",
        transparent: "bg-transparent disabled:bg-opacity-50",
        gradient:
          "z-0 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:shadow-glowingButton",
      },
      size: {
        sm: "px-3 py-1",
        md: "px-5 py-2.5",
        lg: "px-6 py-3",
      },
      absorb: {
        true: "absorb-button",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      absorb: false, // Ensure absorb is not applied by default
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, absorb, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, absorb, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
