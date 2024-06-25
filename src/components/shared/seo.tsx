import Head from 'next/head';

export default function SEO({
  title,
  description,
  url,
  thumbnail,
}: {
  title: string;
  description: string;
  url?: string;
  thumbnail?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="og:type"
        content="website"
      />
      <meta
        name="og:url"
        content={url}
      />
      <meta
        name="og:title"
        content={title}
      />
      <meta
        name="og:description"
        content={description}
      />
      <meta
        name="og:image"
        content={thumbnail}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:url"
        content={url}
      />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={thumbnail}
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
  );
}
