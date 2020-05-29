import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import PostCard from "../../../components/modules/postCard";
import Layout from "../../../components/base/layout";
import { Grid } from "../../../components/base/grid";

import { getPaths, langEnum } from "../../../utils/lang";
import { getLatestPosts, PostType } from "../../../cms/post";

import { PageType, getPage } from "../../../cms/pages";
import styled from "styled-components";

type PropsType = PageType & {
  posts: PostType[];
  lang: langEnum;
};
const BlogPage = (props: PropsType) => {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <PostGrid sm={1}>
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
      </PostGrid>
    </Layout>
  );
};

const PostGrid = styled(Grid)`
  padding-top: var(--spacing-3);
`;

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
