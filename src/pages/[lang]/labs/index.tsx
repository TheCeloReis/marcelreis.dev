import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import { getPaths, langEnum } from "../../../utils/lang";
import Layout from "../../../components/modules/layout";
import { getPage, PageType } from "../../../cms/pages";
import { Heading1 } from "../../../components/base/typography";
import { Grid } from "../../../components/base/grid";
import { Card } from "../../../components/base/card";

type PropsType = PageType;
const LabsPage = (props: PageType) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Layout>
        <Heading1>Labs</Heading1>
        <Grid sm={1} md={2}>
          <Card>Project 1</Card>
          <Card>Project 2</Card>
        </Grid>
        &nbsp;
        <Grid sm={2} md={4}>
          <Card>Project 1</Card>
          <Card>Project 2</Card>
          <Card>Project 3</Card>
          <Card>Project 4</Card>
        </Grid>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<
  PropsType,
  { lang: langEnum }
> = async (ctx) => {
  const props = {
    ...getPage(ctx.params.lang, "/labs"),
  };
  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getPaths("/labs"), fallback: false };
};

export default LabsPage;
