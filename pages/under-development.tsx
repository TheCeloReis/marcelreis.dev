import React from "react";

import MainLayout from "../components/layout";
import HeroHeader from "../components/modules/heroHeader";
import { PageHeader } from "../components/modules/pageHeader";
import { Typography } from "../components/base/typography";

const UnderDevelopment = () => {
  return (
    <MainLayout title="MarcelReis Blog" description="Page under development">
      <HeroHeader height="33">
        <PageHeader>
          <Typography variant="h3" as="h1">
            Sorry
          </Typography>
          <br />
          <Typography variant="h6" as="span">
            Page under development
          </Typography>
        </PageHeader>
      </HeroHeader>
    </MainLayout>
  );
};

export default UnderDevelopment;
