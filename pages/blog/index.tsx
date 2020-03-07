import React from "react";

import MainLayout from "../../components/layout";
import { BlogCard } from "../../components/modules/blogCard";
import HeroHeader from "../../components/modules/heroHeader";
import { Typography } from "../../components/base/typography";
import { PageHeader } from "../../components/modules/pageHeader";

export default function Blog() {
  return (
    <MainLayout
      title="Blog do MarcelReis"
      description="De artigos techs a conversa de boteco, esoclha o que te agrada"
    >
      <HeroHeader height="33">
        <PageHeader>
          <Typography variant="h3" as="h1">
            Blog
          </Typography>
          <br />
          <Typography variant="h6" as="span">
            Posts de tecnologias e pensamentos indigestos sobre o mundo do meu
            ponto de vista.
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
