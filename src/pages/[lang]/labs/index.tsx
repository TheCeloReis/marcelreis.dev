import React from "react";
import Head from "next/head";

const LabsPage = () => {
  return (
    <>
      <Head>
        <title>Labs - Marcelo Reis</title>
      </Head>
    </>
  );
};

export const getStaticPaths = () => {
  return { paths: ["/en-us/labs", "/pt-br/labs"], fallback: false };
};

export const getStaticProps = () => ({ props: {} });

export default LabsPage;
