import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import { getPlaiceholder } from 'plaiceholder';

const postsDirectory = join(process.cwd(), '_posts');

export const getBase64 = async (imgPath: string) => {
  try {
    const file = fs.readFileSync(`public/${imgPath}`);
    const { base64 } = await getPlaiceholder(file);
    return base64;
  } catch (error: unknown) {
    //error handling
    if (error instanceof Error) return error.message;
    else if (error && typeof error === 'object' && 'message' in error) return error.message as string;
    else if (typeof error === 'string') return error;
    else return 'Unexpected error!';
  }
};

function getPostSlugs() {
  const years = fs.readdirSync(postsDirectory);
  const totalSlugs: string[] = [];
  for (let i = 0; i < years.length; i++) {
    const year = years[i];
    const months = fs.readdirSync(join(postsDirectory, year));
    for (let j = 0; j < months.length; j++) {
      const month = months[j];
      const slugs = fs.readdirSync(join(postsDirectory, year, month));
      const mappedSlugs = slugs.flatMap(slug => `${year}/${month}/${slug}`);
      totalSlugs.push(...mappedSlugs);
    }
  }

  return totalSlugs;
}

export async function getPostBySlug(slugPath: string) {
  const fullPath = join(postsDirectory, slugPath, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const wordsPerMinute = 225;
  const timeToRead = Math.ceil(wordCounter(fileContents) / wordsPerMinute);

  const { data, content } = matter(fileContents);

  const thumbnail = join('/assets/blog/', slugPath, data.thumbnail);
  const blurImage = await getBase64(thumbnail);

  const processedContent = await remark().process(content);

  const contentHtml = processedContent.toString();
  const split = slugPath.split('/');
  const id = data.disqusId ?? split[split.length - 1].replace(/\.md$/, '');
  const excerpt = contentHtml?.replace(/<[^>]*>?/gm, '').substring(0, 135) + '...';

  return {
    ...JSON.parse(
      JSON.stringify({
        data: {
          id,
          slug: slugPath,
          timeToRead,
          ...data,
          excerpt,
          date: new Date(data.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }),
          rawDate: data.date,
          thumbnail,
          blurImage,
        },
      })
    ),
    ...{ content: contentHtml },
  };
}

export async function getAllPosts(page: number = 1) {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map(slug => getPostBySlug(slug)));
  const sortedPosts = posts.sort((a: any, b: any) => {
    return new Date(b.data.rawDate).getTime() - new Date(a.data.rawDate).getTime();
  });

  const postsPerPage = page === 1 ? 9 : 8;
  const numPages = Math.ceil(posts.length / postsPerPage);

  const chunks: string[][] = [];
  for (let i = 0; i < sortedPosts.length; i += postsPerPage) {
    const chunk = sortedPosts.slice(i, i + postsPerPage);
    chunks.push(chunk);
  }

  return JSON.parse(JSON.stringify({ posts: chunks[page - 1], numPages }));
}

export async function getPageNumbers() {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map(slug => getPostBySlug(slug)));
  const sortedPosts = posts.sort((a: any, b: any) => {
    return new Date(b.data.rawDate).getTime() - new Date(a.data.rawDate).getTime();
  });

  const postsPerPage = 8;
  const numPages = Math.ceil(posts.length / postsPerPage);

  const chunks: string[][] = [];
  for (let i = 0; i < sortedPosts.length; i += postsPerPage) {
    const chunk = sortedPosts.slice(i, i + postsPerPage);
    chunks.push(chunk);
  }

  return JSON.parse(JSON.stringify({ numPages }));
}

function wordCounter(input: string) {
  const text = input.split(/\s+/);
  let wordCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ' && isWord(text[i])) {
      wordCount++;
    }
  }
  return wordCount;
}

function isWord(str: string) {
  let alphaNumericFound = false;
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (
      (code > 47 && code < 58) || // numeric (0-9)
      (code > 64 && code < 91) || // upper alpha (A-Z)
      (code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      alphaNumericFound = true;
      return alphaNumericFound;
    }
  }
  return alphaNumericFound;
}
