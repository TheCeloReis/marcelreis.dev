import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import { getPaths, getPosts, langEnum } from "../../../utils/lang";

type PropsType = {
  posts?: any[];
  title: string;
  description: string;
};

const BlogPage = (props: PropsType) => {
  const router = useRouter();
  const { lang } = router.query;

  if (!props.posts) {
    return null;
  }

  return (
    <div>
      {!props.posts && <div>No posts!</div>}
      <ul>
        {props.posts &&
          props.posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link
                  href="/[lang]/blog/[post]"
                  as={`/${lang}/blog/${post.slug}`}
                >
                  <a>{post.frontmatter.title}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{}, { lang: langEnum }> = async ({
  ...ctx
}) => {
  const { lang } = ctx.params;
  const posts = getPosts(lang);

  const props: PropsType = {
    posts,
    title: "Blog",
    description: "My blog",
  };

  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getPaths("/blog"), fallback: false };
};

export default BlogPage;
