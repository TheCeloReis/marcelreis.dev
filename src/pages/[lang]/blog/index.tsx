import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import { getPaths, langEnum } from "../../../utils/lang";
import { getContent, getLatestItems, MetaPage, PostType } from "src/cms";

import { PostCard } from "components/postCard";
import Layout from "components/layout";

type PropsType = MetaPage & {
  posts: PostType[];
  lang: langEnum;
};
const BlogPage = (props: PropsType) => {
  const img = { src: "https://placekitten.com/200/200", alt: "" };

  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>

      <header>
        <h1 className="">My awesome future blog</h1>
        <p className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tempore,
          deleniti architecto.
        </p>
      </header>

      <h2 className="">Latest Posts</h2>
      <div className="">
        {props.posts &&
          props.posts.map((post) => (
            <PostCard
              key={post.url}
              title={post.title}
              description={post.description}
              tags={post.tags}
              img={img}
              url={`/${props.lang}/blog/${post.url}`}
            />
          ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  PropsType,
  { lang: langEnum }
> = async (ctx) => {
  const posts = getLatestItems<PostType>({
    collection: "posts",
    lang: ctx.params.lang,
  });

  const props = {
    ...getContent("/blog", ctx.params.lang),
    posts,
    lang: ctx.params.lang,
  };
  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getPaths("/blog"), fallback: false };
};

export default BlogPage;
