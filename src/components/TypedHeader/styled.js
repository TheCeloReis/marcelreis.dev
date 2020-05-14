import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  color: var(--white);
  text-align: center;

  font-size: var(--heading-1);
`;

export const FirstLine = styled.h1`
  font-size: var(--heading-2);

  @media screen and (min-width: 576px) {
    font-size: var(--heading-1);
  }
`;

const fadeDown = keyframes`
  75% {
    transform: translate(-50%, -100%);
    opacity: 0;
  }
  95% {
    transform: translate(-50%, 0%);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 0%) scale(0.9);
    opacity: 0;
  }
`;

export const Lines = styled.div`
  position: relative;
  margin-top: var(--spacing-2);
  font-size: var(--heading-4);

  @media screen and (min-width: 576px) {
    font-size: var(--heading-2);
  }
`;

export const FadeDownLine = styled.p`
  position: absolute;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -100%);
  opacity: 0;

  animation: 12s ${fadeDown} ease 0s infinite;

  :nth-of-type(1) {
    animation-delay: -8s;
  }
  :nth-of-type(2) {
    animation-delay: -4s;
  }
  :nth-of-type(3) {
    animation-delay: 0s;
  }
`;
