import React from "react";
import Head from "next/head";

import Navbar from "../components/modules/navbar";
import Footer from "../components/modules/footer";
import Background from "../components/modules/background";

import "../sass/index.scss";

const MyApp = (props: any) => {
  console.log(props);

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
      <Background
        pageState={props.pageProps.background}
        transitionOn={props.router.pathname}
      />
      <Navbar
        initialState={props.pageProps.background}
        lang={props.router.query.lang}
      />
      <props.Component {...props.pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
