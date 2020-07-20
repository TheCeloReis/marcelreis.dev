import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

import { getPaths } from "../../../utils/lang";
import { MetaPage, getContent } from "src/cms";

import Layout from "components/layout";
import Content from "components/content";

import { FaReact } from "react-icons/fa";

import styles from "./_.module.scss";

type PropsType = MetaPage;
const AboutPage = (props: PropsType) => {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>

      <div className={styles.skills}>
        <FaReact className={`${styles.react} ${styles.reactBack}`} />
        <FaReact className={styles.react} />
      </div>

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
