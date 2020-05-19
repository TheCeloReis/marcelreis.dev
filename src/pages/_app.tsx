import Head from "next/head";

import Navbar from "../components/modules/navbar";
import Footer from "../components/modules/footer";
import Background from "../components/modules/background";

import "../sass/index.scss";

const MyApp = ({ Component, pageProps, router }: any) => {
  const initialHeader =
    router.pathname === "/[lang]/home"
      ? "hero"
      : router.pathname === "/[lang]/not-found"
      ? "full"
      : "normal";

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Marcelo Reis</title>
        <meta
          name="description"
          content="My website, it's under development, expect bugs and Lorem Ipsum's!"
        />
      </Head>
      <Background initialState={initialHeader} />
      <Navbar initialState={initialHeader} lang={router.query.lang} />
      <div style={{ paddingTop: "72px", paddingBottom: "50px" }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
};

export default MyApp;
