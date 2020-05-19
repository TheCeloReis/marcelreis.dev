import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { supportedLangs } from "../utils/lang";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    const lang: any = navigator.language.toLowerCase();
    router.replace(
      "/[lang]/not-found",
      `/${supportedLangs.includes(lang) ? lang : supportedLangs[0]}/not-found`
    );
  }, []);

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default NotFoundPage;
