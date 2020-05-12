import React from "react";
import Layout from "./src/components/Layout";

// eslint-disable-next-line react/prop-types
const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export default wrapPageElement;
