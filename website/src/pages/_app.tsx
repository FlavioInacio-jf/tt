import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ClientContextProvider } from '../contexts/ClientContext';
import { MessagesContextProvider } from '../contexts/MessagesContext';
import { SettingsContextProvider } from '../contexts/SettingsContext';


import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
        <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=10, minimum-scale=1.0"></meta>

    </Head>

    <ClientContextProvider>
      <SettingsContextProvider>
        <MessagesContextProvider>
          <Component {...pageProps} />
        </MessagesContextProvider>
      </SettingsContextProvider>
    </ClientContextProvider>

  </>
  );
}

export default MyApp
