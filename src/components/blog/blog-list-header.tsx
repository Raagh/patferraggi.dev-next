import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/blog/blogListHeader.module.css';

export default function BlogListHeader(props: any) {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //     allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
  //       edges {
  //         node {
  //           excerpt
  //           timeToRead
  //           fields {
  //             slug
  //           }
  //           frontmatter {
  //             date(formatString: "DD MMMM YYYY", locale: "es")
  //             title
  //             description
  //             thumbnail {
  //               childImageSharp {
  //                 fluid {
  //                   ...GatsbyImageSharpFluid
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  const data = {
    allMdx: {
      edges: [
        {
          node: {
            fields: { slug: '/slug' },
            excerpt: 'Hola chicos, ¿cómo han estado? ¿yo? He estado trabajando mucho en un nuevo proyecto que estoy construyendo con la ayuda de un amigo, no…',
            timeToRead: 4,
            frontmatter: {
              title: 'Una semana con Nest.js, ¿está bueno?',
              description: '',
              date: '20 marzo 2021',
              thumbnail: {
                childImageSharp: {
                  fluid: { src: '/assets/landing/blog-article-mock.jpg' },
                },
              },
            },
          },
        },
      ],
    },
  };

  const mainPost = data.allMdx.edges[0].node;

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
                href={`blog${mainPost.fields.slug}`}
              >
                {mainPost.frontmatter.title || mainPost.fields.slug}
              </Link>
              <div className={styles.styledDescription}>{mainPost.frontmatter.description}</div>
            </h3>
            <div
              className={styles.blogListMainArticleExcerpt}
              dangerouslySetInnerHTML={{
                __html: mainPost.excerpt,
              }}
            ></div>
            <small className={styles.blogListMainArticleDate}>
              {mainPost.frontmatter.date} - {mainPost.timeToRead + 1} minutos de lectura
            </small>
          </div>
          <Link
            className={styles.styledLinkMainArticle}
            href={`blog${mainPost.fields.slug}`}
          ></Link>
          <div className={styles.styledImageContainer}>
            <Image
              alt="Main Post Image"
              className={styles.styledImage}
              width={800}
              height={800}
              src={mainPost.frontmatter.thumbnail.childImageSharp.fluid.src}
            ></Image>
          </div>
        </article>
      )}
    </section>
  );
}
