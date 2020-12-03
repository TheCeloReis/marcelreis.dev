import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { AppPropsType } from "next/dist/next-server/lib/utils";

import { initGA, logPageView } from "src/utils/analytics";
import { NightSky, ThemeProvider } from "@marcelreis/ui-kit";

const MyApp = (props: AppPropsType) => {
  const router = useRouter();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView();
  }, [router.pathname]);

  return (
    <ThemeProvider>
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

      <NightSky />

      <props.Component {...props.pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
