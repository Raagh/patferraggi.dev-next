import styles from '@/styles/blog/bio.module.css';
import Image from 'next/image';

export default function Bio() {
  const author = 'Patricio Ferraggi Ares';
  return (
    <div className={styles.container}>
      <div className={styles.styledAvatar}>
        <Image
          className={styles.styledAvatarImage}
          src="/assets/landing/images/avatar.jpg"
          height={77}
          width={77}
          alt={author}
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.bioTitle}>Hola, soy {author}</span>
        <p className={styles.bioPresentation}>
          Soy un developer autodidacta Argentino que actualmente vive y trabaja en España. Intento mejorar diariamente,
          mientras ayudo a otros a hacer lo mismo.
          {` `}
        </p>
        <a
          className="twitter-follow-button"
          href="https://twitter.com/patferraggi"
          data-show-count="false"
          data-size="large"
        >
          Seguir a @patferraggi
        </a>
      </div>
    </div>
  );
}
