import React, { useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import { getLang } from "src/utils/lang";

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/[lang]/home", `/${getLang()}/home`);
  }, [router]);

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
      <meta
        name="description"
        content="Frontend developer, passionate about Javascript, Typescript and React. Living in Belo Horizonte and trying to develop some awesome stuff"
      />
    </Head>
  );
};

export const getStaticProps = () => ({ props: { background: "full" } });

export default RootPage;
