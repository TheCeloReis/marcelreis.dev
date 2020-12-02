import fs from "fs";
import path from "path";
import matter from "gray-matter";

const findItemByURL = (url: string, fileNames: string[]): string => {
  const postRegExp = new RegExp(`(\\d{4}-\\d{2}-\\d{2}-)?${url}\\.md`);
  return fileNames.find((fileName) => fileName.match(postRegExp));
};

const extractPostURL = (url: string): string => {
  return url.match(/[a-z].+(?=\.md)/)[0];
};

const getCollectionFiles = ({ collection, lang }): string[] =>
  fs.readdirSync(
    path.join(process.cwd(), `src/cms/collections/`, collection, lang)
  );

function getItem<T>({
  collection,
  lang,
  url,
}: {
  collection: string;
  url: string;
  lang: string;
}): T {
  const files = getCollectionFiles({ collection, lang });

  const file = fs.readFileSync(
    path.join(
      process.cwd(),
      `src/cms/collections/`,
      collection,
      lang,
      findItemByURL(url, files)
    )
  );

  const matterItem = matter(file);

  const data = matterItem.data as T;

  return {
    ...data,
    markdown: matterItem.content,
    url,
    lang,
  };
}

function getLatestItems<T>({
  collection,
  lang,
}: {
  collection: string;
  lang: string;
  quantity?: number;
}): T[] {
  let files = getCollectionFiles({ collection, lang });
  files.sort((a, b) => (a > b ? -1 : 1));

  files = files.slice(0, 6);

  files = files.map((file) => extractPostURL(file));

  return files.map((url) => getItem({ collection, lang, url }));
}

function getCollectionURLs({
  collection,
  lang,
}: {
  collection: string;
  lang: string;
}): string[] {
  return getCollectionFiles({ collection, lang }).map((file) =>
    extractPostURL(file)
  );
}

export { getItem, getLatestItems, getCollectionURLs };
