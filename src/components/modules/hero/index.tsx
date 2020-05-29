import React from "react";

import * as S from "./styled";

import { Heading1, Heading3 } from "../../base/typography";

type PropsType = {
  title: string;
  sentences: string[];
};
const Hero = (props: PropsType) => {
  return (
    <S.Container>
      <Heading1 as="h1">{props.title}</Heading1>
      <S.Lines>
        {props.sentences.map((sentence, index) => (
          <Heading3 key={index}>{sentence}</Heading3>
        ))}
      </S.Lines>
    </S.Container>
  );
};

export default Hero;
