import styles from './Message.module.scss';

interface MessageType {
  message: {
    id?: number;
    message: string;
    hour: string;
  }
}



export function Message ({message}:MessageType) {
  return (
    <div className={styles.containerMessage}>
      <header>
        {message.message}
      </header>
      <footer>
        {message.hour} <span>topic name</span>
      </footer>
    </div>
  );
}