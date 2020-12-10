import React from "react";

import * as S from "./Navbar.styled";

const Navbar = () => {
  return (
    <S.Container>
      <div>MR</div>

      <S.NavList>
        <li>1. Sobre</li>
        <li>2. Experiência</li>
        <li>3. Projetos</li>
        <li>4. Contato</li>
      </S.NavList>
    </S.Container>
  );
};

export default Navbar;
