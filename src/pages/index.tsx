import React from "react";
import Head from "next/head";

import HeroHeader from "components/HeroHeader";

const HomePage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Frontend developer, passionate about Javascript, Typescript and React. Living in Belo Horizonte and trying to develop some awesome stuff"
        />
      </Head>

      <HeroHeader />
    </>
  );
};

export default HomePage;
