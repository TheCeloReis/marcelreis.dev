import React from "react";

import { getPaths } from "../../../utils/lang";

const NotFoundPage = () => {
  return <div>Not Found</div>;
};

export const getStaticProps = () => ({ props: { background: "full" } });

export const getStaticPaths = () => {
  return { paths: getPaths("/not-found"), fallback: false };
};

export default NotFoundPage;
