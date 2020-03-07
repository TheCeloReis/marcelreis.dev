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
    
  body {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  a {
    color: ${({ theme }) => theme.colors.main[7]};
    transition: color 300ms ease;

    :hover {
      color: ${({ theme }) => theme.colors.main[9]};
    }
    text-decoration: none;
  }

  
  .pt-enter > .pt-backdrop {
    height: calc(100vh - 64px);
  }
  .pt-enter-active > .pt-backdrop {
    height: 0px;
  }
  .pt-exit > .pt-backdrop {
    height: 0px;
  }
  .pt-exit-active > .pt-backdrop {
    height: calc(100vh - 64px);
  }
`;
