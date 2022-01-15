import cn  from 'classnames';

import { BsBroadcast } from 'react-icons/bs';
import { useClient } from '../../../hooks/useClient';
import { Avatar } from '../../Avatar';

import styles from './Client.module.scss';

type ClientType = {
  id: number;
  client: string;
  isWorking : boolean;
  icon: number;
}


type ClientProps = {
  client: ClientType;
}

export function Client(props: ClientProps) {
  const { client, icon, id, isWorking } = props.client;
  const { handleShowClient, currentClient} = useClient ();

  const currentStyle = currentClient?.id === id ? "current" : ""
  const clientStyles = `${styles["client"]} ${styles[currentStyle]}`

  return (
    <>
      <section className={clientStyles} onClick={()=> handleShowClient(id)} id={`${id}`}>
        <div className={styles.clientBody}>
          <div className={styles.clientAvatar}>
            <Avatar icon={icon} />
          </div>

          <div className={styles.wrapClientName}>
            <h3>{client}</h3>
            <BsBroadcast className={styles.status} />
          </div>
        </div>
      </section>
    </>

  );
}