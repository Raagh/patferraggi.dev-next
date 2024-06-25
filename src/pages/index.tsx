import Intro from '@/components/landing/intro';
import Divider from '@/components/shared/divider';
import BlogNews from '@/components/landing/blog-news/blog-news';
import About from '@/components/landing/about';
import Gallery from '@/components/landing/gallery';
import Contact from '@/components/landing/contact';
import Projects from '@/components/landing/projects/projects';
import { getAllPosts } from '@/lib/blog';
import generateRSSFeed from '@/lib/RSSFeed';

const meta = {
  title: `Patricio Ferraggi Ares`,
  description: `Personal Website and Blog`,
  url: 'https://www.patferraggi.dev',
  twitter: `patferraggi`,
  thumbnail: 'https://patferraggi.dev/assets/landing/images/2020.jpg',
};

export default function Home({ posts }) {
  return (
    <>
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

  return { props: { posts: [posts[0], posts[1]], meta: meta } };
};
