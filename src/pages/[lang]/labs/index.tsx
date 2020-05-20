import React from "react";
import Head from "next/head";

import { getPaths } from "../../../utils/lang";

const LabsPage = () => {
  return (
    <>
      <Head>
        <title>Labs | Marcelo Reis</title>
      </Head>
      <div>Fine</div>
    </>
  );
};

export const getStaticPaths = () => {
  return { paths: getPaths("/labs"), fallback: false };
};

export const getStaticProps = () => ({ props: {} });

export default LabsPage;
