import { type HTMLAttributes, type FC, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils/cn";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

const card = cva(
  [
    "w-full",
    "overflow-hidden",
    "backdrop-blur-sm",
    "shadow-md",
    "rounded-2xl",
    "p-6",
    "relative",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-light",
          "dark:bg-dark",
          "border",
          "border-light",
          "dark:border-neutral-900",
        ],
        gradient: [
          "bg-gradient-to-bl",
          "from-light",
          "to-white",
          "dark:from-dark",
          "dark:to-neutral-900",
          "border",
          "border-light",
          "dark:border-neutral-900",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const Card: FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          card({
            className,
            variant,
          })
        )}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);

Card.displayName = "Card";
