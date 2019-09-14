import React from "react";
import { Github } from "styled-icons/boxicons-logos/Github";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";
import { Mail } from "styled-icons/material/Mail";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 3rem;
  background-color: #f7e019;
  display: flex;
  justify-content: center;

  svg {
    transition: 0.3s;
    margin: 0.5rem 2rem;
    :hover {
      color: #444;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <a
        href="https://github.com/MarcelReis"
        target="_blank"
        title="Perfil do GitHub"
      >
        <Github size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/marcelreis/"
        target="_blank"
        title="Perfil do Linkedin"
      >
        <LinkedinSquare size={32} />
      </a>
      <a
        href="mailto:oi@marcelreis.dev?subject=Iae Marcelo, bora fazer algo junto?"
        target="_blank"
        title="oi@marcelreis.dev"
      >
        <Mail size={32} />
      </a>
    </FooterContainer>
  );
}
