import React from "react";
import Head from "next/head";

import Layout from "../../../components/modules/layout/";

import { getPaths } from "../../../utils/lang";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About | Marcelo</title>
      </Head>
      <Layout>
        <h1>This is me</h1>
      </Layout>
    </div>
  );
};

export const getStaticProps = () => ({ props: {} });

export const getStaticPaths = () => {
  return { paths: getPaths("/about"), fallback: false };
};

export default AboutPage;
