import styled, { keyframes } from "styled-components";

export const Header = styled.div`
  position: absolute;
  width: 100%;
  height: ${({ height }) => {
    switch (height) {
      case "full":
        return "100%";
      case "hero":
        return "75vh";
      default:
        return "72px";
    }
  }};
  z-index: 10;
  overflow: hidden;

  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.33) 100%
    ),
    radial-gradient(
      circle,
      rgba(139, 82, 190, 1) 0%,
      rgba(105, 62, 148, 1) 50%,
      rgba(50, 26, 71, 1) 75%
    );
  background-size: 200% 200%;
  background-position-x: 50%;

  transition: height 1s ease-in-out;
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

export const WaveArea = styled.div`
  position: absolute;
  bottom: 0;
  min-width: 1200px;
  width: 200%;
  height: 64px;
  overflow: hidden;
`;

export const WaveContainer = styled.div`
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

const Star = styled.div`
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
  animation: ${star} 64s linear infinite;
`;

export const Star2 = styled(Star)`
  width: 2px;
  height: 2px;
  animation: ${star} 96s linear infinite;
`;

export const Star3 = styled(Star)`
  width: 3px;
  height: 3px;
  animation: ${star} 128s linear infinite;
`;

const entering = keyframes`
  from {
    transform: translateX(-50%) translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(0%);
    opacity: 1;
  }
`;

export const NavContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  height: 64px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;

  animation-play-state: paused;
  animation: ${entering} 2s ease;
`;

export const HeroContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding-top: 64px;
`;
