import React, { useEffect, useState } from "react";

import Head from "../../components/layout/main";
import { logPageView } from "../../utils/analytics";

import { jsTheme, tsTheme } from "../../theme";

import Section from "../../components/base/section";

export default function index() {
  const [ts, setTs] = useState(false);

  useEffect(() => {
    logPageView();
  }, []);

  return (
    <Head
      title="MarcelReis FrontEnd Developer"
      description="Desenvolvedor FrontEnd no Letras. Amante do Javascript, trabalho principalmente com React, Typesript, jQuery, Backbone e SASS"
      theme={ts ? tsTheme : jsTheme}
    >
      <Section>
        <h2>Slides</h2>
      </Section>
    </Head>
  );
}
