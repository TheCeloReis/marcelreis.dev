import React from "react";

import * as S from "./styled";

type PropsType = {
  variant?: "blog" | "hero";
  transitionKey?: string;
  children: React.ReactChild | React.ReactChild[];
};

const Layout = (props: PropsType) => {
  return <S.Container variant={props.variant}>{props.children}</S.Container>;
};

export default Layout;
