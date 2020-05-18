import React, { ReactChildren } from "react";

import * as S from "./styled";

type PropsType = {
  as: string;
  children: any | any[];
};

const Content = ({ children, as }: PropsType) => {
  return <S.Background as={as}>{children}</S.Background>;
};

export default Content;
