import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

import { getPaths } from "../../../utils/lang";
import { MetaPage, getContent } from "src/cms";

import Layout from "components/layout";
import Content from "components/content";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./_.module.scss";
import { ReactHeader } from "components/reactHeader";

type PropsType = MetaPage;
const AboutPage = (props: PropsType) => {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>

      <ReactHeader title={"Marcelo Reis"} subtitle={"Front end Developer"} />

      <Content>
        <ReactMarkdown source={props.markdown} escapeHtml={false} />
      </Content>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  PropsType,
  { lang: string }
> = async (ctx) => {
  return { props: getContent("/about", ctx.params.lang) };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getPaths("/about"), fallback: false };
};

export default AboutPage;
