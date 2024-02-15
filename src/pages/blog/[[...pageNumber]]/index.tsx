import { getAllPosts, getPostBySlug } from '@/lib/blog';
import BlogList from '@/components/blog/blog-list';
import { isArray } from 'util';
import BlogPost from '@/components/blog/blog-post';

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
    <div>
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
    </div>
  );
}

// export async function getStaticPaths() {
//   const { numPages } = getPageNumbers();
//
//   const arr = Array.from({ length: numPages }, (_, i) => (i + 1).toString());
//
//   return {
//     paths: arr.map(x => {
//       return {
//         params: {
//           pageNumber: x.toString()
//         },
//       };
//     }),
//     fallback: false,
//   };
//Name }

export const getServerSideProps = async ({ params }: { params: { pageNumber: number | string[] } }) => {
  if (!params.pageNumber) params.pageNumber = 1;
  if (isArray(params.pageNumber) && (params.pageNumber as string[]).includes('assets'))
    return { props: { posts: [], currentPage: 0, pageNumber: 0, isArticle: false } };

  const isArticle = isArray(params.pageNumber) && params.pageNumber.length > 1;
  if (isArticle) {
    const post = await getPostBySlug((params.pageNumber as string[]).filter(x => x !== 'blog').join('/'));
    return { props: { posts: [post], currentPage: 0, pageNumber: 0, isArticle } };
  }

  const { posts, numPages } = await getAllPosts((params.pageNumber as number) ?? 1);

  return {
    props: { posts, currentPage: params.pageNumber ?? 1, numPages, isArticle },
  };
};
