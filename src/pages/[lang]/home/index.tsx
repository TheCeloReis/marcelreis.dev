import React from "react";
import Head from "next/head";

import Hero from "../../../components/modules/hero";
import Layout from "../../../components/modules/layout";
import { Heading2 } from "../../../components/base/typography";

import { getPaths } from "../../../utils/lang";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home | Marcelo</title>
      </Head>
      <Hero />
      <Layout variant="hero">
        <Heading2 as="h2">Last Posts</Heading2>
        <div>1</div>
        <div>2</div>
        <div>3</div>

        <Heading2 as="h2">Projects Highlights</Heading2>
        <div>1</div>
        <div>2</div>

        <Heading2 as="h2">About</Heading2>
        <div>1</div>
        <div>2</div>

        <Heading2 as="h2">Contact me</Heading2>
        <div>1</div>
        <div>2</div>
      </Layout>
    </>
  );
};

export const getStaticProps = () => ({ props: { background: "tall" } });

export const getStaticPaths = () => {
  return { paths: getPaths("/home"), fallback: false };
};

export default HomePage;
