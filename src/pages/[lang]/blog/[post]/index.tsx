import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

import { Content } from "../../../../components/base/content";
import { PostType } from "../../../../types/content";

import { supportedLangs, getSlugs } from "../../../../utils/lang";

type PropsType = {
  frontmatter: PostType;
  markdownBody: string;
};

const BlogPage = ({ frontmatter, markdownBody }: PropsType) => {
  if (!frontmatter) return null;

  return (
    <div>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
      </Head>
      <Link href="..">
        <a>Back to post list</a>
      </Link>
      <Content as="article">
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.description}</h3>
        <ReactMarkdown source={markdownBody} />
      </Content>
    </div>
  );
};

export const getStaticProps = async ({ ...ctx }) => {
  const { post, lang } = ctx.params;

  const content = await import(
    `../../../../../content/${lang}/blog/${post}.md`
  );
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
};

export const getStaticPaths = () => {
  const paths = supportedLangs.reduce((paths, lang): any => {
    const slugs = getSlugs(lang);
    return [...paths, ...slugs.map((slug) => `/${lang}/blog/${slug}`)];
  }, []);

  return {
    paths,
    fallback: false,
  };
};

export default BlogPage;
