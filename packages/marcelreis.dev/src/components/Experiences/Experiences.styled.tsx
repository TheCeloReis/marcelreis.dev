import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Section = styled.div`
  margin: 2rem 0 5rem 0;
`;

export const SectionHeading = styled.div`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Container = styled.div`
  display: flex;
  max-width: 800px;
  margin: auto;
  border: solid var(--gray-3) 2px;
  border-radius: 16px;
  overflow: hidden;

  ${media.lessThan("medium")`
    flex-direction: column;
  }`}
`;

export const Tabs = styled.ul`
  ${media.lessThan("medium")`
    display: flex;
    border-bottom: solid var(--gray-3) 2px;
    overflow-x: scroll;
  `}
  ${media.greaterThan("medium")`
    border-right: solid var(--gray-3) 2px;
    width: 25%;
  `}
`;

export const Tab = styled.li<{ isActive: boolean }>`
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: color 200ms ease;

  ${media.lessThan("medium")`
    white-space: nowrap;
    display: flex;
    border-bottom: solid var(--gray-3) 2px;
  `}

  &:hover {
    background: var(--gray-3);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: var(--blue);
      color: var(--white);
      font-weight: 700;

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
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
`;

export const JobHeader = styled.header`
  margin-bottom: 0.75rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Company = styled.p`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: var(--blue-d);
`;

export const Time = styled.p`
  color: var(--gray-8);
  font-weight: 500;
`;
