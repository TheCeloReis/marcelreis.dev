import React from "react";
import Head from "next/head";

import Layout from "../../../components/base/layout";

import { getPaths, langEnum } from "../../../utils/lang";
import { GetStaticProps, GetStaticPaths } from "next";
import { getPage, PageType } from "../../../cms/pages";

type PropsType = PageType;
const AboutPage = (props: PropsType) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Layout>
        <h1>This is me</h1>
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps<
  PropsType,
  { lang: langEnum }
> = async (ctx) => {
  return { props: getPage(ctx.params.lang, "/about") };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getPaths("/about"), fallback: false };
};

export default AboutPage;
