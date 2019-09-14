import React from "react";
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
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;

  @media screen and (min-width: 960px) {
    margin: 2rem 1rem 2rem 1rem;
  }
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
