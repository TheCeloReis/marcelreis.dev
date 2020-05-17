import React from "react";

const AboutPage = () => {
  return <div></div>;
};

export const getStaticProps = () => ({ props: {} });

export const getStaticPaths = () => {
  return { paths: ["/en-us/about", "/pt-br/about"], fallback: false };
};

export default AboutPage;
