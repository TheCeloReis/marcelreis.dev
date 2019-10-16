import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  
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
  ul,
  ol,
  li,
  p,
  div,
  span,
  body {
    padding: 0;
    margin: 0;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  ul, ol {
    list-style-type: none;
  }
`;
