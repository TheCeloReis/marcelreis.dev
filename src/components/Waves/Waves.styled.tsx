import styled, { keyframes } from "styled-components";

const waveKeyframe = keyframes`
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const Wrapper = styled.div`
  height: 64px;
  width: 100%;
  overflow: hidden;
`;

export const WaveArea = styled.div`
  position: relative;
  min-width: 1024px;
  width: 200%;
  height: 100%;
`;

export const WaveContainer = styled.div`
  position: absolute;
  height: 96px;
  width: 200%;
  opacity: 0.66;

  animation: ${waveKeyframe} 16s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 4s;
  }
  &:nth-child(3) {
    animation-delay: 8s;
  }
  &:nth-child(4) {
    animation-delay: 12s;
  }
`;

export const SVG = styled.svg`
  height: 100%;
  width: 100%;
`;
