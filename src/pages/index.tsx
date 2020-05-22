import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { supportedLangs } from "../utils/lang";

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    const lang: any = navigator.language.toLowerCase();
    router.replace(
      "/[lang]/home",
      `/${supportedLangs.includes(lang) ? lang : supportedLangs[0]}/home`
    );
  }, []);

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export const getStaticProps = () => ({ props: { background: "full" } });

export default RootPage;
