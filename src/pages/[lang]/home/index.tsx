import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import Hero from "../../../components/modules/hero";
import Layout from "../../../components/base/layout";
import { Heading2 } from "../../../components/base/typography";
import { Grid } from "../../../components/base/grid";
import { Card } from "../../../components/base/card";

import { getPaths, langEnum } from "../../../utils/lang";
import { getPage, HomePageType } from "../../../cms/pages";

type PropsType = HomePageType & {
  background: string;
};
const HomePage = (props: PropsType) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Hero
        title={props.heroSentences[0]}
        sentences={props.heroSentences.slice(1, 4)}
      />
      <Layout variant="hero">
        <Heading2 as="h2">Last Posts</Heading2>
        <Grid sm={1} lg={2}>
          <Card>Post 1</Card>
          <Card>Post 2</Card>
          <Card>Post 3</Card>
          <Card>Post 4</Card>
        </Grid>

        <Heading2 as="h2">Projects Highlights</Heading2>
        <Grid sm={2} lg={4}>
          <Card>Projeto 1</Card>
          <Card>Projeto 2</Card>
          <Card>Projeto 3</Card>
          <Card>Projeto 4</Card>
        </Grid>

        <Heading2 as="h2">About</Heading2>
        <div>1</div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<
  PropsType,
  { lang: langEnum }
> = async (ctx) => {
  const props = {
    background: "full",
    ...getPage(ctx.params.lang, "/home"),
  };

  return { props };
};

export const getStaticPaths = async () => {
  return { paths: getPaths("/home"), fallback: false };
};

export default HomePage;
