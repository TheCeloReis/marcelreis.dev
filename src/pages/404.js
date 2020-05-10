import React, { useEffect } from "react";
import { useService } from "@xstate/react";

import { heroService } from "../components/Hero/machine";

import Layout from "../components/Layout";

const NotFoundPage = () => {
  const [_, send] = useService(heroService);

  useEffect(() => {
    send("FULL");
    return () => {
      send("NORMAL");
    };
  }, []);

  return (
    <Layout>
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
