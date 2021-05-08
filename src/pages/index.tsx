import React from "react";
import Head from "next/head";

import HeroHeader from "components/HeroHeader";
import Projects from "components/Projects";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Marcelo Reis - Frontend Developer</title>
        <meta
          name="description"
          content="Frontend developer, passionate about Javascript, Typescript and React. Living in Belo Horizonte and trying to develop some awesome stuff"
        />
      </Head>

      <HeroHeader />

      <Projects />
    </>
  );
};

export default HomePage;
