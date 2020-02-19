import styled from "styled-components";

export const Text = styled.h1`
  font-size: 2.5rem;
  user-select: none;
  color: #fff;
  width: 100%;
  font-family: "Roboto Mono", monospace;

  ${({ theme }) => theme.media.greaterThan.medium} {
    font-size: 5.5rem;
  }

  ::after {
    position: absolute;
    height: 3rem;
    content: "";
    border-left: 0.1em solid white;
    margin-left: 0.5rem;
    animation: caret 1s steps(1) infinite;

    ${({ theme }) => theme.media.greaterThan.medium} {
      height: 5.5rem;
    }
  }

  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }
`;
