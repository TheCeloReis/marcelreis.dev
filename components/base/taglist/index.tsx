import React from "react";
import { Typography } from "../typography";

import * as S from "./styled";

type PropsType = {
  tags: string[];
};

export const TagList = (props: PropsType) => {
  return (
    <S.Container>
      {props.tags.map(tag => (
        <S.Tag key={tag}>
          <Typography variant="subtitle2" as="p">
            {tag}
          </Typography>
        </S.Tag>
      ))}
    </S.Container>
  );
};
