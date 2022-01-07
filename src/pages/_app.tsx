/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My top - наш лучший топ</title>
        <link rel='icon' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
