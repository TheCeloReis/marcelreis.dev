import React from "react";
import Link from "next/link";

import * as S from "./styled";

const Navbar = () => {
  return (
    <S.Container>
      <Link href="/[lang]/home/" as="/en-us/home/">
        <S.Logo />
      </Link>

      <S.NavItem>
        <Link href="/[lang]/blog/" as="/en-us/blog/">
          <a>blog</a>
        </Link>
      </S.NavItem>

      <S.NavItem>
        <Link href="/[lang]/labs/" as="/en-us/labs/">
          <a>labs</a>
        </Link>
      </S.NavItem>

      <S.NavItem>
        <Link href="/[lang]/about/" as="/en-us/about/">
          <a>about</a>
        </Link>
      </S.NavItem>
    </S.Container>
  );
};

export default Navbar;
