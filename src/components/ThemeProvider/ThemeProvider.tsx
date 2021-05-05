import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import styles from "./styles";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${variables}
  ${styles}
`;

function ThemeProvider(props: {children: React.ReactNode}) {
  return (
    <>
      <GlobalStyle />
      {props.children}
    </>
  );
}

export default ThemeProvider;
