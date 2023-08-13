import Image from 'next/image';
import styles from '@/styles/gallery.module.css';
import gallery1 from '../../../public/assets/landing/images/gallery-1.jpg';
import gallery2 from '../../../public/assets/landing/images/gallery-2.jpg';
import gallery3 from '../../../public/assets/landing/images/gallery-3.jpg';

export default function Gallery() {
  return (
    <section className={styles.galleryWrapper}>
      <Image
        className={styles.galleryWrapperImage}
        src={gallery1}
        alt="gallery-1"
        key="gallery-1"
        placeholder="blur"
      ></Image>
      <Image
        className={styles.galleryWrapperImage}
        src={gallery2}
        alt="gallery-2"
        key="gallery-2"
        placeholder="blur"
      ></Image>
      <Image
        className={styles.galleryWrapperImage}
        src={gallery3}
        alt="gallery-3"
        key="gallery-3"
        placeholder="blur"
      ></Image>
    </section>
  );
}
