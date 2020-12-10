import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { AppPropsType } from "next/dist/next-server/lib/utils";

import { initGA, logPageView } from "src/utils/analytics";
import { NightSky, ThemeProvider } from "@marcelreis/ui-kit";
import Footer from "components/Footer";
import Layout from "components/Layout";
import Navbar from "components/Navbar";

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
        <title>Marcelo Reis</title>
        <meta
          name="description"
          content="Frontend developer, passionate about Javascript, Typescript and React. Living in Belo Horizonte and trying to develop some awesome stuff"
        />
      </Head>

      <Navbar />

      <NightSky />

      <Layout>
        <props.Component {...props.pageProps} />
      </Layout>

      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
