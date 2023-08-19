import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/blog/blogListArticlesDisplay.module.css';

export default function BlogListArticlesDisplay(props: any) {
  const posts = props.posts;
  return (
    <section className={props.sidePadding ? styles.blogListArticleWrapperPadded : styles.blogListArticleWrapper}>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article
            className={styles.blogListArticle}
            key={node.fields.slug}
          >
            <Link
              className={styles.styledLink}
              href={`blog${node.fields.slug}`}
            >
              <Image
                className={styles.styledImage}
                alt="article"
                src={node.frontmatter.thumbnail.childImageSharp.fluid.src}
                width={800}
                height={800}
              />
            </Link>

            <h3 className={styles.blogListArticleTitle}>
              <Link
                className={styles.styledLink}
                href={`blog${node.fields.slug}`}
              >
                {title}
              </Link>
            </h3>
            <div className={styles.styledDescription}>{node.frontmatter.description}</div>
            <small className={styles.blogListArticleDate}>
              {node.frontmatter.date} - {node.timeToRead + 1} minutos de lectura
            </small>
          </article>
        );
      })}
    </section>
  );
}
