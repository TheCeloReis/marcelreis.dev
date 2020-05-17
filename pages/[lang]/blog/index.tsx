import React from "react";
import Link from "next/link";
import matter from "gray-matter";

const BlogPage = ({ posts }) => {
  if (posts === "undefined") {
    return null;
  }

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link href="/[lang]/blog/[pid]" as={`/en-us/blog/${post.slug}`}>
                  <a>{post.frontmatter.title}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export const getStaticProps = () => {
  const posts = ((context) => {
    const keys = context.keys();
    const values: any = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);

      document.data.date = document.data.date.toString();

      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../../../content/posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: "a",
      description: "a",
    },
  };
};

export const getStaticPaths = () => {
  return { paths: ["/en-us/blog", "/pt-br/blog"], fallback: false };
};

export default BlogPage;
