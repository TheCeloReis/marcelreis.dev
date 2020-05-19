import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./styled";

const Navbar = () => {
  const router = useRouter();

  return (
    <S.Container>
      <Link href="/[lang]/home" as={`/${router.query.lang}/home`}>
        <S.Logo />
      </Link>

      <S.NavItem>
        <Link href="/[lang]/blog" as={`/${router.query.lang}/blog`}>
          <a>blog</a>
        </Link>
      </S.NavItem>

      <S.NavItem>
        <Link href="/[lang]/labs" as={`/${router.query.lang}/labs`}>
          <a>labs</a>
        </Link>
      </S.NavItem>

      <S.NavItem>
        <Link href="/[lang]/about" as={`/${router.query.lang}/about`}>
          <a>about</a>
        </Link>
      </S.NavItem>
    </S.Container>
  );
};

export default Navbar;
