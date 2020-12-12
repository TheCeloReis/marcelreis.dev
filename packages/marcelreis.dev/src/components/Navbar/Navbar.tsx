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
        <S.NavItem>Sobre</S.NavItem>
        <S.NavItem>Experiência</S.NavItem>
        <S.NavItem>Projetos</S.NavItem>
        <S.NavItem>Contato</S.NavItem>
      </S.NavList>
    </S.Container>
  );
};

export default Navbar;
