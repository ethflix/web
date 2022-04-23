/* eslint-disable @next/next/no-img-element */
import { useState, useContext } from 'react';
import { NextRouter, useRouter } from 'next/router';

import { ROUTES } from '../../config/route';
import Button from '../Button';
import { Media } from '../../types';
import { Play, Info } from '../../utils/icons';
import { ModalContext } from '../../context/ModalContext';
import styles from '../../styles/Banner.module.scss';

export default function Banner(props: any) {
  const router: NextRouter = useRouter();
  const [media, setMedia] = useState<Media>(props.media);
  const { setModalData, setIsModal } = useContext(ModalContext);

  const onClick = (data: Media) => {
    setModalData(data);
    setIsModal(true);
  };

  const onPlay = (data: Media) => {
    router.push({
      pathname: ROUTES.WATCH,
      query: { videoId: data.id },
    });
  };

  return (
    <div className={styles.spotlight}>
      <img src='/assets/spotlight.jpg' alt='spotlight' className={styles.spotlight__image} />
      <div className={styles.spotlight__details}>
        <div className={styles.title}>{media?.title}</div>
        <div className={styles.synopsis}>{media?.overview}</div>
        {media && (
          <div className={styles.buttonRow}>
            <Button label='Play' filled Icon={Play} onClick={() => onPlay(media)} />
            <Button label='More Info' Icon={Info} onClick={() => onClick(media)} />
          </div>
        )}
      </div>
    </div>
  );
}
