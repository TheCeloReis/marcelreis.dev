import React from "react";

import MainLayout from "../../components/layout";
import { BlogCard } from "../../components/modules/blogCard";

export default function Blog() {
  return (
    <MainLayout
      title="Blog do MarcelReis"
      description="De artigos techs a conversa de boteco, esoclha o que te agrada"
    >
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
    </MainLayout>
  );
}
