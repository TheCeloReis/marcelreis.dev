import React from "react";
import Head from "next/head";

import { getPaths, langEnum } from "../../../utils/lang";
import Layout from "../../../components/modules/layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { getPage, PageType } from "../../../cms/pages";

type PropsType = PageType;
const LabsPage = (props: PageType) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Layout>Labs</Layout>
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
