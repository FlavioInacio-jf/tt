import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children : ReactNode;
}

export function Button ({children, ...props}:ButtonProps) {
  return (
    <button {...props} >
      {children}
    </button>
  );
}