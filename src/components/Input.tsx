import React from "react";

import { cn } from "../utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  endLabel?: React.ReactNode;

  startContent?: React.ReactNode;
  endContent?: React.ReactNode;

  isInvalid?: boolean;
  errorMessage?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-y-2 relative">
        {props.label && (
          <div className="w-full flex justify-between text-sm">
            <label>{props.label}</label>

            {props.endLabel && <div>{props.endLabel}</div>}
          </div>
        )}

        <div className="w-full flex gap-x-2">
          {props.startContent && (
            <div className="flex items-center gap-x-2">
              {props.startContent}
            </div>
          )}

          <input
            ref={ref}
            id={props.id}
            className={cn(
              "w-full bg-light dark:bg-neutral-900 py-3 px-5 rounded-xl hover:opacity-90 active:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary placeholder-neutral-500 select-none overflow-hidden border border-neutral-300 dark:border-neutral-800",
              props.className
            )}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            value={props.value}
            onChange={props.onChange}
            autoComplete={props.autoComplete}
          />

          {props.endContent && (
            <div className="flex items-center gap-x-2">{props.endContent}</div>
          )}
        </div>

        {props.isInvalid && (
          <div className="text-neutral-500 text-sm">
            <span className="text-primary">* </span>
            {props.errorMessage}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
