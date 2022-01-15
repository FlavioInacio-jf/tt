import { FormHTMLAttributes, ReactNode } from "react"
import { BsCheckLg, BsXLg } from "react-icons/bs"
import { Button } from "../Button"

import styles from "./Form.module.scss"

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
  handleShowModal: (value: boolean) => void;
}

export function Form({ children, handleShowModal, ...props }: FormProps) {
  return (
    <form  {...props}>
      {children}

      <footer className={styles.footer}>
        <Button className="btn-outline-tertiary btn-sm" type="button" onClick={() => handleShowModal(false)}>
          <BsXLg />Cancel
        </Button>
        <Button className="btn-tertiary btn-sm" type="submit">
          <BsCheckLg /> Save
        </Button>
      </footer>
    </ form>
  )
}