import React from "react";
import Head from "next/head";

import Hero from "../../../components/modules/hero";
import Layout from "../../../components/modules/layout";
import { Heading2 } from "../../../components/base/typography";

import { getPaths, langEnum } from "../../../utils/lang";
import { getPage, PageType } from "../../../cms/pages";
import { GetStaticProps } from "next";

type PropsType = PageType & {
  background: string;
};
const HomePage = (props: PropsType) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
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

export const getStaticProps: GetStaticProps<
  PropsType,
  { lang: langEnum }
> = async (ctx) => {
  const props = {
    background: "tall",
    ...getPage(ctx.params.lang, "/home"),
  };

  return { props };
};

export const getStaticPaths = async () => {
  return { paths: getPaths("/home"), fallback: false };
};

export default HomePage;
