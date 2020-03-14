import React from "react";

import MainLayout from "../components/layout";

import { Typography } from "../components/base/typography";
import HeroHeader from "../components/modules/heroHeader";
import { PageHeader } from "../components/modules/pageHeader";

const Error = () => {
  return (
    <MainLayout
      title="MarcelReis Front End Developer"
      description="Desenvolvedor FrontEnd no Letras. Amante do Javascript, trabalho principalmente com React, Typesript, jQuery, Backbone e SASS"
    >
      <HeroHeader height="33">
        <PageHeader>
          <Typography variant="h3" as="h1">
            Sorry
          </Typography>
          <br />
          <Typography variant="h6" as="span">
            Page not found
          </Typography>
        </PageHeader>
      </HeroHeader>
    </MainLayout>
  );
};

export default Error;
