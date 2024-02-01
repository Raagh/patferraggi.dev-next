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
  const slugParts = slugPath.split('/');
  const year = slugParts[0];
  const month = slugParts[1];
  const slug = slugParts[2];
  const fullPath = join(postsDirectory, slugPath, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const wordsPerMinute = 225;
  const timeToRead = Math.ceil(wordCounter(fileContents) / wordsPerMinute);

  console.log(timeToRead);

  const { data, content } = matter(fileContents);

  return { data: { slug: slugPath, timeToRead, ...data }, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug));
  // sort posts by date in descending order
  // .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1));
  //
  return JSON.parse(JSON.stringify(posts));
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
