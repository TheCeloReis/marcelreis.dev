import styled, { css, keyframes } from "styled-components";

import BaseWaves from "../Waves";

export const Overlay = styled.div<{ full: boolean }>`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  z-index: 10;

  ${({ full }) =>
    full
      ? css`
          opacity: 1;
          transition: transform 0ms ease 0ms, opacity 0ms ease 0ms;
          transform: translateX(0);
        `
      : css`
          opacity: 0;
          transition: transform 0ms ease 300ms, opacity 200ms ease 100ms;
          transform: translateX(100%);
        `}
`;

export const Body = styled.div`
  position: absolute;
  height: calc(100vh - 72px);
  max-height: calc(100% - 72px);
  z-index: 10;
  overflow: hidden;
  width: 100%;

  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.33) 100%
    ),
    radial-gradient(
      circle,
      var(--primary-light) 0%,
      var(--primary) 33%,
      var(--primary-dark) 66%
    );
  background-size: 200% 200%;
  background-position-x: 50%;

  transition: height 0.3s ease-in-out;
`;

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Spacer = styled.div`
  height: calc(100vh - 72px);
  max-height: calc(100% - 72px);
`;

export const Stars = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border-radius: 50%;

  &:nth-child(2) {
    width: 1px;
    height: 1px;
    animation: ${rotate} 2048s linear infinite;
  }
  &:nth-child(3) {
    width: 2px;
    height: 2px;
    animation: ${rotate} 1536s linear infinite;
  }
  &:nth-child(4) {
    width: 3px;
    height: 3px;
    animation: ${rotate} 1152s linear infinite;
  }
`;

export const Waves = styled(BaseWaves)`
  position: absolute;
  bottom: 0px;
`;
