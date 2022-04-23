import styles from '../../styles/Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Next.js boilerplate by {' '}
        <a href='https://github.com/ayushiee' target='_blank' rel='noreferrer'>
          <b>Ayushi Gupta</b>
        </a>
      </p>
    </div>
  );
}
