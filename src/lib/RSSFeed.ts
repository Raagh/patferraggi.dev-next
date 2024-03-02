import RSS from 'rss';
import { writeFileSync } from 'node:fs';

export default async function generateRSSFeed(allPosts: any[]) {
  const site_url = process.env.SITE_URL ?? 'localhost:3000';

  const feedOptions = {
    title: 'Blog posts | RSS Feed',
    description: 'Welcome to this blog posts!',
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Patricio Ferraggi Ares`,
  };

  const feed = new RSS(feedOptions);

  allPosts.map(post => {
    feed.item({
      title: post.data.title,
      description: post.data.excerpt,
      url: `${site_url}/blog/${post.data.slug}`,
      guid: `${site_url}/blog/${post.data.slug}`,
      date: post.data.rawDate,
      enclosure: {
        url: site_url + '_next/image?url=' + post.data.thumbnail + '&w=828&q=75',
      },
      custom_elements: [
        {
          'content:encoded': post.data.date.split(' ')[2][0].toUpperCase() + post.data.date.split(' ')[2].slice(1),
        },
      ],
    });
  });

  writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
