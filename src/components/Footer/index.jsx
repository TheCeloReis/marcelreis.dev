import React from "react";
import { Link } from "gatsby";

import { Linkedin, Twitter, Github } from "@styled-icons/boxicons-logos";

import { Waves } from "../Waves";
import * as S from "./styled";

const Footer = () => {
  return (
    <S.Wrapper>
      <Waves color="#C2C921" position="top" />
      <S.Footer>
        <S.Container>
          <S.Button href="https://linkedin.com/in/marcelreis/">
            <Linkedin size={"36px"}>Linkedin</Linkedin>
          </S.Button>
          <S.Button href="https://github.com/marcelreis">
            <Github size={"36px"}>Github</Github>
          </S.Button>
          <S.Button href="https://twitter.com/_marcelreis">
            <Twitter size={"36px"}>Twitter</Twitter>
          </S.Button>
        </S.Container>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Footer;
