import React, { useEffect } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import { supportedLangs } from "../utils/lang";

const RootPage = () => {
  const { replace } = useRouter();

  useEffect(() => {
    const lang: string = navigator.language.toLowerCase();
    replace(
      "/[lang]/home",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      `/${supportedLangs.includes(lang as any) ? lang : supportedLangs[0]}/home`
    );
  }, [replace]);

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export const getStaticProps = () => ({ props: { background: "full" } });

export default RootPage;
