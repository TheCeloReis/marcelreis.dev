import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

import { ThemeProvider } from "@marcelreis/ui-kit";
import Footer from "components/Footer";

export default class MyDocument extends Document<{
  styleTags: React.ReactNode;
}> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();

    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    sheet.collectStyles(<ThemeProvider />);
    sheet.collectStyles(<Footer />);

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en-us">
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
