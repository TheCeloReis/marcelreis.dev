import React from "react";

import { Linkedin, Twitter, Github } from "@styled-icons/boxicons-logos";

import * as S from "./styled";

const Footer = () => {
  return (
    <S.Footer>
      <S.Button title="Linkedin" href="https://linkedin.com/in/marcelreis">
        Linkedin
        <Linkedin size={"36px"} />
      </S.Button>
      <S.Button title="Github" href="https://github.com/marcelreis">
        Github
        <Github size={"36px"} />
      </S.Button>
      <S.Button title="Twitter" href="https://twitter.com/_marcelreis">
        Twitter
        <Twitter size={"36px"} />
      </S.Button>
    </S.Footer>
  );
};

export default Footer;
