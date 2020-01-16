export type ProjectType = {
  attributes: {
    lang: "en" | "es" | "fr" | "pt";
    title: string;
    url: string;
    github?: string;
    website?: string;
    description: string;
    thumbnail: string;
    hightlight: "0" | "1" | "2" | "3";
  };
  html: string;
};
