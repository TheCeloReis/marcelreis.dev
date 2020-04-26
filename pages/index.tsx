import React from "react";

import TypedSentences from "../components/modules/typedSentences";

import Head from "../components/layout";
import HeroHeader from "../components/modules/heroHeader";
import Section from "../components/base/section";
import { Typography } from "../components/base/typography";

import { getPage } from "../utils/getContent";

import { IndexPage } from "../types/pages";
import styled from "styled-components";

type PropsType = {
  pageData: IndexPage;
};

const AboutRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => theme.media.greaterThan.small} {
    flex-direction: row;
  }
`;
const ImageContainer = styled.div`
  flex-shrink: 0;
  position: relative;

  border-radius: 50%;
  overflow: hidden;
  margin: 32px;

  width: 80%;
  padding-top: 80%;

  ${({ theme }) => theme.media.greaterThan.small} {
    width: 20%;
    padding-top: 20%;
  }
`;
const ProfilePicture = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: transform 5s ease;

  :hover {
    transform: scale(1.5);
  }
`;

const Index = (props: PropsType) => {
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
        <AboutRow>
          <ImageContainer>
            <ProfilePicture src="/static/img/profile.jpg" alt="Marcelo" />
          </ImageContainer>
          <Typography variant="body1" as="p" centerInMobile>
            {props.pageData.description}
          </Typography>
        </AboutRow>
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
