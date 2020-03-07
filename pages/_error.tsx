import React, { useEffect } from "react";

import MainLayout from "../components/layout";

import { logPageView } from "../utils/analytics";

import Section from "../components/base/section";
import { Typography } from "../components/base/typography";

export default function Error() {
  useEffect(() => {
    logPageView();
  }, []);

  return (
    <MainLayout
      title="MarcelReis FrontEnd Developer"
      description="Desenvolvedor FrontEnd no Letras. Amante do Javascript, trabalho principalmente com React, Typesript, jQuery, Backbone e SASS"
    >
      <Section>
        <Typography dash variant="h3" as="h1">
          Página não encontrada
        </Typography>
      </Section>
    </MainLayout>
  );
}
