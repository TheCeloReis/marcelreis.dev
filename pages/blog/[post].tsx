import React from "react";

import MainLayout from "../../components/layout";
import Redirect from "../../utils/redirect";

export default function Blog() {
  if (process.env.NODE_ENV !== "development") {
    return <Redirect path="/under-development" />;
  }

  return (
    <MainLayout
      title="Blog do MarcelReis"
      description="De artigos techs a conversa de boteco, esoclha o que te agrada"
    ></MainLayout>
  );
}
