import Head from 'next/head';
import { Inter } from 'next/font/google';
import Layout from '../layouts/layout';

const interRegular = Inter({ subsets: ['latin'], weight: "400", variable:"--inter-regular" })
const interMedium = Inter({ subsets: ['latin'], weight: "500", variable:"--inter-medium" })

export default function Home() {
  return (
    <>
      <Head>
        <title>Patricio Ferraggi Ares</title>
        <meta
          name="description"
          content="Personal Website and Blog"
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
      <main className={interMedium.className}>INDEX BABY</main>
    </>
  );
}

Home.getLayout = function getLayout(page: any) {
  return (
    <Layout removeSidePadding="true">
      <>{page}</>
    </Layout>
  );
};
