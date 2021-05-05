import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 50%;
  z-index: 20;
  width: 100%;
  max-width: 1200px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  transform: translateX(50%);
`;

export const NavList = styled.ol<{ isOpen: boolean }>`
  display: flex;
  ${media.lessThan("medium")`
    position: absolute;
    top: 0;
    left: -100%;
    flex-direction: column;
    background: var(--white);
    width: 100%;
    height: 100vh;
    transition: transform 200ms ease;
    padding: 5rem 0 2rem;
  `}

  ${({ isOpen }) =>
    isOpen &&
    media.lessThan("medium")`
    transform: translateX(100%);
  `}
  ${media.greaterThan("medium")`
    background-color: var(--white);
    border: 2px solid var(--gray-3);
    border-radius: 0 0 16px 16px;
    align-self: flex-start;
  `}
`;

export const NavItem = styled.li`
  font-weight: 700;
  color: var(--gray-8);

  a {
    display: block;
    padding: 1rem 2rem;
  }
`;

export const MenuButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0.75rem;
  z-index: 10;
  background: var(--white);
  border-style: solid;
  border-color: var(--gray-4);
  border-width: 0 2px 2px 0;
  border-radius: 0 0 32px 0;
  color: var(--blue);

  svg {
    position: relative;
    left: -2px;
    top: -2px;
  }

  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const Logo = styled.img`
  z-index: 10;
  width: 48px;
  height: 48px;

  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
  transition: filter 500ms ease;

  &:hover {
    filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.5));
  }

  ${media.lessThan("medium")`
    margin: auto;
  `}
  ${media.greaterThan("medium")`
  `}
`;
