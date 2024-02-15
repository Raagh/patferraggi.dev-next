import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Divider from '../shared/divider';
import BlogListArticlesDisplay from './blog-list-articles-display';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Bio from './bio';
// import NewsLetter from './newsletter';
import Layout from '@/layouts/layout';
import styles from '@/styles/blog/blogPost.module.css';
import { remark } from 'remark';
import html from 'remark-html';
import Markdown from 'react-markdown';

export default function BlogPost({ post, posts }) {
  // componentDidMount() {
  //   const twttr = window.twttr;
  //   if (typeof twttr.widgets !== 'undefined') {
  //     twttr.widgets.load();
  //   }
  // }

  // let disqusConfig = {
  //   identifier: post.id,
  //   title: post.title,
  // };

  return (
    <Layout removeSidePadding={true}>
      <section className={styles.articleWrapper}>
        <Head>
          <title>{post.title}</title>
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
        <Link
          className={styles.styledHomeLink}
          href="/blog"
        >
          ← Back to my blog
        </Link>
        <h2 className={styles.articleTitle}>{post.data.title}</h2>
        <div className={styles.ArticleDescription}>{post.data.description}</div>
        <span className={styles.articleDate}>
          {post.data.date} - {post.data.timeToRead + 1} minutos de lectura
        </span>
        <Divider
          margin={'3.5rem 2rem 3.5rem 2rem'}
          small={true}
          maxWidth={'1260px'}
        ></Divider>
        <section className={styles.articleEntireContent}>
          <article className={styles.coverContent}>
            <Image
              alt="Cover Image"
              className={styles.styledCoverImage}
              width={800}
              height={800}
              src={post.data.thumbnail}
            ></Image>
          </article>
          <article className={styles.articleContent}>
            <article className={styles.articleContentText}>
              <article
              // className={styles.articleContentText}
              // dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <Markdown
                components={{
                  img: props => (
                    <Image
                      src={props.src}
                      alt={props.alt}
                      width={1200}
                      height={200}
                    />
                  ),
                  p: ({ node, children }) => {
                    if (node?.children[0]?.tagName === 'img') {
                      const image: any = node.children[0];
                      console.log(image.properties.src);
                      /// TODO: REMOVER EL PUNTO
                      //
                      if (image.properties.src.startsWith('https')) {
                        return (
                          <img
                            src={image.properties.src}
                            alt={image.properties.alt}
                          />
                        );
                      }
                      return (
                        <div className="image">
                          <Image
                            src={`/assets/blog/${post.data.slug}${image.properties.src}`}
                            alt={image.properties.alt}
                            width="600"
                            height="300"
                          />
                        </div>
                      );
                    }
                    // Return default child if it's not an image
                    return <p>{children}</p>;
                  },
                  code({ inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className ?? '');

                    if (inline) {
                      return (
                        <code
                          {...props}
                          className="inline-code"
                        >
                          {children}
                        </code>
                      );
                    }

                    return match ? (
                      <SyntaxHighlighter
                        language={match[1]}
                        style={oneDark}
                        PreTag="div"
                        children={String(children).replace(/\n$/, '')}
                        {...props}
                      />
                    ) : (
                      <code
                        className={className}
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {post.content}
              </Markdown>
              <Divider
                small={true}
                maxWidth={'44.5rem'}
                // color={globalStyles.backgroundColor}
              ></Divider>
              {/*<Bio></Bio> */}
              <Divider
                small={true}
                maxWidth={'44.5rem'}
                // color={globalStyles.backgroundColor}
              ></Divider>

              {/*<CommentCount config={disqusConfig} /> */}

              {/*<Disqus config={disqusConfig} /> */}
            </article>
          </article>
        </section>

        {/* <NewsLetter enableMargin={true}></NewsLetter> */}
      </section>
      {posts.length > 0 && <p className={styles.blogPostShowcaseWrapperTitle}>Más artículos</p>}

      <BlogListArticlesDisplay
        sidePadding={true}
        posts={posts}
      ></BlogListArticlesDisplay>
      <Link
        className={styles.styledHomeLink}
        href="/blog"
      >
        ← Back to my blog
      </Link>
    </Layout>
  );
}
