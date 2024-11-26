import React, { type HTMLAttributes, type FC, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils/cn";

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
    /*
      The class names to apply to the header of the card.

      @default null
    */
    header?: string;

    /*
      The class names to apply to the body of the card.

      @default null
    */
    body?: string;

    /*
      The class names to apply to the footer of the card.

      @default null
    */
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
          "dark:border-default-900",
        ],
        gradient: [
          "bg-gradient-to-bl",
          "border",
          "from-light",
          "to-white",
          "dark:from-dark",
          "dark:to-default-900",
          "border-light",
          "dark:border-default-900",
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
              "border-b border-light dark:border-default-900 p-4",
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
              "border-t border-light dark:border-default-900 p-4",
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
