import Image from 'next/image';
import styles from '@/styles/Gallery.module.css';

export default function Gallery() {
  const data = {
    allFile: {
      nodes: [
        {
          childImageSharp: {
            fluid: '/assets/landing/images/gallery-1.jpg',
          },
          name: 'gallery-1',
        },
        {
          childImageSharp: {
            fluid: '/assets/landing/images/gallery-2.jpg',
          },
          name: 'gallery-2',
        },
        {
          childImageSharp: {
            fluid: '/assets/landing/images/gallery-3.jpg',
          },
          name: 'gallery-3',
        },
      ],
    },
  };

  return (
    <section className={styles.galleryWrapper}>
      {data.allFile.nodes.map(x => (
        <Image
        className={styles.galleryWrapperImage}
          src={x.childImageSharp.fluid}
          alt={x.name}
          key={x.name}
          width={800}
          height={800}
        ></Image>
      ))}
    </section>
  );
}
