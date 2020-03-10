import React from "react";
import { NextRouter } from "next/router";

import MainLayout from "../../components/layout";
type PropsType = {
  router: NextRouter;
};

export default function Blog(props: PropsType) {
  if (process.env.NODE_ENV !== "development") {
    props.router.replace("/under-development");
  }

  return (
    <MainLayout
      title="Blog do MarcelReis"
      description="De artigos techs a conversa de boteco, esoclha o que te agrada"
    ></MainLayout>
  );
}
