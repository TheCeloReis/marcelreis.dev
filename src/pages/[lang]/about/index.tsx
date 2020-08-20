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

import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import Card from "uiKit/card";

type PropsType = MetaPage;
const AboutPage = (props: PropsType) => {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>

      <ReactHeader title={"Marcelo Reis"} subtitle={"Front end Developer"} />

      <div>
        <h2 className={styles.heading}>Top Skills</h2>
        <ul className={styles.highlights}>
          <li>
            <Card className={styles.highlight} inline>
              <SiTypescript className={`${styles.icon} ${styles.typescript}`} />
              <span>Typescript</span>
            </Card>
          </li>
          <li>
            <Card className={styles.highlight} inline>
              <FaReact className={`${styles.icon} ${styles.react}`} />
              <span>React</span>
            </Card>
          </li>
        </ul>

        <h2 className={styles.heading}>Others</h2>
        <ul className={styles.skillList}>
          <li>Javascript</li>
          <li>Jest / RTL</li>
          <li>HTML/CSS</li>
          <li>SASS</li>
          <li>Backbone.js</li>
          <li>jQuery</li>
          <li>Go (Golang)</li>
          <li>Webpack</li>
          <li>AWS</li>
          <li>Next.js</li>
        </ul>
      </div>
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
