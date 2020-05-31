import React from "react";
import Head from "next/head";

import { getPaths, langEnum } from "../../../utils/lang";
import { GetStaticProps, GetStaticPaths } from "next";
import { getPage, PageType } from "../../../cms/pages";

import containerStyles from "styles/container.module.scss";

type PropsType = PageType;
const AboutPage = (props: PropsType) => {
  return (
    <div className={containerStyles.content}>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <div>
        <h1>This is me</h1>
      </div>
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
