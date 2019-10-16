import React, { ReactChild, Props } from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  background-color: #171717;
`;

const Header = styled.div`
  @media screen and (min-width: 600px) {
    font-size: 3rem;
    max-width: 800px;
  }
  display: flex;
  width: calc(100% - 0.5rem);
  position: absolute;
  top: calc(50% + 2rem);
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  text-align: center;
  justify-content: center;
  overflow: hidden;
`;

type PropsType = {
  children: ReactChild;
};

export default function HeroHeader(props: PropsType) {
  return (
    <Background>
      <Header>{props.children}</Header>
    </Background>
  );
}
