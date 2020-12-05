import React from "react";

import { Github } from "@styled-icons/fa-brands/Github";
import { Linkedin } from "@styled-icons/fa-brands/Linkedin";
import { Twitter } from "@styled-icons/fa-brands/Twitter";
import { Instagram } from "@styled-icons/fa-brands/Instagram";

import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.Container>
      <S.Waves />

      <S.Wrapper>
        <S.SocialList>
          <a
            href="https://www.linkedin.com/in/marcelreis/"
            title="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size="32px" />
          </a>
          <a
            href="https://github.com/MarcelReis/"
            title="Github"
            target="_blank"
            rel="noreferrer"
          >
            <Github size="32px" />
          </a>
          <a
            href="https://www.instagram.com/_marcelreis/"
            title="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size="32px" />
          </a>
          <a
            href="https://twitter.com/_marcelreis"
            title="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter size="32px" />
          </a>
        </S.SocialList>

        <S.Copyright>
          Marcelo Reis - Copyright &copy; {new Date().getFullYear()}
        </S.Copyright>
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;
