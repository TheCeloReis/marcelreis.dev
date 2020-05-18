import { useRouter } from "next/router";

import { supportedLangs } from "../utils/lang";

const NotFoundPage = () => {
  const router = useRouter();

  if (process.browser && !router.pathname.endsWith("/")) {
    router.replace(router.pathname + "/");
  }

  return <div>Not Found</div>;
};

export default NotFoundPage;
