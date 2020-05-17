import React from "react";
import { supportedLangs } from "../utils/lang";
import { useRouter } from "next/router";

const RootPage = () => {
  const router = useRouter();

  if (process.browser) {
    const lang: any = navigator.language.toLowerCase();
    router.replace(
      "/[lang]",
      `/${supportedLangs.includes(lang) ? lang : supportedLangs[0]}`
    );
  }

  return null;
};

export default RootPage;
