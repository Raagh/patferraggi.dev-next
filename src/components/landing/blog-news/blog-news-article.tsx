import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/BlogNews.module.css';

const RenderPreviewIfItMatters = ({ preview, shouldRenderPreview, link }) => {
  return shouldRenderPreview ? (
    <Link href={link} className={styles.styledNextLink}>
      <Image
        className={styles.styledPreview}
        src={preview}
        width={800}
        height={800}
        alt="article-preview"
      ></Image>
    </Link>
  ) : null;
};

export default function BlogNewsArticle(props: any) {
  return (
    <article className={props.small ? styles.articleWrapperSmall : styles.articleWrapper}>
      <RenderPreviewIfItMatters
        shouldRenderPreview={props.showPreview}
        preview={props.thumbnail.childImageSharp.fluid}
        link={props.link}
      ></RenderPreviewIfItMatters>
      <div className={styles.articleTextContainer}>
        <p>{props.creationDate}</p>
        <div className={styles.articleTitle}>
          <a
            className={styles.articleLink}
            href={props.link}
          >
            {props.title}
          </a>
          <div>{props.description}</div>
          <a
            className={styles.enArticleLink}
            target="_blank"
            rel="noopener noreferrer"
            href={props.enPostUrl}
          >
            {props.enTitle}
          </a>
          <div className={styles.enStyledDescription}>{props.enDescription}</div>
        </div>
      </div>
    </article>
  );
}
