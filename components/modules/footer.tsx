import React from "react";
import { Github } from "styled-icons/boxicons-logos/Github";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";
import { Mail } from "styled-icons/material/Mail";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 3rem;
  background-color: ${(props: any) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;

  svg {
    color: ${(props: any) => props.theme.color.contrastH};
    transition: 0.3s;
    margin: 0.5rem 2rem;
    :hover {
      color: ${(props: any) => props.theme.color.gray500};
    }
  }
`;

const FooterSpace = styled.div`
  height: 3rem;
`;

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <a
          href="https://github.com/MarcelReis"
          target="_blank"
          title="Perfil do GitHub"
          rel="noopener"
        >
          <Github size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/marcelreis/"
          target="_blank"
          title="Perfil do Linkedin"
          rel="noopener"
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
      <FooterSpace />
    </>
  );
}
