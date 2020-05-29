import React from "react";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

import { Layout } from "../../../../components/base/layout";

import { supportedLangs, langEnum } from "../../../../utils/lang";
import { getPostByURL, PostType, getPostsURLs } from "../../../../cms/post";
import { GetStaticProps, GetStaticPaths } from "next";

type PropsType = {
  post: PostType;
};

const BlogPage = ({ post }: PropsType) => {
  return (
    <Layout as="article">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>

      <h1>{post.title}</h1>
      <h3>{post.description}</h3>
      <ReactMarkdown source={post.markdown} escapeHtml={false} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  PropsType,
  { post: string; lang: langEnum }
> = async (ctx) => {
  const props = {
    post: getPostByURL(ctx.params.post, ctx.params.lang),
    lang: langEnum,
  };

  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paths = supportedLangs.reduce((paths, lang): any => {
    const slugs = getPostsURLs(lang);
    return [...paths, ...slugs.map((slug) => `/${lang}/blog/${slug}`)];
  }, []);

  return {
    paths,
    fallback: false,
  };
};

export default BlogPage;
