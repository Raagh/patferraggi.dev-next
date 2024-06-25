import { getAllPosts, getPostBySlug } from '@/lib/blog';
import BlogList from '@/components/blog/blog-list';
import { isArray } from 'util';
import BlogPost from '@/components/blog/blog-post';
import { GetStaticPaths } from 'next';

export default function Blog({
  posts,
  currentPage,
  numPages,
  isArticle,
}: {
  posts: any[];
  currentPage: number;
  numPages: number;
  isArticle: boolean;
}) {
  return (
    <>
      {!isArticle ? (
        <BlogList
          posts={posts}
          currentPage={currentPage}
          numPages={numPages}
        />
      ) : (
        <BlogPost
          post={posts[0]}
          posts={[]}
        />
      )}
    </>
  );
}

export const getStaticPaths = (async () => {
  const { posts, numPages } = await getAllPosts();
  const blogListPages = Array.from({ length: numPages }, (_, i) => (i + 1).toString());
  const blogPostPages = posts.map((x: any) => x.data.slug);

  const blogPaths = blogListPages.concat(blogPostPages);

  const paths = blogPaths.map(x => {
    return {
      params: {
        pageNumber: x.includes('/') ? x.toString().split('/') : [x.toString()],
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}) satisfies GetStaticPaths;

export const getStaticProps = async ({ params }: any) => {
  if (!params.pageNumber) params.pageNumber = 1;
  if (isArray(params.pageNumber) && (params.pageNumber as string[]).includes('assets'))
    return {
      props: {
        posts: [],
        currentPage: 0,
        pageNumber: 0,
        isArticle: false,
        meta: {
          title: 'El Calabozo del Programador',
          description: 'Blog',
          thumbnail: 'https://patferraggi.dev/assets/landing/images/2020.jpg',
        },
      },
    };

  const isArticle = isArray(params.pageNumber) && params.pageNumber.length > 1;
  if (isArticle) {
    const post = await getPostBySlug((params.pageNumber as string[]).filter(x => x !== 'blog').join('/'));

    if (!post) return;
    const meta = {
      title: post.data.title,
      description: post.data.description ?? '',
      url: post.data.url ?? '',
      thumbnail: `https://patferraggi.dev${post.data.thumbnail}`,
    };

    return { props: { posts: [post], currentPage: 0, pageNumber: 0, isArticle, meta: meta } };
  }

  const { posts, numPages } = await getAllPosts((params.pageNumber as number) ?? 1);

  return {
    props: {
      posts,
      currentPage: params.pageNumber ?? 1,
      numPages,
      isArticle,
      meta: {
        title: 'El Calabozo del Programador',
        description: 'Blog',
        thumbnail: 'https://patferraggi.dev/assets/landing/images/2020.jpg',
      },
    },
  };
};
