import React, { ReactChild, Props } from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  background-color: #171717;
`;

type PropsType = {
  children: ReactChild;
};

export default function HeroContainer(props: PropsType) {
  return <Background>{props.children}</Background>;
}
