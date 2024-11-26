import { type InputHTMLAttributes, type FC, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils/cn";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {
  label?: string;
  endLabel?: React.ReactNode;

  startContent?: React.ReactNode;
  endContent?: React.ReactNode;

  isInvalid?: boolean;
  errorMessage?: string;

  variant?: "DEFAULT" | "primary";
}

const input = cva(
  "w-full py-3 px-5 rounded-xl hover:opacity-90 active:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary placeholder-neutral-500 select-none overflow-hidden border",
  {
    variants: {
      variant: {
        DEFAULT: "bg-light dark:bg-neutral-900 border-neutral-300 dark:border-neutral-800", // prettier-ignore
        primary: "bg-primary text-white dark:bg-primary dark:text-white", // prettier-ignore
      },
    },
    defaultVariants: {
      variant: "DEFAULT",
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
      endLabel,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full flex flex-col gap-y-2 relative">
        {label && (
          <div className="w-full flex justify-between text-sm">
            <label>{label}</label>

            {endLabel && <div>{endLabel}</div>}
          </div>
        )}

        <div className="w-full flex gap-x-2">
          {startContent && (
            <div className="flex items-center gap-x-2">{startContent}</div>
          )}

          <input
            ref={ref}
            className={cn(input({ className, variant }))}
            {...props}
          />

          {endContent && (
            <div className="flex items-center gap-x-2">{endContent}</div>
          )}
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
