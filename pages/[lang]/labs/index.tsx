import React from "react";

const LabsPage = () => {
  return <div></div>;
};

export const getStaticPaths = () => {
  return { paths: ["/en-us/labs", "/pt-br/labs"], fallback: false };
};

export const getStaticProps = () => ({ props: {} });

export default LabsPage;
