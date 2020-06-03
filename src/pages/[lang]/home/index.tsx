import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import Hero from "components/hero";

import { getPaths, langEnum } from "../../../utils/lang";
import { getPage, HomePageType } from "../../../cms/pages";

import cardStyles from "styles/card.module.scss";
import gridStyles from "styles/grid.module.scss";
import typographyStyles from "styles/typography.module.scss";
import containerStyles from "styles/container.module.scss";

type PropsType = HomePageType & {
  background: string;
};
const HomePage = (props: PropsType) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Hero
        title={props.heroSentences[0]}
        sentences={props.heroSentences.slice(1, 4)}
      />
      <div className={`${containerStyles.content} ${containerStyles.withHero}`}>
        <h2 className={typographyStyles.heading_2}>Last Posts</h2>
        <div
          className={[
            gridStyles.container,
            gridStyles.col_1,
            gridStyles.col_lg_2,
          ].join(" ")}
        >
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className={cardStyles.card}>
              Post {n}
            </div>
          ))}
        </div>

        <h2 className={typographyStyles.heading_2}>Projects Highlights</h2>
        <div
          className={[
            gridStyles.container,
            gridStyles.col_2,
            gridStyles.col_lg_4,
          ].join(" ")}
        >
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className={cardStyles.card}>
              Post {n}
            </div>
          ))}
        </div>

        <h2 className={typographyStyles.heading_2}>About</h2>
        <div>1</div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<
  PropsType,
  { lang: langEnum }
> = async (ctx) => {
  const props = {
    background: "tall",
    ...getPage(ctx.params.lang, "/home"),
  };

  return { props };
};

export const getStaticPaths = async () => {
  return { paths: getPaths("/home"), fallback: false };
};

export default HomePage;
