import styled, { keyframes, css } from "styled-components";

export const SVG = styled.svg`
  height: 100%;
  width: 100%;
`;

const wave = keyframes`
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

export const WaveArea = styled.div<{ position: string }>`
  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
          position: absolute;
          bottom: 0px;
        `;
      default:
        return css`
          position: relative;
        `;
    }
  }}
  min-width: 1200px;
  width: 200%;
  height: 64px;
  overflow: hidden;
`;

export const WaveContainer = styled.div<{ delay: number }>`
  position: absolute;
  height: 96px;
  width: 200%;
  opacity: 0.66;

  animation: ${wave} 16s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || 0}s;
`;
