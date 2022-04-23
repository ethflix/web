import Head from 'next/head';
import { useEffect, useState } from "react";
import { NextRouter, useRouter } from 'next/router';

import styles from '../styles/Login.module.scss';
import { ROUTES } from '../config/route';
import { useWeb3 } from '../context/Web3ModalContext';
import axios from 'axios';

export default function Home(): React.ReactElement {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(false);
  const router: NextRouter = useRouter();
  const web3 = useWeb3();

  useEffect(async () => {
    const accounts = await web3.signer?.getAddress();
    if (web3.account && web3.account.length > 0) {
      setLoggedIn(true);
      connectToWallet();
    }
  }, []);

  const connectToWallet = async () => {
    try {
      await web3.connect();
      const nonceRequest = await axios.post('https://ethamsterdam.herokuapp.com/auth/nonce', { address: web3.account });
      console.log(nonceRequest.data.message_to_sign);
    } catch (err) {
      console.log(err);
    }
    // router.push(ROUTES.BROWSE)
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
          <div className={styles.button} onClick={connectToWallet}>Connect wallet</div>
        </div>
      </main>
    </div>
  );
}
