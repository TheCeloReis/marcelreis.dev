import React from "react";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

import { getPaths, langEnum } from "../../../utils/lang";
import { GetStaticProps, GetStaticPaths } from "next";
import { getPage, PageType } from "../../../cms/pages";

import Layout from "components/layout";
import Content from "components/content";

type PropsType = PageType;
const AboutPage = (props: PropsType) => {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Content>
        <ReactMarkdown source={props.markdown} escapeHtml={false} />
      </Content>
    </Layout>
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
