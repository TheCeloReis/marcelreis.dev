import styled from "styled-components";

import { Moon } from "styled-icons/boxicons-solid/Moon";
import { Sun } from "styled-icons/boxicons-solid/Sun";
import { Menu } from "styled-icons/material/Menu";

import { Ul } from "../../base/list";

export const Background: any = styled.nav`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 4rem;
  transition: background-color 0.3s;
  background-color: ${({ theme }) => theme.colors.main[5]};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr 64px;
  column-gap: 16px;
  height: 100%;
  margin: auto;
  max-width: 768px;

  button:last-of-type {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;

export const LogoContainer = styled.div`
  user-select: none;
  font-size: 2rem;
  line-height: 2rem;
  text-align: center;
  cursor: default;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.contrast[0]};

  span {
    padding: 1rem;
    position: absolute;
    right: 50%;
    transform: translateX(50%);
  }

  ${({ theme }) => theme.media.greaterThan.medium} {
    width: 60%;
    div {
      position: relative;
      border: solid 2px ${({ theme }) => theme.colors.contrast[0]};
      font-size: 1rem;
      height: 3rem;
      width: 3rem;
      cursor: default;
      pointer-events: none;
      margin: 0.5rem 1rem;
    }
    span {
      position: absolute;
      bottom: 0.25rem;
      right: 0.25rem;
      line-height: 1.125rem;
      font-size: 1.125rem;
      padding: 0;
      transform: translateX(0);
    }
  }
`;

export const List = styled(Ul)<{ active: boolean }>`
  margin-left: auto;
  width: 100%;
  height: 100vh;
  display: flex;

  ${({ theme }) => theme.media.lessThan.medium} {
    position: fixed;
    top: 4rem;
    right: 100%;
    flex-direction: column;
    transform: ${props =>
      props.active ? "translateX(100%)" : "translateX(0%)"};
    background-color: ${({ theme }) => theme.colors.gray[8]};
    transition: transform 0.3s ease;
  }
  ${({ theme }) => theme.media.greaterThan.medium} {
    position: static;
    height: 100%;
    width: 200px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Item = styled.li`
  height: 1.75rem;
  transition: transform ease 0.6s;
  text-align: center;
  display: block;
  font-weight: 700;
  font-size: 1.25rem;
  padding: 3rem;

  &::after {
    content: " ";
    height: 0.125rem;
    display: block;
    width: 100%;
    background-color: #fff;
    margin-top: 0.5rem;
  }

  > a {
    color: #fff !important;
  }

  ${({ theme }) => theme.media.greaterThan.medium} {
    margin: 0;
    padding: 0;

    > a {
      transition: color 0.3s;
      color: ${({ theme }) => theme.colors.contrast[0]} !important;
    }

    &::after {
      padding: 0;
      height: 0.25rem;
      transform: scaleX(0);
      transition: transform 0.3s ease;
      background-color: ${({ theme }) => theme.colors.contrast[0]};
    }
    :hover ::after {
      transform: scaleX(1.1);
      transition: transform 0.3s ease;
    }
  }
`;

export const MenuIcon = styled(Menu)`
  transition: color 0.3s;
  color: ${({ theme }) => theme.colors.contrast[3]};
  padding: 1rem;

  ${({ theme }) => theme.media.greaterThan.medium} {
    display: none;
  }
`;
export const StyledMoon = styled(Moon)`
  color: ${({ theme }) => theme.colors.gray[1]};
`;
export const StyledSun = styled(Sun)`
  color: ${({ theme }) => theme.colors.gray[9]};
`;
