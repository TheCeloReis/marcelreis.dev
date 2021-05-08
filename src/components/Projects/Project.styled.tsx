import styled from "styled-components";
import media from "styled-media-query";

export const Section = styled.div`
  position: relative;
  padding: var(--spacing-2);
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: auto;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: var(--heading-2);

  ${media.greaterThan("large")`
      margin-bottom: var(--spacing-5);
  `}
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${media.greaterThan("large")`
      grid-template-columns: 3fr 4fr 3fr;
  `}
`;

export const ProjectTitle = styled.h3`
  font-size: var(--heading-3);
  color: var(--gray-10);
  margin-bottom: var(--spacing-1);
`;

export const ProjectDescription = styled.h3`
  font-size: var(--base-text);
  line-height: 1.25;
  color: var(--gray-10);
`;

export const ImgContainer = styled.div<{ bottom: boolean }>`
  margin: auto auto 0 auto;
  flex-grow: 1;
  max-width: 80%;
  position: relative;
  width: 100%;
  padding-top: 80%;

  ${media.greaterThan("medium")`
    padding-top: 50%;
    max-width: 50%;
  `}
  ${media.greaterThan("large")`
    max-width: 80%;
    padding-top: 80%;
  `}
  
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export const List = styled.ul`
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  padding: var(--spacing-3);
  border-radius: var(--spacing-2);
  border: 2px solid var(--gray-2);
  box-shadow: var(--elevation-1);
`;

export const Button = styled.a`
  cursor: pointer;
  height: 32px;
  line-height: 28px;
  border-radius: 16px;
  background: var(--white);
  padding: 0 var(--spacing-2);
  border: 2px solid var(--primary);
  color: var(--primary);
  font-weight: bold;
  transition: background-color 200ms ease;

  &:hover {
    background: var(--primary);
    color: var(--white);
  }
`;

export const IconLink = styled.a`
  color: var(--gray-10);
  transition: color ease 200ms;

  :hover {
    color: var(--primary-light);
  }
`;

export const ProjectFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-2);
`;
