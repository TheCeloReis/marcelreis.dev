import React from "react";
import Head from "next/head";
import { AppPropsType } from "next/dist/next-server/lib/utils";

import "../style.css";

import Footer from "components/Footer";
import Navbar from "components/Navbar";
import NightSky from "components/NightSky";
import ThemeProvider from "components/ThemeProvider";

const MyApp = (props: AppPropsType) => {
  return (
    <ThemeProvider>
      <Head>
        <title>Marcelo Reis</title>
        <meta
          name="description"
          content="Frontend developer, passionate about Javascript, Typescript and React. Living in Belo Horizonte and trying to develop some awesome stuff"
        />
      </Head>

      <Navbar />
      <NightSky />

      <props.Component {...props.pageProps} />

      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
