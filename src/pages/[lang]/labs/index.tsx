import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import { getPaths, langEnum } from "../../../utils/lang";
import { getPage, PageType } from "../../../cms/pages";

import typographyStyles from "styles/typography.module.scss";

import Layout from "components/layout";
import { getProjects, ProjectType } from "src/cms/projects";

type PropsType = PageType & {
  projects: ProjectType[];
};
const LabsPage = (props: PropsType) => {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <h1 className={typographyStyles.heading_1}>Labs</h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  PropsType,
  { lang: langEnum }
> = async (ctx) => {
  const projects = getProjects(ctx.params.lang) || [];

  const props = {
    ...getPage(ctx.params.lang, "/labs"),
    projects,
  };
  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getPaths("/labs"), fallback: false };
};

export default LabsPage;
