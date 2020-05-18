import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { supportedLangs, getSlugs } from "../../../../utils/lang";
import Content from "../../../../components/base/content";

const BlogPage = ({ siteTitle, frontmatter, markdownBody }) => {
  if (!frontmatter) return null;

  return (
    <>
      <Link href="../">
        <a>Back to post list</a>
      </Link>
      <Content as="article">
        <h1>{frontmatter.title}</h1>
        <ReactMarkdown source={markdownBody} />
      </Content>
    </>
  );
};

export const getStaticProps = async ({ ...ctx }) => {
  const { post, lang } = ctx.params;

  const content = await import(
    `../../../../../content/${lang}/blog/${post}.md`
  );
  const data = matter(content.default);

  data.data.date = data.data.date.toString();

  return {
    props: {
      siteTitle: "123",
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
};

export const getStaticPaths = () => {
  const paths = supportedLangs.reduce((paths, lang): any => {
    const slugs = getSlugs(lang);
    return [...paths, ...slugs.map((slug) => `/${lang}/blog/${slug}/`)];
  }, []);

  return {
    paths,
    fallback: false,
  };
};

export default BlogPage;
