import React from "react";

import { getPaths } from "../../../utils/lang";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home | Marcelo</title>
      </Head>
    </div>
  );
};

export const getStaticProps = () => ({ props: {} });

export const getStaticPaths = () => {
  return { paths: getPaths("/home/"), fallback: false };
};

export default HomePage;
