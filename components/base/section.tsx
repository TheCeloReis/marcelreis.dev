import React, { ReactChild } from "react";
import styled from "styled-components";

const Background = styled.section`
  display: flex;
  width: 100%;
  background-color: #eee;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 960px) {
    margin: 2rem 1rem 2rem 1rem;
    padding: 2rem;
  }
  padding: 2rem 1rem 2rem 1rem;
  max-width: 1000px;
  width: 100%;
  background-color: #fff;
`;

type PropsType = {
  children?: any;
};

export default function Section(props: PropsType) {
  return (
    <Background>
      <Container>{props.children}</Container>
    </Background>
  );
}
