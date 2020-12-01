import { getContent } from "./content";
import { getItem, getLatestItems, getCollectionURLs } from "./collections";

export type MetaPage = {
  title: string;
  description: string;
  markdown: string;
};

export type MetaCollection = MetaPage & {
  url: string;
  lang: string;
};

export type PostType = MetaCollection & {
  created: string;
  tags: string[];
};

export type ProjectType = MetaCollection & {
  created: string;
  stack: string[];
  github?: string;
  website?: string;
};

export { getContent, getItem, getLatestItems, getCollectionURLs };
