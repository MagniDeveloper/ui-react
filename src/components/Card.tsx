import React from "react";

import { cn } from "../utils/cn";

import { CardProps } from "../types/Card";

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full overflow-hidden border bg-gradient-to-bl from-light to-white dark:from-dark dark:to-neutral-900 border-light dark:border-neutral-800 backdrop-blur-sm shadow-md rounded-2xl p-6",
          props.className
        )}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
