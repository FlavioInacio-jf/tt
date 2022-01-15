
import Link from "next/link";

import { AnchorHTMLAttributes, ReactNode } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
}
export function Anchor({ children, href, ...props }: LinkProps) {


  return (
    <Link href={href || ""} scroll={false} >
      <a {...props}>
        {children}
      </a>
    </Link>
  )
}