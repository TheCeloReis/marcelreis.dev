import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  #___gatsby {
    min-height: 100%;
    position: relative;
  }
`;
