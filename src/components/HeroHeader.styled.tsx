import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 2.75rem;
  font-weight: bold;
  white-space: nowrap;
  ${media.greaterThan("medium")`
    font-size: 4rem;
  `}
`;

export const P = styled.p`
  color: #fff;
  font-size: 1.5rem;
  white-space: nowrap;
  margin-top: 0.75rem;
  ${media.greaterThan("medium")`
    font-size: 2rem;
  `}
`;
