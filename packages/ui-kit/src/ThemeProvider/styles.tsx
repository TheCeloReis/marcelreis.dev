import { css } from "styled-components";

const styles = css`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body,
  html {
    height: 100%;
  }

  html {
    font-size: 16px;
  }

  body {
    position: relative;
    box-sizing: border-box;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: var(--contrast);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default styles;
