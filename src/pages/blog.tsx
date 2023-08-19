import Head from 'next/head';
import Link from 'next/link';
import Layout from '../layouts/layout';
import styles from '@/styles/blog/index.module.css';
import BlogListTemplateHeader from '@/components/blog/blog-list-header';
import BlogListArticlesDisplay from '@/components/blog/blog-list-articles-display';

export default function Blog() {
  const { data } = {
    data: {
      allMdx: {
        edges: [
          {
            node: {
              fields: { slug: '/slug' },
              excerpt:
                'Hola chicos, ¿cómo han estado? ¿yo? He estado trabajando mucho en un nuevo proyecto que estoy construyendo con la ayuda de un amigo, no…',
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
          {
            node: {
              fields: { slug: '/slug' },
              excerpt:
                'Hola chicos, ¿cómo han estado? ¿yo? He estado trabajando mucho en un nuevo proyecto que estoy construyendo con la ayuda de un amigo, no…',
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
          {
            node: {
              fields: { slug: '/slug' },
              excerpt:
                'Hola chicos, ¿cómo han estado? ¿yo? He estado trabajando mucho en un nuevo proyecto que estoy construyendo con la ayuda de un amigo, no…',
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
          {
            node: {
              fields: { slug: '/slug' },
              excerpt:
                'Hola chicos, ¿cómo han estado? ¿yo? He estado trabajando mucho en un nuevo proyecto que estoy construyendo con la ayuda de un amigo, no…',
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
          {
            node: {
              fields: { slug: '/slug' },
              excerpt:
                'Hola chicos, ¿cómo han estado? ¿yo? He estado trabajando mucho en un nuevo proyecto que estoy construyendo con la ayuda de un amigo, no…',
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
          {
            node: {
              fields: { slug: '/slug' },
              excerpt:
                'Hola chicos, ¿cómo han estado? ¿yo? He estado trabajando mucho en un nuevo proyecto que estoy construyendo con la ayuda de un amigo, no…',
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
    },
  };
  const { currentPage, numPages } = { currentPage: 1, numPages: 3 };
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/blog/' : '/blog/' + (currentPage - 1).toString();
  const nextPage = '/blog/' + (currentPage + 1).toString();

  const posts = data.allMdx.edges;

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
        <BlogListTemplateHeader shouldDisplayMainArticle={currentPage === 1}></BlogListTemplateHeader>
        <BlogListArticlesDisplay posts={posts}></BlogListArticlesDisplay>
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

// export const pageQuery = graphql`
//   query blogListQuery($skip: Int!, $limit: Int!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMdx(
//       sort: { fields: [frontmatter___date], order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
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
// `
