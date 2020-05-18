import { supportedLangs } from "../utils/lang";
import { useRouter } from "next/router";

const RootPage = () => {
  const router = useRouter();

  if (process.browser) {
    const lang: any = navigator.language.toLowerCase();
    router.replace(
      "/[lang]/home/",
      `/${supportedLangs.includes(lang) ? lang : supportedLangs[0]}/home/`
    );
  }

  return null;
};

export default RootPage;
