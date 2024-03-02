import Head from 'next/head';
import Layout from '../layouts/layout';
import Intro from '@/components/landing/intro';
import Divider from '@/components/shared/divider';
import BlogNews from '@/components/landing/blog-news/blog-news';
import About from '@/components/landing/about';
import Gallery from '@/components/landing/gallery';
import Contact from '@/components/landing/contact';
import Projects from '@/components/landing/projects/projects';
import { getAllPosts } from '@/lib/blog';
import generateRSSFeed from '@/lib/RSSFeed';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Patricio Ferraggi Ares</title>
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
      <Intro />
      <Divider />
      <BlogNews posts={posts} />
      <About />
      <Gallery />
      <Divider />
      <Projects />
      <Contact />
    </>
  );
}

Home.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      <>{page}</>
      <></>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { posts } = await getAllPosts();

  await generateRSSFeed(posts);

  return { props: { posts: [posts[0], posts[1]] } };
};
