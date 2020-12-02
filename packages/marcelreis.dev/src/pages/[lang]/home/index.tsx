import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import Hero from "components/hero";

import { getPaths, langEnum } from "../../../utils/lang";
import { getContent, MetaPage, getLatestItems, PostType } from "src/cms";

import { PostCard } from "components/postCard";
import Layout from "components/layout";
import Content from "components/content";
import LanguageSelector from "components/languageSelector";

const CovidTimer = dynamic(() => import("components/covidTimer"), {
  ssr: false,
});

import styles from "./_.module.scss";
import { useTranslation } from "src/cms/translation";

const img = {
  src: "https://placekitten.com/200/200",
  alt: "Kitten",
};

type ContentType = {
  heroSentences: string[];
  t: { [key: string]: string };
};
type PropsType = MetaPage &
  ContentType & {
    latestPosts: PostType[];
  };
const HomePage = (props: PropsType) => {
  const t = useTranslation(props.t);
  const { query } = useRouter();
  const lang = query.lang;

  return (
    <Layout padding={"hero"}>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Hero
        title={props.heroSentences[0]}
        sentences={props.heroSentences.slice(1, 4)}
      />

      <LanguageSelector className={styles.languageSelector} />

      <Content>
        <ReactMarkdown source={props.markdown} escapeHtml={false} />
      </Content>

      <h2 className="">{t("latestPosts")}</h2>
      <div className="">
        {props.latestPosts &&
          props.latestPosts.map((post) => (
            <PostCard
              key={post.url}
              title={post.title}
              description={post.description}
              tags={post.tags}
              img={img}
              url={`/${lang}/blog/${post.url}`}
            />
          ))}
      </div>
      <CovidTimer />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  PropsType,
  { lang: langEnum }
> = async (ctx) => {
  const props = {
    ...getContent<ContentType>("/home", ctx.params.lang),
    background: "tall",
    latestPosts: getLatestItems<PostType>({
      collection: "posts",
      lang: ctx.params.lang,
    }),
  };

  return { props };
};

export const getStaticPaths = async () => {
  return { paths: getPaths("/home"), fallback: false };
};

export default HomePage;
