import React from "react";

import * as S from "./styled";

import { Heading1, Heading3 } from "../../base/typography";

const Hero = () => {
  return (
    <S.Container>
      <Heading1>I'm Marcelo Reis</Heading1>
      <S.Lines>
        <Heading3>Front-end Developer</Heading3>
        <Heading3>Web Designer Enthusiast</Heading3>
        <Heading3>Explaining code with words</Heading3>
      </S.Lines>
    </S.Container>
  );
};

export default Hero;
