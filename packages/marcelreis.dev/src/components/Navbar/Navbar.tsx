import React, { useEffect, useState } from "react";
import { Menu } from "@styled-icons/material/Menu";

import * as S from "./Navbar.styled";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <S.Container>
      <S.Logo src="/img/logo.svg" alt="Marcelo Reis" />

      <S.MenuButton onClick={() => setIsOpen(!isOpen)}>
        <Menu size="2rem" />
      </S.MenuButton>

      <S.NavList isOpen={isOpen}>
        <S.NavItem>
          <a href="#about">Sobre</a>
        </S.NavItem>

        <S.NavItem>
          <a href="#experience">Experiência</a>
        </S.NavItem>

        <S.NavItem>
          <a href="#projects">Projetos</a>
        </S.NavItem>

        <S.NavItem>
          <a href="#contacts">Contato</a>
        </S.NavItem>
      </S.NavList>
    </S.Container>
  );
};

export default Navbar;
