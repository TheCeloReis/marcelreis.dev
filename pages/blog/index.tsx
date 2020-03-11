import React from "react";

import MainLayout from "../../components/layout";
import { BlogCard } from "../../components/modules/blogCard";
import HeroHeader from "../../components/modules/heroHeader";
import { Typography } from "../../components/base/typography";
import { PageHeader } from "../../components/modules/pageHeader";
import Redirect from "../../utils/redirect";

export default function Blog() {
  if (process.env.NODE_ENV !== "development") {
    return <Redirect path="/under-development" />;
  }

  return (
    <MainLayout title="Blog do MarcelReis" description="Page under development">
      <HeroHeader height="33">
        <PageHeader>
          <Typography variant="h3" as="h1">
            Blog
          </Typography>
          <br />
          <Typography variant="h6" as="span">
            Page under development
          </Typography>
        </PageHeader>
      </HeroHeader>
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
    </MainLayout>
  );
}
