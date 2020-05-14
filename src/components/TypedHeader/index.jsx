import React from "react";

import * as S from "./styled";

const TypedHeader = () => {
  return (
    <S.Container>
      <S.FirstLine>I'm Marcelo Reis</S.FirstLine>
      <S.Lines>
        <S.FadeDownLine>Front-end Developer</S.FadeDownLine>
        <S.FadeDownLine>Web Designer Enthusiast</S.FadeDownLine>
        <S.FadeDownLine>Explaining code with words</S.FadeDownLine>
      </S.Lines>
    </S.Container>
  );
};

export default TypedHeader;
