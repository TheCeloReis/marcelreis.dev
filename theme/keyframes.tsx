import { keyframes } from "styled-components";

export const outOfBox = (index: number) => keyframes`
  0% {
    top: -4rem;
    left: 33.33%;
    transform: scale(0);
    opacity: 0;
  }

  25% {
    left: ${
      index === 0
        ? 33.33 * index + 33.33 / 2
        : index === 2
        ? 33.33 * index - 33.33 / 2
        : 33.33
    }%;
    transform: scale(0.33);
    opacity: 0.5;
  }

  50% {
    opacity: 1;
  }

  100% {
    top: 10rem;
    left: ${index * 33.33}%;
    transform: scale(1);
  }
`;
