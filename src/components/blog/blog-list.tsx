import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../layouts/layout';
import styles from '@/styles/blog/index.module.css';
import BlogListTemplateHeader from '@/components/blog/blog-list-header';
import BlogListArticlesDisplay from '@/components/blog/blog-list-articles-display';

export default function BlogList({ posts, currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/blog/' : '/blog/' + (currentPage - 1).toString();
  const nextPage = '/blog/' + (Number(currentPage) + 1).toString();

  const [mainPost, ...restOfPosts] = posts;

  // {currentPage === 1 && <SubscribeModal></SubscribeModal>}
  return (
    <Layout>
      <Head>
        <title>El Calabozo del Programador</title>
        <meta
          name="description"
          content="Personal Website and Blog"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <section className={styles.blogListTemplateWrapper}>
        <BlogListTemplateHeader
          mainPost={mainPost}
          shouldDisplayMainArticle={currentPage === 1}
        ></BlogListTemplateHeader>
        <BlogListArticlesDisplay posts={restOfPosts}></BlogListArticlesDisplay>
      </section>
      <ul className={styles.backNextButtons}>
        {!isFirst && (
          <button className={styles.styledButton}>
            <Link
              className={styles.styledDirectionButton}
              href={prevPage}
              rel="prev"
            >
              ← Anterior
            </Link>
          </button>
        )}
        {!isLast && (
          <button className={styles.styledButton}>
            <Link
              className={styles.styledDirectionButton}
              href={nextPage}
              rel="next"
            >
              Siguiente →
            </Link>
          </button>
        )}
      </ul>
      <Link
        className={styles.styledNextLink}
        href="/"
      >
        ← Back to my website
      </Link>
      /// SUBSCRIBE MODAL
    </Layout>
  );
}
