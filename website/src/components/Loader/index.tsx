import styles from "./Loader.module.scss";

type LoaderProps = {
  title? : string;
}

export function Loader ({ title }: LoaderProps) {
  return (
    <div className={styles.containerLoader}>
      <div className={styles.loader}></div>
      <h5 className={styles.loaderTitle}>{ title || "Creating client..."}</h5>
    </div>
  )
}