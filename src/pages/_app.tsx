import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { AppPropsType } from "next/dist/next-server/lib/utils";

import Navbar from "../components/modules/navbar";
import Background from "../components/modules/background";

const Footer = dynamic(() => import("../components/modules/footer"));

import "../styles/index.scss";
import { langEnum } from "../utils/lang";

const MyApp = (props: AppPropsType) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
          rel="preload"
          as="font"
          crossOrigin=""
          type="text/css"
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
        lang={props.router.query.lang as langEnum}
      />
      <props.Component {...props.pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
