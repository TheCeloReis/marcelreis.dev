import React from "react";
import Head from "next/head";

import { getPaths, langEnum } from "../../../utils/lang";
import { GetStaticProps } from "next";
import { getPage, PageType } from "../../../cms/pages";

type PropsType = PageType & {
  background: string;
};
const NotFoundPage = (props: PropsType) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      Not Found
    </div>
  );
};

export const getStaticProps: GetStaticProps<
  PropsType,
  { lang: langEnum }
> = async (ctx) => {
  const props = {
    ...getPage(ctx.params.lang, "/about"),
    background: "full",
  };

  return { props };
};

export const getStaticPaths = () => {
  return { paths: getPaths("/not-found"), fallback: false };
};

export default NotFoundPage;
