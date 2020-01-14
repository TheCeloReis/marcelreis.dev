import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  #__next {
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.contrast[1]};
    background-color: ${({ theme }) => theme.colors.base[1]};
    position: relative;
  }
    
  * {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li,
  p,
  div,
  span,
  button,
  body {
    padding: 0;
    margin: 0;
  }
  a {
    color: ${({ theme }) => theme.colors.main[7]};
    transition: color 300ms ease;

    :hover {
      color: ${({ theme }) => theme.colors.main[9]};
    }
    text-decoration: none;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }

  /* PAGE TRANSITION */
  .pt-enter {
    .pt-backdrop {
      transform: translateY(0);
    }
  }
  .pt-enter-active {
    .pt-backdrop {
      transform: translateY(-100%);
    }
  }
  .pt-exit {
    .pt-backdrop {
      transform: translateY(-100%);
    }
  }
  .pt-exit-active {
    .pt-backdrop {
      transform: translateY(0);
    }
  }
`;
