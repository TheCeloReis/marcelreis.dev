import React from "react";
import Link from "next/link";

import * as S from "./styled";

type PropTypes = {
  lang: string;
  initialState: string;
};

const Navbar = ({ lang }: PropTypes) => {
  return (
    <S.Container>
      <Link href="/[lang]/home" as={`/${lang}/home`}>
        <S.Logo />
      </Link>

      <S.NavItem>
        <Link href="/[lang]/blog" as={`/${lang}/blog`}>
          <a>blog</a>
        </Link>
      </S.NavItem>

      <S.NavItem>
        <Link href="/[lang]/labs" as={`/${lang}/labs`}>
          <a>labs</a>
        </Link>
      </S.NavItem>

      <S.NavItem>
        <Link href="/[lang]/about" as={`/${lang}/about`}>
          <a>about</a>
        </Link>
      </S.NavItem>
    </S.Container>
  );
};

export default Navbar;
