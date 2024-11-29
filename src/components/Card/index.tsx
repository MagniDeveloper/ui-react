import React, { type HTMLAttributes, type FC, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {
  /*
    The content to be displayed in the header of the card.

    @default null
  */
  headerContent?: React.ReactNode;

  /*
    The content to be displayed in the footer of the card.

    @default null
  */
  footerContent?: React.ReactNode;

  /*
    The class names to apply to the header, body, and footer of the card.

    @default null
  */
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
    "border",
    "text-base",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-light",
          "dark:bg-dark",
          "border-light",
          "dark:border-neutral-900",
        ],
        gradient: [
          "bg-gradient-to-bl",
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
      classNames,
      variant,
      headerContent,
      footerContent,
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
              "border-b border-neutral-300 dark:border-neutral-900 p-4",
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
              "border-t border-neutral-300 dark:border-neutral-900 p-4",
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
