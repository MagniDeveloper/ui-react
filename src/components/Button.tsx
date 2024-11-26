import React from "react";

import LoaderCircle from "../assets/svgs/LoaderCircle";

import { cn } from "../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;

  isDisabled?: boolean;
  isLoading?: boolean;
  isIcon?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={props.onClick}
        className={cn(
          "w-full flex justify-center items-center gap-x-2 bg-light dark:bg-neutral-900 py-3 px-5 rounded-xl hover:opacity-90 active:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 select-none border border-neutral-300 dark:border-neutral-800",
          props.className,
          props.isIcon && "px-3 w-auto max-w-max max-h-max"
        )}
        type={props.type}
        disabled={props.isDisabled || props.isLoading}
      >
        {props.isLoading && <LoaderCircle className="animate-spin" />}

        {props.startContent && <div>{props.startContent}</div>}
        {props.children}
        {props.endContent && <div>{props.endContent}</div>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
