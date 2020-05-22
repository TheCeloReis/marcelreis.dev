import React, { ReactChildren } from "react";

import * as S from "./styled";

type PropsType = {
  variant?: "blog" | "home";
  transitionKey?: string;
  children: any;
};

const Layout = (props: PropsType) => {
  return <S.Layout>{props.children}</S.Layout>;
};

export default Layout;
