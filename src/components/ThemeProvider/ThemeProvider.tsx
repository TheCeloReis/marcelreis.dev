import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import styles from "./styles";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${styles}
`;

function ThemeProvider(props: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      {props.children}
    </>
  );
}

export default ThemeProvider;
