/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Web3Provider } from '../context/Web3ModalContext';
import { ModalProvider } from '../context/ModalContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>EthFlix</title>
        <meta name='description' content='Netflix clone, made using Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Web3Provider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </Web3Provider>
    </>
  );
}
export default App;
