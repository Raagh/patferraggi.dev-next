import '@/styles/globals.css';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Layout from '@/layouts/layout';

type AppPropsWithLayout = AppProps & {
  Component: NextPage;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const meta = pageProps.meta;
  if (!meta) {
    return <></>;
  }

  console.log(meta);
  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={meta.url}
        openGraph={{
          url: meta.url,
          title: meta.title,
          description: meta.description,
          images: [
            {
              url: meta.thumbnail,
              width: 800,
              height: 420,
              alt: meta.title,
            },
          ],
        }}
        twitter={{
          handle: meta.twitter,
          site: meta.url,
          cardType: 'summary_large_image',
        }}
      />
      <Layout removeSidePadding={pageProps.isArticle ?? false}>
        <></>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
