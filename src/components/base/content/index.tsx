import React, { ReactChildren } from "react";

import * as S from "./styled";

type PropsType = {
  as: string;
  children: ReactChildren | ReactChildren[];
};

export const Content = ({ children, as }: PropsType) => {
  return <S.Background as={as as never}>{children}</S.Background>;
};
