import React from "react";
import NextHead from "next/head";

type PropsType = {
  title: string;
  description: string;
};

export default function Head(props: PropsType) {
  return (
    <>
      <NextHead>
        <link rel="icon" href="static/icon.png" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <title>{props.title}</title>
        <meta name="theme-color" content="#f7e019" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={props.description} />
      </NextHead>{" "}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        span {
          margin: 0;
          font-family: "Roboto", Arial, Helvetica, sans-serif;
        }
        a {
          color: #000;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
