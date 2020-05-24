import React from "react";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import { getPaths, getPosts, langEnum } from "../../../utils/lang";
import { Grid } from "../../../components/base/flex";

import PostCard from "../../../components/modules/postCard";

import Layout from "../../../components/modules/layout";

import { PostType } from "../../../types/content";

type PropsType = {
  posts: {
    frontmatter: PostType;
    markdownBody: string;
    slug: string;
  }[];
};

const BlogPage = (props: PropsType) => {
  const router = useRouter();
  const { lang } = router.query;

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
              key={post.slug}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              tags={post.frontmatter.tags}
              slug={post.slug}
            />
          ))}
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<any, { lang: langEnum }> = async ({
  ...ctx
}) => {
  const { lang } = ctx.params;
  const posts = getPosts(lang);

  const props: PropsType = {
    posts,
  };

  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getPaths("/blog"), fallback: false };
};

export default BlogPage;
