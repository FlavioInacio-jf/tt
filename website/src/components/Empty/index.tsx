import Image from "next/image";
import { Button } from "../Button";
import styles from './Empty.module.scss';



type EmptyProps = {
  title : string;
  subtitle?: string;
}

export function Empty({title, subtitle} : EmptyProps) {

  return (
    <div className={styles.containerEmpty}>
      <div className={styles.emptyTopic}>
        <div className={styles.image}>
          <Image src="/broadcast.svg" objectFit="contain" layout="fill" loading="eager" priority={true} />
        </div>

        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>

  );
}