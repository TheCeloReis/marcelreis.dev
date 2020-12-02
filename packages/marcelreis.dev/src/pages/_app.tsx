import React, { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";
import { AppPropsType } from "next/dist/next-server/lib/utils";

import Navbar from "components/navbar";
import Background from "components/background";

const Footer = dynamic(() => import("components/footer"));

import "../styles/variables.global.scss";
import "../styles/reset.global.scss";
import "../styles/base.global.scss";

import { langEnum } from "../utils/lang";
import { initGA, logPageView } from "src/utils/analytics";
import LangProvider from "src/cms/translation";

const MyApp = (props: AppPropsType) => {
  const router = useRouter();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView();
  }, [router.pathname]);

  return (
    <LangProvider value={{ initialized: false, t: {} }}>
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
          content="Frontend developer, passionate about Javascript, Typescript and React. Living in Belo Horizonte and trying to develop some awesome stuff"
        />
        <link rel="shortcut icon" href="/img/logo-32.png" />
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
    </LangProvider>
  );
};

export default MyApp;
