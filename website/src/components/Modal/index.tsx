import { ReactNode } from 'react';
import styles from './Modal.module.scss';
import cn from "classnames";

type ModalProps = {
  children: ReactNode;
  title: string;
  subtitle?: string;
  show: boolean;
}
export function Modal({children, show, title, subtitle}: ModalProps) {
  const style =  show ? "show" : ""
  const modalStyles = `${styles[style]} ${styles["containerModal"]}`

  return (
    <div className={modalStyles}>
      <div className={styles.modalContent}>
        <header>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </header>
        {children}

      </div>
    </div>
  );
}