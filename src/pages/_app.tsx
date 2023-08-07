import '@/styles/globals.css';
import { NextPage } from 'next';
import {NextSeo} from "next-seo";
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const meta = {
  title: `Patricio Ferraggi Ares`,
  description: `Personal Website and Blog`,
  url: 'https://www.patferraggi.dev',
  twitter: `patferraggi`,
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);

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
              url: "../../../../public/assets/landing/images/2020.jpg",
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
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
