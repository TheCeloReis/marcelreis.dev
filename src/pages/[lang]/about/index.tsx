import React from "react";

import { getPaths } from "../../../utils/lang";
import Head from "next/head";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About | Marcelo</title>
      </Head>
      about
    </div>
  );
};

export const getStaticProps = () => ({ props: {} });

export const getStaticPaths = () => {
  return { paths: getPaths("/about"), fallback: false };
};

export default AboutPage;
