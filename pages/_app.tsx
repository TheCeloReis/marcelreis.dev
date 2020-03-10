import React, { useState, useEffect } from "react";
import { NextRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { PageTransition } from "next-page-transitions";

import { GlobalStyle } from "../theme/GlobalStyle";

import Nav from "../components/modules/nav";
import Footer from "../components/modules/footer";
import { BackdropTransition } from "../components/pages/backdropTransition";
import JsTheme from "../theme/jsTheme";
import TsTheme from "../theme/tsTheme";
import { logPageView } from "../utils/analytics";

import { usePrevious } from "../hooks/usePrevious";

type PropsType = {
  Component: any;
  pageProps: any;
  router: NextRouter;
};

function App({ Component, pageProps, router }: PropsType) {
  const [darkMode, setDarkMode] = useState(false);
  const prevPage = usePrevious(router.pathname);

  useEffect(() => {
    const isDarkMode =
      window.localStorage.getItem("darkMode") === "1" ? true : false;
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (prevPage && prevPage !== router.pathname) {
      logPageView();
    }
  }, [router.pathname, prevPage]);

  const toggleDarkMode = () => {
    const isDarkMode =
      window.localStorage.getItem("darkMode") === "1" ? true : false;

    window.localStorage.setItem("darkMode", !isDarkMode ? "1" : "0");
    setDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? TsTheme : JsTheme}>
      <Nav isDarkMode={darkMode} toogleDarkMode={toggleDarkMode} />
      <PageTransition timeout={400} classNames="pt" skipInitialTransition>
        <React.Fragment key={router.asPath + darkMode}>
          <BackdropTransition className="pt-backdrop" />
          <Component {...pageProps} />
        </React.Fragment>
      </PageTransition>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
