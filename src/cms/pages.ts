import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { langEnum } from "../utils/lang";
import { PageMeta } from "../types/content";

export type PageType = PageMeta & {
  url: string;
  markdown: string;
};
export function getPage(lang: langEnum, url: string): PageType {
  const file = fs.readFileSync(
    path.join(process.cwd(), `./content/${lang}/pages${url}.md`)
  );
  const matterPage = matter(file);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: PageMeta = matterPage.data as any;

  return {
    ...data,
    url: url,
    markdown: matterPage.content,
  };
}
