type SeoType = {
  thumbnail: string;
  description: string;
  title: string;
};

export type IndexPage = {
  seo: SeoType;
  description: string;
  phrases: string[];
};
