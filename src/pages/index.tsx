import Head from 'next/head';
import Intro from '@/components/landing/intro';
import Divider from '@/components/shared/divider';
import BlogNews from '@/components/landing/blog-news/blog-news';
import About from '@/components/landing/about';
import Gallery from '@/components/landing/gallery';
import Contact from '@/components/landing/contact';
import Projects from '@/components/landing/projects/projects';
import { getAllPosts } from '@/lib/blog';
import generateRSSFeed from '@/lib/RSSFeed';
import SEO from '@/components/shared/seo';

export default function Home({ posts }) {
  return (
    <>
      <SEO
        title="Patricio Ferraggi Ares"
        description="Personal Website and Blog"
      ></SEO>
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

export const getStaticProps = async () => {
  const { posts } = await getAllPosts();

  await generateRSSFeed(posts);

  return { props: { posts: [posts[0], posts[1]] } };
};
