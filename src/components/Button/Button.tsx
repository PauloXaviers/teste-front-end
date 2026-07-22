import "./Button.scss";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant: "yellow" | "blue";
  size: "xs" | "sm" | "md" | "lg";
}

const Button = ({
  children,
  variant,
  size,
  className,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      className={`button button--${variant} button--${size} ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
