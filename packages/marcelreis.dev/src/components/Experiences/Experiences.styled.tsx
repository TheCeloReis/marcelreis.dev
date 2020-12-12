import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  max-width: 800px;
  margin: auto;
  border: solid var(--gray-4) 2px;
  border-radius: 16px;
  overflow: hidden;

  ${media.lessThan("medium")`
    flex-direction: column;
  }`}
`;

export const Tabs = styled.ul`
  ${media.lessThan("medium")`
    display: flex;
    border-bottom: solid var(--gray-4) 2px;
    overflow-x: scroll;
  `}
  ${media.greaterThan("medium")`
    border-right: solid var(--gray-4) 2px;
    width: 25%;
  `}
`;

export const Tab = styled.li<{ isActive: boolean }>`
  padding: 1rem 2rem;
  cursor: pointer;
  transition: color 200ms ease;

  ${media.lessThan("medium")`
    white-space: nowrap;
    display: flex;
    border-bottom: solid var(--gray-4) 2px;
  `}

  &:hover {
    background: var(--gray-3);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: var(--blue);
      color: var(--white);
      font-weight: 600;

      &:hover {
        background: var(--blue-d);
      }
    `}
`;

export const ContentContainer = styled.div`
  overflow: hidden;

  ${media.greaterThan("medium")`
    width: 75%;
  `}

  div {
    display: flex;
    width: 200%;
    transition: transform 200ms ease;
  }
`;

export const Content = styled.div`
  width: 100%;
`;
