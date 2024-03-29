import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/landing/blogNews.module.css';

const RenderPreviewIfItMatters = ({ preview, blurPreview, shouldRenderPreview, link }: { preview: string, blurPreview: string, shouldRenderPreview: boolean, link: string}) => {
  return shouldRenderPreview ? (
    <Link href={link} className={styles.styledNextLink}>
      <Image
        placeholder="blur"
        blurDataURL={blurPreview}
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
        blurPreview={props.blurPreview}
        preview={props.thumbnail}
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
          <div className={styles.styledDescription}>{props.description}</div>
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
