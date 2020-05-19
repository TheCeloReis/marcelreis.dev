import React from "react";
import Head from "next/head";

import Hero from "../../../components/modules/hero";

import { getPaths } from "../../../utils/lang";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home | Marcelo</title>
      </Head>
      <Hero />
    </>
  );
};

export const getStaticProps = () => ({ props: {} });

export const getStaticPaths = () => {
  return { paths: getPaths("/home"), fallback: false };
};

export default HomePage;
