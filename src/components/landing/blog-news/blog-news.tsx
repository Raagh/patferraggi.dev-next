import IcomoonReact from 'icomoon-react';
import Article from './blog-news-article';
import iconSet from '../../../../public/assets/landing/selection.json';
import styles from '@/styles/BlogNews.module.css';

export default function BlogNews() {
  // const articles = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //     allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 2) {
  //       edges {
  //         node {
  //           excerpt
  //           fields {
  //             slug
  //           }
  //           frontmatter {
  //             date(formatString: "DD MMMM YYYY", locale: "es")
  //             title
  //             description
  //             enTitle
  //             enDescription
  //             enPostUrl
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
  // `).allMdx.edges
  const articles = [
    {
      node: {
        frontmatter: {
          title: 'Una semana con Nest.js, ¿está bueno?',
          date: '29 marzo 2021',
          enTitle: 'One week with Nest.js, is it good?',
          enPostUrl: 'randomUrl to dev.to',
          thumbnail: {
            childImageSharp: { fluid: '/assets/landing/blog-article-mock.jpg' },
          },
        },
        fields: {
          slug: '/link to local',
        },
      },
    },
    {
      node: {
        frontmatter: {
          title: 'Nuevo portátil, nuevo sistema operativo. Mi aventura en Linux comienza aquí.',
          date: '29 marzo 2021',
          enTitle: 'New laptop, new OS. My adventure going Linux starts here.',
          enPostUrl: 'randomUrl to dev.to',
          thumbnail: {
            childImageSharp: { fluid: '/assets/landing/blog-article-mock.jpg' },
          },
        },
        fields: {
          slug: '/link to local',
        },
      },
    },
  ];

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
        {articles.map((item, index) => {
          const node = item.node;
          return (
            <Article
              key={index}
              id={index}
              title={node.frontmatter.title}
              link={`/blog` + node.fields.slug}
              showPreview={index === 0}
              small={index !== 0}
              creationDate={node.frontmatter.date}
              description={node.frontmatter.description}
              enTitle={node.frontmatter.enTitle}
              enDescription={node.frontmatter.enDescription}
              enPostUrl={node.frontmatter.enPostUrl}
              thumbnail={node.frontmatter.thumbnail}
            />
          );
        })}
      </section>
    </section>
  );
}
