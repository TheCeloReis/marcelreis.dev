import React, { useEffect } from "react";
import { useService } from "@xstate/react";
import styled from "styled-components";

import { heroService } from "../components/Hero/machine";

import Layout from "../components/Layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;

  h1,
  p {
    margin: 0;
    text-align: center;
    color: #fff;
  }
`;

const Header = styled.h1`
  font-size: 4rem;
  margin-bottom: 16px;
`;

const Text = styled.p`
  font-size: 2rem;
`;

const NotFoundPage = () => {
  const [_, send] = useService(heroService);

  useEffect(() => {
    send({
      type: "FULL",
      Component: (
        <Container>
          <Header>Error 404</Header>
          <Text>Looks like you're lost in space</Text>
        </Container>
      ),
    });

    return () => send("NORMAL");
  }, []);

  return <Layout />;
};

export default NotFoundPage;
