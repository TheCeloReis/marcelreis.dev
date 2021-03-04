import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Github } from "@styled-icons/fa-brands/Github";
import { Linkedin } from "@styled-icons/fa-brands/Linkedin";
import { Twitter } from "@styled-icons/fa-brands/Twitter";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { Portfolio } from "@styled-icons/zondicons/Portfolio";

const LinkList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 600px;
  z-index: 10;
  width: 100%;
  padding: 0 16px;
  margin: 0;
  list-style: none;
`;

const LinkListItem = styled.li`
  height: 3rem;
  width: 100%;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  color: #fff;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 3rem;
    font-weight: bold;
    text-align: center;
  }
`;

const LinkListAnchor = styled.a`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  color: inherit;
  text-decoration: none;

  svg {
    position: absolute;
    padding: 12px;
    background-size: cover;
  }
`;

const LinksPage = () => {
  return (
    <LinkList>
      <LinkListItem>
        <LinkListAnchor
          href="https://www.linkedin.com/in/marcelreis/"
          target="_blank"
        >
          <Linkedin size="48px" />
          <p>LinkedIn</p>
        </LinkListAnchor>
      </LinkListItem>
      <LinkListItem>
        <LinkListAnchor href="https://github.com/MarcelReis/" target="_blank">
          <Github size="48px" />
          <p>GitHub</p>
        </LinkListAnchor>
      </LinkListItem>
      <LinkListItem>
        <LinkListAnchor
          href="https://www.instagram.com/_marcelreis/"
          target="_blank"
        >
          <Instagram size="48px" />
          <p>Instagram</p>
        </LinkListAnchor>
      </LinkListItem>
      <LinkListItem>
        <LinkListAnchor href="https://twitter.com/_marcelreis" target="_blank">
          <Twitter size="48px" />
          <p>Twitter</p>
        </LinkListAnchor>
      </LinkListItem>
      <LinkListItem>
        <Link href="/">
          <LinkListAnchor>
            <Portfolio size="48px" />
            <p>Portfolio</p>
          </LinkListAnchor>
        </Link>
      </LinkListItem>
    </LinkList>
  );
};

export default LinksPage;
