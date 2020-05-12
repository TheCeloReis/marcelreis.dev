import React from "react";
import { Link } from "gatsby";

import Hero from "../Hero";

import * as S from "./styled";

const Navbar = () => {
  return (
    <Hero>
      <Link to="/">
        <S.Photo />
      </Link>

      <S.Nav>
        <S.StyledLink to="about">me</S.StyledLink>
        <S.StyledLink to="blog">blog</S.StyledLink>
        <S.StyledLink to="products">labs</S.StyledLink>
      </S.Nav>
    </Hero>
  );
};

export default Navbar;
