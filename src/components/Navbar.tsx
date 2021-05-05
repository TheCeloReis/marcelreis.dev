import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Menu } from "@styled-icons/material/Menu";

import * as S from "./Navbar.styled";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  if (router.pathname === "/links") {
    return (
      <S.Container>
        <S.Logo src="/img/logo.svg" alt="Marcelo Reis" />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Logo src="/img/logo.svg" alt="Marcelo Reis" />

      <S.MenuButton
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: "none" }}
      >
        <Menu size="2rem" />
      </S.MenuButton>

      <S.NavList isOpen={isOpen} style={{ display: "none" }}>
        <S.NavItem>
          <a href="#">Home</a>
        </S.NavItem>

        <S.NavItem>
          <a href="#">Projects</a>
        </S.NavItem>

        <S.NavItem>
          <a href="#">Contact</a>
        </S.NavItem>
      </S.NavList>
    </S.Container>
  );
};

export default Navbar;
