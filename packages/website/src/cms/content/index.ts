import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type MetaPage = {
  title: string;
  description: string;
  markdown: string;
};

export function getContent<T>(
  pathname: string,
  lang: string
): (T & MetaPage) | null {
  const filePath = path.join(
    process.cwd(),
    `src/pages/[lang]`,
    pathname,
    `_[${lang}].md`
  );

  const file = fs.readFileSync(filePath);

  const matterFile = matter(file);
  const data = matterFile.data as T & MetaPage;

  return { ...data, markdown: matterFile.content };
}
