import React, { ReactChild } from "react";

import * as S from "./styled";

type PropsType = {
  onClick: () => void;
  children: ReactChild[];
  active: boolean;
  label: string;
};

export const SliderButton = (props: PropsType) => {
  return (
    <S.StyledButton
      onClick={props.onClick}
      active={props.active}
      aria-label={props.label}
    >
      <span aria-hidden="true" hidden>
        {props.label}
      </span>
      <div>
        <div>{props.children}</div>
      </div>
    </S.StyledButton>
  );
};
