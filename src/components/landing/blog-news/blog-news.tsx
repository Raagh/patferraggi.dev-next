import IcomoonReact from 'icomoon-react';
import BlogNewsArticle from './blog-news-article';
import iconSet from '../../../../public/assets/landing/selection.json';
import styles from '@/styles/landing/blogNews.module.css';

export default function BlogNews({posts}) {
  return (
    <section
      className={styles.blogNewsWrapper}
      id="blog"
    >
      <header className={styles.blogNewsHeader}>
        <p className={styles.headerShowOff}>
          {
            <IcomoonReact
              iconSet={iconSet}
              size={'1em'}
              icon="face"
            />
          }{' '}
          {'  '}I have a Blog
        </p>
        <div className={styles.headerExplanation}>
          <p>
            ¿En Español?{' '}
            <a
              className={styles.styledHeaderLink}
              href="/blog"
              rel="noopener noreferrer"
            >
              Por aquí.
            </a>
          </p>
          <p>
            Or find me on{' '}
            <a
              className={styles.styledHeaderLink}
              href="https://dev.to/patferraggi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dev.to
            </a>{' '}
            for English articles.
          </p>
        </div>
      </header>
      <section className={styles.blogNewsArticles}>
        {posts.map((post, index) => {
          return (
            <BlogNewsArticle
              key={index}
              id={index}
              title={post.data.title}
              link={`/blog/` + post.data.slug}
              showPreview={index === 0}
              small={index !== 0}
              creationDate={post.data.date}
              description={post.data.description}
              enTitle={post.data.enTitle}
              enDescription={post.data.enDescription}
              enPostUrl={post.data.enPostUrl}
              thumbnail={post.data.thumbnail}
              blurPreview={post.data.blurImage}
            />
          );
        })}
      </section>
    </section>
  );
}
