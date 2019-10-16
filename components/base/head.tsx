import React, { useEffect } from "react";
import NextHead from "next/head";
import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { initGA } from "../../utils/analytics";

const GlobalStyle = createGlobalStyle`
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

type PropsType = {
  title: string;
  description: string;
  themeColor?: string;
};

export default function Head(props: PropsType) {
  useEffect(() => {
    if (!(window as any).GA_INITIALIZED) {
      initGA();
      (window as any).GA_INITIALIZED = true;
    }
  }, []);

  return (
    <>
      <NextHead>
        <link rel="icon" href="static/icon.png" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono&display=swap"
          rel="stylesheet"
        ></link>
        <title>{props.title}</title>
        <meta name="theme-color" content="#f7e019" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={props.description} />
      </NextHead>
      <GlobalStyle />
    </>
  );
}
