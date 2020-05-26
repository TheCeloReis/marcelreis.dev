import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import { Grid } from "../../../components/base/flex";
import PostCard from "../../../components/modules/postCard";
import Layout from "../../../components/modules/layout";

import { getPaths, langEnum } from "../../../utils/lang";
import { getLatestPosts, PostType } from "../../../cms/post";

import { PageType, getPage } from "../../../cms/pages";

type PropsType = PageType & {
  posts: PostType[];
  lang: langEnum;
};
const BlogPage = (props: PropsType) => {
  if (!props.posts) {
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      {!props.posts && <div>No posts!</div>}
      <Grid>
        {props.posts &&
          props.posts.map((post) => (
            <PostCard
              key={post.url}
              title={post.title}
              description={post.description}
              tags={post.tags}
              url={`/${props.lang}/blog/${post.url}`}
            />
          ))}
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  PropsType,
  { lang: langEnum }
> = async (ctx) => {
  const props = {
    ...getPage(ctx.params.lang, "/blog"),
    posts: getLatestPosts(ctx.params.lang),
    lang: ctx.params.lang,
  };
  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getPaths("/blog"), fallback: false };
};

export default BlogPage;
