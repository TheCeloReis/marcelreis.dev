import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import { getPaths, langEnum } from "../../../utils/lang";
import { getPage, PageType } from "../../../cms/pages";

import cardStyles from "styles/card.module.scss";
import gridStyles from "styles/grid.module.scss";
import typographyStyles from "styles/typography.module.scss";

import Layout from "components/layout";

type PropsType = PageType;
const LabsPage = (props: PageType) => {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <h1 className={typographyStyles.heading_1}>Labs</h1>
      <div
        className={[
          gridStyles.container,
          gridStyles.col_1,
          gridStyles.col_lg_2,
        ].join(" ")}
      >
        {[1, 2].map((n) => (
          <div key={n} className={cardStyles.card}>
            project {n}
          </div>
        ))}
      </div>
      &nbsp;
      <div
        className={[
          gridStyles.container,
          gridStyles.col_2,
          gridStyles.col_lg_4,
        ].join(" ")}
      >
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className={cardStyles.card}>
            project {n}
          </div>
        ))}
      </div>
    </Layout>
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
