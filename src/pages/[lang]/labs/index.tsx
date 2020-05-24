import React from "react";
import Head from "next/head";

import { getPaths } from "../../../utils/lang";
import Layout from "../../../components/modules/layout";

const LabsPage = () => {
  return (
    <>
      <Head>
        <title>Labs | Marcelo Reis</title>
      </Head>
      <Layout>Labs</Layout>
    </>
  );
};

export const getStaticPaths = () => {
  return { paths: getPaths("/labs"), fallback: false };
};

export const getStaticProps = () => ({ props: {} });

export default LabsPage;
