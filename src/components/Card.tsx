import { type HTMLAttributes, type FC, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils/cn";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;

  classNames?: {
    header?: string;
    body?: string;
    footer?: string;
  };
}

const card = cva(
  [
    "w-full",
    "overflow-hidden",
    "backdrop-blur-sm",
    "shadow-md",
    "rounded-2xl",
    "relative",
    "flex",
    "flex-col",
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
          "border",
          "from-light",
          "to-white",
          "dark:from-dark",
          "dark:to-neutral-900",
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
  (
    {
      children,
      className,
      variant,
      headerContent,
      footerContent,
      classNames,
      ...props
    },
    ref
  ) => {
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
        {headerContent && (
          <div
            className={cn(
              "border-b border-light dark:border-neutral-900 p-4",
              classNames?.header
            )}
          >
            {headerContent}
          </div>
        )}

        <div
          className={cn("w-full p-4 flex flex-col gap-y-4", classNames?.body)}
        >
          {children}
        </div>

        {footerContent && (
          <div
            className={cn(
              "border-t border-light dark:border-neutral-900 p-4",
              classNames?.footer
            )}
          >
            {footerContent}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = "Card";
