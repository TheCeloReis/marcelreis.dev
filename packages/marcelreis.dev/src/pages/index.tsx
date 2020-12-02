import React from "react";

import Head from "next/head";

const RootPage = () => {
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
      <meta
        name="description"
        content="Frontend developer, passionate about Javascript, Typescript and React. Living in Belo Horizonte and trying to develop some awesome stuff"
      />
    </Head>
  );
};

export const getStaticProps = () => ({ props: { background: "full" } });

export default RootPage;
