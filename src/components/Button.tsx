import { type ButtonHTMLAttributes, type FC, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils/cn";
import LoaderCircle from "../assets/svgs/LoaderCircle";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;

  isDisabled?: boolean;
  isLoading?: boolean;
  isIcon?: boolean;

  variant?: "DEFAULT" | "primary";
}

const button = cva(
  "w-full flex justify-center items-center gap-x-2 py-3 px-5 rounded-xl hover:opacity-90 active:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 select-none border",
  {
    variants: {
      variant: {
        DEFAULT: "bg-light text-neutral-900 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-800", // prettier-ignore
        primary: "bg-primary text-white dark:bg-primary dark:text-white border-primary dark:border-primary", // prettier-ignore
      },
    },
    defaultVariants: {
      variant: "DEFAULT",
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
      isIcon,
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
        className={cn(
          button({ className, variant }),
          isIcon && "px-3 w-auto max-w-max max-h-max"
        )}
        disabled={isDisabled || isLoading}
        {...props}
      >
        {isLoading && <LoaderCircle className="animate-spin" />}

        {startContent && <div>{startContent}</div>}
        {children}
        {endContent && <div>{endContent}</div>}
      </button>
    );
  }
);
