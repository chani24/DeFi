import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DeFi</title>
        <meta name="description" content="Decentralized market place" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
