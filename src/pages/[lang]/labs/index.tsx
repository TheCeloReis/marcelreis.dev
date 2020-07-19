import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import { getPaths, langEnum } from "../../../utils/lang";

import Layout from "components/layout";
import { getProjects, ProjectType } from "src/cms/projects";

import ProjectShowcase from "components/projectsShowcase";
import { getContent, MetaPage } from "src/cms/cms";

type PropsType = MetaPage & {
  projects: ProjectType[];
};
const LabsPage = (props: PropsType) => {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <h1 className="">Labs</h1>
      <ProjectShowcase projects={props.projects} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  PropsType,
  { lang: langEnum }
> = async (ctx) => {
  const projects = getProjects(ctx.params.lang) || [];

  const props = {
    ...getContent("/labs", ctx.params.lang),
    projects,
  };
  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getPaths("/labs"), fallback: false };
};

export default LabsPage;
