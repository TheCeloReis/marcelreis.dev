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
        <title>Marcelo Reis - Frontend Developer</title>
        <meta name="title" content="Marcelo Reis - Frontend Developer" />
        <meta
          name="description"
          content="Frontend Developer freelancer, passionate about Javascript, Typescript, and React. Living in Belo Horizonte and trying to develop some awesome stuff."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marcelreis.dev/" />
        <meta property="og:title" content="Marcelo Reis - Frontend Developer" />
        <meta
          property="og:description"
          content="Frontend Developer freelancer, passionate about Javascript, Typescript, and React. Living in Belo Horizonte and trying to develop some awesome stuff."
        />
        <meta
          property="og:image"
          content="https://marcelreis.dev/img/meta-card.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://marcelreis.dev/" />
        <meta
          property="twitter:title"
          content="Marcelo Reis - Frontend Developer"
        />
        <meta
          property="twitter:description"
          content="Frontend Developer freelancer, passionate about Javascript, Typescript, and React. Living in Belo Horizonte and trying to develop some awesome stuff."
        />
        <meta
          property="twitter:image"
          content="https://marcelreis.dev/img/meta-card.png"
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
