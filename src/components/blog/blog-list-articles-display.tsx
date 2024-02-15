import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/blog/blogListArticlesDisplay.module.css';

export default function BlogListArticlesDisplay(props: any) {
  const posts = props.posts;
  return (
    <section className={props.sidePadding ? styles.blogListArticleWrapperPadded : styles.blogListArticleWrapper}>
      {posts.map(({ data }) => {
        const title = data.title || data.slug;
        return (
          <article
            className={styles.blogListArticle}
            key={data.slug}
          >
            <Link
              className={styles.styledLink}
              href={`blog/${data.slug}`}
            >
              <Image
                className={styles.styledImage}
                alt="article"
                src={data.thumbnail}
                width={800}
                height={800}
              />
            </Link>

            <h3 className={styles.blogListArticleTitle}>
              <Link
                className={styles.styledLink}
                href={`${data.slug}`}
              >
                {title}
              </Link>
            </h3>
            <div className={styles.styledDescription}>{data.description}</div>
            <small className={styles.blogListArticleDate}>
              {data.date} - {data.timeToRead} minutos de lectura
            </small>
          </article>
        );
      })}
    </section>
  );
}
