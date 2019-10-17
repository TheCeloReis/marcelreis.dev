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

export const jsTheme = {
  color: {
    primaryL: "#f7e019",
    primary: "#f7e019",
    primaryD: "#f7e019",

    contrastH: "#000",
    contrast: "#242124",
    contrastL: "#333",

    gray50: "#fafafa",
    gray100: "#f5f5f5",
    gray200: "#eeeeee",
    gray300: "#e0e0e0",
    gray400: "#bdbdbd",
    gray500: "#9e9e9e",
    gray600: "#757575",
    gray700: "#616161",
    gray800: "#424242",
    gray900: "#212121 ",
  },
};

export const tsTheme = {
  color: {
    primaryL: "#2E92D5",
    primary: "#007ACC",
    primaryD: "#0064A7",

    contrastH: "#fff",
    contrast: "#eee",
    contrastL: "#ddd",

    gray50: "#fafafa",
    gray100: "#f5f5f5",
    gray200: "#eeeeee",
    gray300: "#e0e0e0",
    gray400: "#bdbdbd",
    gray500: "#9e9e9e",
    gray600: "#757575",
    gray700: "#616161",
    gray800: "#424242",
    gray900: "#212121 ",
  },
};
