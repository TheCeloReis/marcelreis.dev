import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import { getPaths, langEnum } from "../../../utils/lang";
import { Grid } from "../../../components/base/flex";

import PostCard from "../../../components/modules/postCard";

import Layout from "../../../components/modules/layout";

import { getLatestPosts, PostType } from "../../../cms/post";

type PropsType = {
  posts: PostType[];
};

const BlogPage = (props: PropsType) => {
  if (!props.posts) {
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>Blog | Marcelo Reis</title>
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
              slug={post.url}
            />
          ))}
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<any, { lang: langEnum }> = async ({
  ...ctx
}) => {
  const props: PropsType = {
    posts: getLatestPosts(ctx.params.lang),
  };

  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getPaths("/blog"), fallback: false };
};

export default BlogPage;
