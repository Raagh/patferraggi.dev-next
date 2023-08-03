import Head from 'next/head';
import Layout from '../layouts/layout';

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
      <main >INDEX BABY</main>
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
