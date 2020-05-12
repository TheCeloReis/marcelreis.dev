import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import useSiteMetadata from "../SiteMetadata";

import * as S from "./styled";

import "../../scss/index.scss";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.elementType),
};

export default TemplateWrapper;
