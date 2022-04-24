import Head from 'next/head';
import { useEffect, useState } from "react";
import { NextRouter, useRouter } from 'next/router';

import styles from '../styles/Login.module.scss';
import { ROUTES } from '../config/route';
import { useWeb3 } from '../context/Web3ModalContext';
import axios from 'axios';

export default function Home(): React.ReactElement {
  const web3 = useWeb3();
  const router: NextRouter = useRouter();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    const accessTokenExpiry = Number(localStorage.getItem('access_token_expires_at'));
    const now = Date.now();
    if (!accessToken || accessToken.length === 0 || now > accessTokenExpiry) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('access_token_expires_at');
    } else {
      router.push(ROUTES.BROWSE);
    }
  }, []);

  useEffect(() => {
    if (connected) {
      signIn();
    }
  }, [connected]);

  const connectToWallet = async () => {
    try {
      await web3.connect();
      setConnected(true);
    } catch (err) {
      console.log(err);
      setConnected(false);
    }
  }

  const signIn = async () => {
    const nonceRequest = await axios.post('https://ethamsterdam.herokuapp.com/auth/nonce', { address: web3.account });
    const signature = await web3.signer?.signMessage(nonceRequest.data.message_to_sign);
    const accessTokenRequest = await axios.post('https://ethamsterdam.herokuapp.com/auth/token', {
      address: web3.account,
      signature
    });
    localStorage.setItem('access_token', accessTokenRequest.data.token);
    localStorage.setItem('access_token_expires_at', accessTokenRequest.data.expires_at);
    router.push(ROUTES.BROWSE);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>EthFlix</title>
        <meta name='description' content='Netflix clone, made using Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.main__card}>
          <h1>EthFlix</h1>
          <p>A simple N*tflix clone built using LivePeer VOD</p>
          {(connected) ? (
            <div className={styles.button} onClick={signIn}>Sign in</div>
          ) : (
            <div className={styles.button} onClick={connectToWallet}>Connect wallet</div>
          )}
        </div>
      </main>
    </div>
  );
}
