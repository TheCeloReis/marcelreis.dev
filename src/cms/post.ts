import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { langEnum } from "../utils/lang";
import { PostData } from "../types/content";

const BLOG_FILES: { [key in langEnum]?: string[] } = {};

(function initPostFiles() {
  const langDirs = fs.readdirSync(path.join(process.cwd(), "./content/"));
  langDirs.forEach((lang: langEnum): void => {
    const dir = path.join(process.cwd(), `./content/${lang}/blog/`);
    const files = fs.readdirSync(dir);

    BLOG_FILES[lang] = files.sort((a, b) => (a > b ? -1 : 1));
  });
})();

export const extractPostURL = (urls: string): string => {
  return urls.match(/[a-z].+(?=\.md)/)[0];
};

export function getPostsURLs(lang: langEnum, qnt?: number): string[] {
  const postUrls = BLOG_FILES[lang].map((file) => extractPostURL(file));

  if (qnt) {
    return postUrls.slice(0, qnt);
  }

  return postUrls;
}

export function findPostByURL(url: string, fileNames: string[]): string {
  const postRegExp = new RegExp(`\\d+-\\d+-\\d+-${url}\\.md`);
  return fileNames.find((fileName) => fileName.match(postRegExp));
}

export type PostType = PostData & {
  url: string;
  markdown: string;
};
export function getPostByURL(postURL: string, lang: langEnum): PostType {
  const post = findPostByURL(postURL, BLOG_FILES[lang]);
  const file = fs.readFileSync(
    path.join(process.cwd(), `./content/${lang}/blog/${post}`)
  );
  const matterPost = matter(file);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: PostData = matterPost.data as any;

  return {
    ...data,
    url: postURL,
    markdown: matterPost.content,
  };
}

export function getLatestPosts(lang: langEnum, qnt?: number): PostType[] {
  return getPostsURLs(lang, qnt).map((postURL) => getPostByURL(postURL, lang));
}
