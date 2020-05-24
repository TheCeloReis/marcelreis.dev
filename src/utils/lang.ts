import matter from "gray-matter";
import { PostType } from "../types/content";

const POSTS_EN_US = require.context("../../content/en-us/blog", true, /\.md$/);
const POSTS_PT_BR = require.context("../../content/pt-br/blog", true, /\.md$/);

export enum langEnum {
  EN_US = "en-us",
  PT_BR = "pt-br",
}

export const supportedLangs: langEnum[] = [langEnum.EN_US, langEnum.PT_BR];

export const getPaths = (path: string): string[] =>
  supportedLangs.map((lang) => `/${lang}${path}`);

export const getSlugs = (lang: langEnum): string[] => {
  const keys = context[lang].blog.posts.keys();
  const data = keys.map((key) => {
    // eslint-disable-next-line no-useless-escape
    const slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

    return slug;
  });
  return data;
};

type PostDocumentType = {
  frontmatter: PostType;
  markdownBody: string;
  slug: string;
};
export const getPosts = (lang: langEnum): PostDocumentType[] => {
  const postContext = context[lang].blog.posts;

  const keys = postContext.keys();
  const values: any = keys.map(postContext);

  const data = keys.map((key, index) => {
    // eslint-disable-next-line no-useless-escape
    const slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
    const value = values[index];
    const document = matter(value.default);

    return {
      frontmatter: document.data as PostType,
      markdownBody: document.content,
      slug,
    };
  });

  data.sort((a, b) => (a.frontmatter.created > b.frontmatter.created ? 1 : -1));

  return data;
};

const context = {
  "en-us": {
    blog: {
      posts: POSTS_EN_US,
    },
  },
  "pt-br": {
    blog: {
      posts: POSTS_PT_BR,
    },
  },
};
