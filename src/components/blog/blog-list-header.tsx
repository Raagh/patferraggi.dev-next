import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/blog/blogListHeader.module.css';

export default function BlogListHeader(props: any) {

  const {mainPost} = props;

  return (
    <section className={styles.blogListTemplateHeader}>
      <p className={styles.blogListTemplateTitle}>
        Bienvenido al <span className={styles.highlightedText}>Calabozo del Programador</span>
      </p>
      <p className={styles.blogListTemplateSubtitle}>
        visit{' '}
        <Link
          className={styles.styledLink}
          href="https://dev.to/patferraggi"
          target="_blank"
          rel="noopener noreferrer"
        >
          devto/patferraggi
        </Link>{' '}
        for the english version
      </p>
      {props.shouldDisplayMainArticle && (
        <article className={styles.blogListMainArticle}>
          <div className={styles.blogListMainArticleText}>
            <p className={styles.newHeader}>&#x2605; NUEVO</p>
            <h3 className={styles.blogListMainArticleTitle}>
              <Link
                className={styles.styledLinkMainArticle}
                href={`${mainPost.data.slug}`}
              >
                {mainPost.data.title || mainPost.data.slug}
              </Link>
              <div className={styles.styledDescription}>{mainPost.data.description}</div>
            </h3>
            <div
              className={styles.blogListMainArticleExcerpt}
              dangerouslySetInnerHTML={{
                __html: mainPost.content.replace(/<[^>]*>?/gm, '').substring(0, 135) + '...',
              }}
            ></div>
            <small className={styles.blogListMainArticleDate}>
              {mainPost.data.date} - {mainPost.data.timeToRead} minutos de lectura
            </small>
          </div>
          <Link
            className={styles.styledLinkMainArticle}
            href={`blog${mainPost.data.slug}`}
          ></Link>
          <div className={styles.styledImageContainer}>
            <Image
              alt="Main Post Image"
              className={styles.styledImage}
              width={800}
              height={800}
              src={mainPost.data.thumbnail}
            ></Image>
          </div>
        </article>
      )}
    </section>
  );
}
