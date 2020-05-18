import React from "react";

import { getPaths } from "../../../utils/lang";

const HomePage = () => {
  return <div>Home</div>;
};

export const getStaticProps = () => ({ props: {} });

export const getStaticPaths = () => {
  return { paths: getPaths("/home/"), fallback: false };
};

export default HomePage;
