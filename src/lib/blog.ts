import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  const years = fs.readdirSync(postsDirectory);
  const totalSlugs = [];
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

export function getPostBySlug(slugPath: string) {
  const fullPath = join(postsDirectory, slugPath, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const wordsPerMinute = 225;
  const timeToRead = Math.ceil(wordCounter(fileContents) / wordsPerMinute);

  const { data, content } = matter(fileContents);

  const thumbnail = join('/assets/blog/', slugPath, data.thumbnail);

  return { data: { slug: slugPath, timeToRead, ...data, thumbnail }, content };
}

export function getAllPosts(page: number = 1) {
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug));
  const sortedPosts = posts.sort((a: any, b: any) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });

  const postsPerPage = 8;
  const numPages = Math.ceil(posts.length / postsPerPage);

  const chunks = [];
  for (let i = 0; i < sortedPosts.length; i += postsPerPage) {
    const chunk = sortedPosts.slice(i, i + postsPerPage);
    chunks.push(chunk);
  }

  return JSON.parse(JSON.stringify({ posts: chunks[page - 1], numPages}));
}

export function getPageNumbers() {
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug));
  const sortedPosts = posts.sort((a: any, b: any) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });

  const postsPerPage = 8;
  const numPages = Math.ceil(posts.length / postsPerPage);

  const chunks = [];
  for (let i = 0; i < sortedPosts.length; i += postsPerPage) {
    const chunk = sortedPosts.slice(i, i + postsPerPage);
    chunks.push(chunk);
  }

  return JSON.parse(JSON.stringify({numPages}));
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
