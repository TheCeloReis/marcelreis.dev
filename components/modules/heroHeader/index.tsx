import React, { ReactChild } from "react";

import * as S from "./styled";

type PropsType = {
  height?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  children: ReactChild;
};

export default function HeroHeader(props: PropsType) {
  return (
    <S.Background height={props.height}>
      <S.Header>{props.children}</S.Header>
    </S.Background>
  );
}
