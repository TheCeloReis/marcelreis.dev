import React, { useEffect } from "react";

import { logPageView } from "../../utils/analytics";

import MainLayout from "../../components/layout";

export default function Blog() {
  useEffect(() => {
    logPageView();
  }, []);

  return (
    <MainLayout
      title="Blog do MarcelReis"
      description="De artigos techs a conversa de boteco, esoclha o que te agrada"
    ></MainLayout>
  );
}
