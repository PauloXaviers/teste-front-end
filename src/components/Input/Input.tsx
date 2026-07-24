import type { InputHTMLAttributes } from "react";
import "./Input.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  id?: string;
}

const Input = ({ label, className, id, ...rest }: InputProps) => {
  return (
    <>
      {label ? (
        <label className={`label ${className || ""}`} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input {...rest} id={id} className="input-field-control" />
    </>
  );
};

export default Input;
