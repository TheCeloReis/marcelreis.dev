import React from "react";
import Head from "next/head";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Link href="/[lang]/blog" as="/en-us/blog">
        <a>blog</a>
      </Link>
      <Link href="/[lang]/labs" as="/en-us/labs">
        <a>labs</a>
      </Link>
      <Link href="/[lang]/about" as="/en-us/about">
        <a>about</a>
      </Link>
    </div>
  );
};

export const getStaticProps = () => ({ props: {} });

export const getStaticPaths = () => {
  return { paths: ["/en-us", "/pt-br"], fallback: false };
};

export default HomePage;
