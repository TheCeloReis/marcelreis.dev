import React from "react";

import { Linkedin, Twitter, Github } from "@styled-icons/boxicons-logos";

import * as S from "./styled";

const Footer = () => {
  return (
    <S.Footer>
      <S.Button href="https://linkedin.com/in/marcelreis">
        <Linkedin size={"36px"}>Linkedin</Linkedin>
      </S.Button>
      <S.Button href="https://github.com/marcelreis">
        <Github size={"36px"}>Github</Github>
      </S.Button>
      <S.Button href="https://twitter.com/_marcelreis">
        <Twitter size={"36px"}>Twitter</Twitter>
      </S.Button>
    </S.Footer>
  );
};

export default Footer;
