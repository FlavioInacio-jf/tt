import styles from './ToggleSwitch.module.scss'

export function ToggleSwitch () {
  return (
    <label className={styles.switch}>
      <input type={styles.checkbox}/>
      <span className={styles.slider}></span>
    </label>
  );
}