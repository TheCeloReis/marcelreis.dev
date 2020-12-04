import React, { PropsWithChildren } from "react";

import * as S from "./Layout.styled";

function Layout(props: PropsWithChildren<unknown>) {
  return <S.Container>{props.children}</S.Container>;
}

export default Layout;
