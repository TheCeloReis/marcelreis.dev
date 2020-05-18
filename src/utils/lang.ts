import matter from "gray-matter";

const POSTS_EN_US = require.context("../../content/en-us/blog", true, /\.md$/);
const POSTS_PT_BR = require.context("../../content/pt-br/blog", true, /\.md$/);

export enum langEnum {
  EN_US = "en-us",
  PT_BR = "pt-br",
}

export const supportedLangs: langEnum[] = [langEnum.EN_US, langEnum.PT_BR];

export const getPaths = (path: string) =>
  supportedLangs.map((lang) => `/${lang}${path}`);

export const getSlugs = (lang: langEnum) => {
  const keys = context[lang].blog.posts.keys();
  const data = keys.map((key) => {
    let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

    return slug;
  });
  return data;
};

export const getPosts = (lang: langEnum) => {
  const postContext = context[lang].blog.posts;

  const keys = postContext.keys();
  const values: any = keys.map(postContext);

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
