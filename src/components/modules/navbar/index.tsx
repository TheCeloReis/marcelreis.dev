import React from "react";
import Link from "next/link";

import * as S from "./styled";

type PropTypes = {
  lang: string;
  initialState: string;
};

const Navbar = ({ lang }: PropTypes) => {
  return (
    <S.Background as="nav">
      <S.Container>
        <S.Logo>
          <Link href="/[lang]/home" as={`/${lang}/home`}>
            <a>
              <S.Image src="https://placekitten.com/48/48" />
            </a>
          </Link>
        </S.Logo>

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
    </S.Background>
  );
};

export default Navbar;
