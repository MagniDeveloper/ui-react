import React, { type ButtonHTMLAttributes, type FC, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";
import LoaderCircle from "@/assets/svgs/LoaderCircle";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  /*
    The content to be displayed at the start of the button.

    @default null
    
  */
  startContent?: React.ReactNode;

  /*
    The content to be displayed at the end of the button.

    @default null
  */
  endContent?: React.ReactNode;

  /*
    Whether the button should be disabled.

    @default false
  */
  isDisabled?: boolean;

  /*
    Whether the button should display a loading spinner.

    @default false
  */
  isLoading?: boolean;
}

const button = cva(
  [
    "w-full",
    "max-w-max",
    "inline-block",
    "flex",
    "justify-center",
    "items-center",
    "gap-x-2",
    "py-3",
    "px-5",
    "text-base",
    "rounded-xl",
    "hover:opacity-90",
    "active:opacity-80",
    "disabled:opacity-50",
    "focus:outline-none",
    "focus:ring-2",
    "select-none",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-light",
          "text-neutral-900",
          "dark:bg-neutral-900",
          "border",
          "border-neutral-300",
          "dark:border-neutral-800",
          "focus:ring-primary",
        ],
        primary: [
          "bg-primary",
          "text-white",
          "dark:bg-primary",
          "dark:text-white",
          "focus:ring-primary/80",
        ],
      },
      size: {
        sm: ["text-sm", "py-2", "px-4"],
        md: ["text-base", "py-3", "px-5"],
        lg: ["text-lg", "py-4", "px-6"],
        icon: ["px-3", "w-auto", "max-w-max", "max-h-max"],
        full: ["w-full", "max-w-full"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      isDisabled,
      startContent,
      endContent,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(button({ className, variant, size }))}
        disabled={isDisabled || isLoading}
        {...props}
      >
        {isLoading && <LoaderCircle className="animate-spin" />}

        {startContent}
        {children}
        {endContent}
      </button>
    );
  }
);

Button.displayName = "Button";
