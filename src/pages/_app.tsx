import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Navbar from "../components/modules/navbar";
import Footer from "../components/modules/footer";
import Background from "../components/modules/background";

import "../sass/index.scss";

const MyApp = ({ Component, pageProps }) => {
  const [background, setBackground] = useState("normal");
  const router = useRouter();

  useEffect(() => {
    setBackground("full");

    setTimeout(() => {
      setBackground("normal");
    }, 600);
  }, [router.pathname]);

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
      <Background mode={background} />
      <Navbar />
      <div style={{ paddingTop: "72px", paddingBottom: "50px" }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
};

export default MyApp;
