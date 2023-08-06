import Head from 'next/head';
import Layout from '../layouts/layout';
import Intro from '@/components/landing/intro';
import Divider from '@/components/shared/divider';
import BlogNews from '@/components/landing/blog-news/blog-news';
import About from '@/components/landing/about';
import Gallery from '@/components/landing/gallery';

export default function Home() {
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
      <BlogNews />
      <About />
      <Gallery />
      <Divider />
    </>
  );
}

Home.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      <>{page}</>
    </Layout>
  );
};
