import React from "react";
import Head from "next/head";

import HeroHeader from "components/HeroHeader";

import styled from "styled-components";
import RecentWork from "components/RecentWork";

const H1 = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  white-space: nowrap;
`;

const P = styled.p`
  color: #fff;
  font-size: 1.5rem;
  white-space: nowrap;
  margin-top: 0.75rem;
`;

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Frontend developer, passionate about Javascript, Typescript and React. Living in Belo Horizonte and trying to develop some awesome stuff"
        />
      </Head>

      <HeroHeader>
        <H1>Marcelo Reis</H1>
        <P>Devesenvolvedor Frontend</P>
      </HeroHeader>

      <RecentWork />
    </>
  );
};

export default Home;
