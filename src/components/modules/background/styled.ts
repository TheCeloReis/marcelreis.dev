import styled, { keyframes } from "styled-components";

type HeaderProps = {
  height: "full" | "tall" | "fixed" | "hidden";
};
export const Header = styled.div<HeaderProps>`
  position: ${({ height }) => (height === "full" ? "fixed" : "absolute")};
  width: 100%;
  height: ${({ height }) =>
    height === "full" || "tall" === height ? "calc(100vh - 48px)" : "72px"};
  z-index: 10;
  overflow: hidden;

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

const wave = keyframes`
  0% { transform: translateX(0%) }
  50% { transform: translateX(-50%) }
  100% { transform: translateX(0%) }
`;

export const WaveArea = styled.div`
  position: absolute;
  bottom: 0;
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

const star = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Star = styled.div<{ stars: string }>`
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  box-shadow: ${({ stars }) => stars};
`;

export const Star1 = styled(Star)`
  width: 1px;
  height: 1px;
  animation: ${star} 2048s linear infinite;
`;

export const Star2 = styled(Star)`
  width: 2px;
  height: 2px;
  animation: ${star} 1536s linear infinite;
`;

export const Star3 = styled(Star)`
  width: 3px;
  height: 3px;
  animation: ${star} 1152s linear infinite;
`;
