import Head from 'next/head';
import { NextRouter, useRouter } from 'next/router';
import VREPlayer from 'videojs-react-enhanced';
import 'video.js/dist/video-js.css';

import styles from '../../styles/Browse.module.scss';
import { ROUTES } from '../../config/route';
import LPApiClient from '../../utils/axios';

function Watch({ media }): React.ReactElement {
  const router: NextRouter = useRouter();

  const playerOptions: VREPlayer.IPlayerOptions = {
    controls: true,
    autoplay: "play",
  };
  const videojsOptions: VREPlayer.IVideoJsOptions = {
    fluid: true,
  };
  const videoResources: VREPlayer.IResources = {
    sources: [
      {
        src: `https://livepeercdn.com/asset/${media.playbackId}/video`,
        type: 'video/mp4'
      },
    ],
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>EthFlix</title>
        <meta name='description' content='Netflix clone, made using Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.dismissButton}>
            <button onClick={() => { router.push(ROUTES.BROWSE) }}>&larr;</button>
        </div>
        <div className={styles.videoPlayer}>
            <VREPlayer
                playerOptions={playerOptions}
                videojsOptions={videojsOptions}
                resources={videoResources}
                onReady={(player) => {
                    player.play();
                }}
                onPlay={(e, _, second) => console.log('Play!')}
                onPause={(e, _, second) => console.log('Pause!')}
                onEnded={(e, _) => {
                    router.push(ROUTES.BROWSE);
                }}
            />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {
    const lpStream = await LPApiClient().get(`/asset/${context.params.videoId}`);
    const media = lpStream.data;

    return {
        props: { media },
    }
}

export default Watch
