import React, { useEffect } from "react";

import TypedSentences from "../components/modules/typedSentences";
import { logPageView } from "../utils/analytics";

import Head from "../components/layout";
import HeroHeader from "../components/modules/heroHeader";
import Section from "../components/base/section";
import { Typography } from "../components/base/typography";
import Contact from "../components/modules/contact";

import { getPage } from "../utils/getContent";

import { IndexPage } from "../types/pages";

type PropsType = {
  pageData: IndexPage;
};

const Index = (props: PropsType) => {
  useEffect(() => {
    logPageView();
  }, []);

  return (
    <Head
      title={props.pageData.seo.title}
      description={props.pageData.seo.description}
    >
      <HeroHeader height="66">
        <TypedSentences sentences={props.pageData.phrases} speed={50} />
      </HeroHeader>
      <Section>
        <Typography dash variant="h4" as="h2">
          About
        </Typography>
        <Typography variant="body1" as="p" centerInMobile>
          {props.pageData.description}
        </Typography>
      </Section>

      <Section>
        <Typography dash variant="h4" as="h2">
          Contact
        </Typography>
        <Contact />
      </Section>
    </Head>
  );
};

Index.getInitialProps = () => {
  return {
    pageData: getPage("index"),
  };
};

export default Index;
