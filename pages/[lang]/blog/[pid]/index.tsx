import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const BlogPage = ({ siteTitle, frontmatter, markdownBody }) => {
  if (!frontmatter) return <></>;

  console.log(frontmatter);

  return (
    <>
      <Link href="/">
        <a>Back to post list</a>
      </Link>
      <article>
        <h1>{frontmatter.title}</h1>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </>
  );
};

export const getStaticProps = async ({ ...ctx }) => {
  const { pid } = ctx.params;

  const content = await import(`../../../../content/posts/${pid}.md`);
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
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../../../content/posts/", true, /\.md$/));

  const paths = blogSlugs.map((slug: string) => `/en-us/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
};

export default BlogPage;
