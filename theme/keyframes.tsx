import { keyframes } from "styled-components";

export const outOfBox = (index: number) => keyframes`
  0% {
    top: -4rem;
    left: 33.33%;
    transform: scale(0);
    opacity: 0;
  }

  66% {
    top: 2rem;
    left: ${
      index === 0
        ? 33.33 * index + 33.33 / 2
        : index === 2
        ? 33.33 * index - 33.33 / 2
        : 33.33
    }%;
    transform: scale(0.5);
  }

  100% {
    top: 160px;
    left: ${index * 33.33}%;
    transform: scale(1);
  }
`;
