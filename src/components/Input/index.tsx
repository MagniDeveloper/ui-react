import React, { type InputHTMLAttributes, type FC, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {
  /*
    The label to be displayed above the input.

    @default null
    
  */
  label?: string;

  /*
    The label to be displayed at the end of the input.

    @default null
  */
  endLabelContent?: React.ReactNode;

  /*
    The content to be displayed at the start of the input.

    @default null
  */
  startContent?: React.ReactNode;

  /*
    The content to be displayed at the end of the input.

    @default null
  */
  endContent?: React.ReactNode;

  /*
    Whether the input is invalid.

    @default false
  */
  isInvalid?: boolean;

  /*
    The error message to be displayed if the input is invalid.

    @default null
  */
  errorMessage?: string;
}

const input = cva(
  [
    "w-full",
    "py-3",
    "px-5",
    "rounded-xl",
    "hover:opacity-90",
    "active:opacity-80",
    "focus:outline-none",
    "focus:ring-2",
    "select-none",
    "overflow-hidden",
    "border",
    "text-base",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-light",
          "dark:bg-neutral-900",
          "border-neutral-300",
          "dark:border-neutral-800",
          "placeholder-neutral-400",
          "placeholder:text-neutral-400",
          "dark:placeholder-neutral-500",
          "dark:placeholder:text-neutral-500",
          "focus:ring-primary",
        ],
        primary: [
          "bg-primary",
          "text-white",
          "dark:bg-primary",
          "dark:text-white",
          "border-none",
          "placeholder-white",
          "placeholder:text-white",
          "dark:placeholder-white",
          "dark:placeholder:text-white",
          "focus:ring-primary/80",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      endContent,
      startContent,
      isInvalid,
      errorMessage,
      label,
      endLabelContent,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full flex flex-col gap-y-2 relative">
        {label && (
          <div className="w-full flex justify-between text-sm">
            <label>{label}</label>

            {endLabelContent}
          </div>
        )}

        <div className="w-full flex gap-x-2">
          {startContent}

          <input
            ref={ref}
            className={cn(input({ className, variant }))}
            {...props}
          />

          {endContent}
        </div>

        {isInvalid && (
          <div className="text-neutral-500 text-sm">
            <span className="text-primary">* </span>
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
