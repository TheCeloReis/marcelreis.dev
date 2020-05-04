import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
