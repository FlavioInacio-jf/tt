import type { NextPage } from 'next';
import Head from "next/head";


import { Clients } from '../components/Clients'
import { Empty } from '../components/Empty';
import Header from '../components/Header'
import { Messages } from '../components/Messages'
import { SettingsClient } from '../components/SettingsClient'
import { useClient } from '../hooks/useClient'
import { useSettings } from '../hooks/useSettings'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const { clients, currentClient } = useClient();
  const { isShowSettings } = useSettings ();

  let isExistSomeClients = clients.length < 1 || !currentClient
  let isShowSettingsCurrentClient = currentClient && isShowSettings

  return (
    <>
      <Head>
        <title>TT</title>
      </Head>

      <div className="content">
        <Header />
        <main className={styles.mainHome}>
          <Clients />

          {
            isExistSomeClients
            ?
              <Empty title="Welcome to ControlTT" subtitle='Please, add a new client or select a client in ControlTT' />
            :
              <Messages />
          }
          {isShowSettingsCurrentClient &&  <SettingsClient />}
        </main>
      </div>
    </>

  );
}

export default Home
