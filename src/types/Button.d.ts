export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;

  isDisabled?: boolean;
  isLoading?: boolean;
  isIcon?: boolean;
}
