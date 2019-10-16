import React, { useEffect } from "react";
import NextHead from "next/head";

import { initGA } from "../../utils/analytics";

import { GlobalStyle } from "../../theme";

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
