import React from "react";

import * as S from "./styled";

import { Github } from "styled-icons/boxicons-logos/Github";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";
import { Mail } from "styled-icons/material/Mail";

export default function Footer() {
  return (
    <>
      <S.Container>
        <a
          href="https://github.com/MarcelReis"
          target="_blank"
          title="Perfil do GitHub"
          rel="noopener noreferrer"
        >
          <Github size={32}>GitHub</Github>
        </a>
        <a
          href="https://www.linkedin.com/in/marcelreis/"
          target="_blank"
          title="Perfil do Linkedin"
          rel="noopener noreferrer"
        >
          <LinkedinSquare size={32}>Linkedin</LinkedinSquare>
        </a>
        <a
          href="mailto:oi@marcelreis.dev?subject=Olá Marcelo, "
          rel="noopener noreferrer"
          title="oi@marcelreis.dev"
        >
          <Mail size={32}>Email</Mail>
        </a>
      </S.Container>
      <div style={{ height: "3rem" }} />
    </>
  );
}
