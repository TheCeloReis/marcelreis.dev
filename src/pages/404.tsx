import { useRouter } from "next/router";

import { supportedLangs } from "../utils/lang";

const NotFoundPage = () => {
  const router = useRouter();

  if (process.browser) {
    const lang: any = navigator.language.toLowerCase();
    router.replace(
      "/[lang]/not-found",
      `/${supportedLangs.includes(lang) ? lang : supportedLangs[0]}/not-found`
    );
  }

  return null;
};

export default NotFoundPage;
