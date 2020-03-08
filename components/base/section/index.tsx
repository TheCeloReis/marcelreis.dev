import React from "react";
import styled from "styled-components";

const Background = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ${({ theme }) => theme.media.greaterThan.medium} {
    &:last-of-type {
      margin-bottom: 32px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 768px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base[0]};

  ${({ theme }) => theme.media.greaterThan.medium} {
    box-shadow: ${({ theme }) => theme.boxShadow[0]};
    border-radius: 2px;
    margin: 32px 16px 0 16px;
  }
`;

type PropsType = {
  children?: any;
};

export default function Section(props: PropsType) {
  return (
    <Background>
      <Container {...props} />
    </Background>
  );
}
