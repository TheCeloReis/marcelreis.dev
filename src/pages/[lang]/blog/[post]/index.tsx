import React from "react";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

import { Content } from "../../../../components/base/content";
import Layout from "../../../../components/modules/layout";

import { supportedLangs, getSlugs } from "../../../../utils/lang";
import { getPostByURL, PostType, getPostsURLs } from "../../../../cms/post";

type PropsType = {
  post: PostType;
};

const BlogPage = ({ post }: PropsType) => {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>

      <Content as="article">
        <h1>{post.title}</h1>
        <h3>{post.description}</h3>
        <ReactMarkdown source={post.markdown} escapeHtml={false} />
      </Content>
    </Layout>
  );
};

export const getStaticProps = async ({ ...ctx }) => {
  const { post, lang } = ctx.params;

  return {
    props: {
      post: getPostByURL(post, lang),
    },
  };
};

export const getStaticPaths = () => {
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
