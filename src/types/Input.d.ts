export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  endLabel?: React.ReactNode;

  startContent?: React.ReactNode;
  endContent?: React.ReactNode;

  isInvalid?: boolean;
  errorMessage?: string;
}
