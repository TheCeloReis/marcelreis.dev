import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { getPaths, langEnum } from "../../../utils/lang";
import { getContent, MetaPage } from "src/cms";

type PropsType = MetaPage & {
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
    ...getContent("/about", ctx.params.lang),
    background: "full",
  };

  return { props };
};

export const getStaticPaths = () => {
  return { paths: getPaths("/not-found"), fallback: false };
};

export default NotFoundPage;
