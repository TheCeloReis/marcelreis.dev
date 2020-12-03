import React, { PropsWithChildren } from "react";

import * as S from "./HeroHeader.styled";

function HeroHeader(props: PropsWithChildren<unknown>) {
  return <S.Container>{props.children}</S.Container>;
}

export default HeroHeader;
