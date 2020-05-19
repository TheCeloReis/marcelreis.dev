import styled, { keyframes } from "styled-components";
import { Typography, Heading3 } from "../../base/typography";

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  line-height: 1;
  top: calc(75vh / 2);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: var(--spacing-1);

  color: var(--white);
  text-align: center;

  @media screen and (max-width: 576px) {
    ${Typography} {
      --heading-1: var(--heading-2);
      --heading-3: var(--heading-4);
    }
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

  & > ${Heading3} {
    font-weight: 400;
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
  }
`;
