import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import PostCard from "components/modules/postCard";

import { getPaths, langEnum } from "../../../utils/lang";
import { getLatestPosts, PostType } from "../../../cms/post";

import { PageType, getPage } from "../../../cms/pages";

import containerStyles from "styles/container.module.scss";

type PropsType = PageType & {
  posts: PostType[];
  lang: langEnum;
};
const BlogPage = (props: PropsType) => {
  return (
    <div className={`${containerStyles.content}`}>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <div>
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
      </div>
    </div>
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
