import '@/styles/globals.css';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Layout from '@/layouts/layout';

type AppPropsWithLayout = AppProps & {
  Component: NextPage;
};

const meta = {
  title: `Patricio Ferraggi Ares`,
  description: `Personal Website and Blog`,
  url: 'https://www.patferraggi.dev',
  twitter: `patferraggi`,
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
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
              url: '../../../../public/assets/landing/images/2020.jpg',
              width: 800,
              height: 420,
              alt: meta.title,
            },
          ],
        }}
        twitter={{
          handle: meta.twitter,
          site: meta.twitter,
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
