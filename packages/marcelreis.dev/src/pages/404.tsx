import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { supportedLangs, langEnum } from "../utils/lang";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    const lang = navigator.language.toLowerCase();
    router.replace(
      "/[lang]/not-found",
      `/${
        supportedLangs.includes(lang as langEnum) ? lang : supportedLangs[0]
      }/not-found`
    );
  }, [router]);

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default NotFoundPage;
