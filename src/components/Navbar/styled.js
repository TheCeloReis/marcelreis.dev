import styled, { keyframes } from "styled-components";

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: ${({ height }) => height ?? "75vh"};
  z-index: 10;

  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.33) 100%
    ),
    radial-gradient(
      circle,
      rgba(209, 114, 253, 1) 0%,
      rgba(139, 82, 190, 1) 25%,
      rgba(105, 62, 148, 1) 50%,
      rgba(50, 26, 71, 1) 75%
    );
  background-size: 200% 200%;
  background-position-x: 50%;

  transition: height 0.2s ease;
`;

const have = keyframes`
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

export const WaveArea = styled.div`
  position: absolute;
  bottom: 0;
  min-width: 2000px;
  width: 200%;
  height: 64px;
  overflow: hidden;
  z-index: -1;
`;

export const WaveContainer = styled.div`
  position: absolute;
  height: 96px;
  width: 200%;
  opacity: 0.66;

  animation: ${have} 16s ease infinite;
  animation-delay: ${({ delay }) => delay || 0}s;
`;
