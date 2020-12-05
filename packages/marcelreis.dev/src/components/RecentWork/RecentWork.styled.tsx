import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  margin-bottom: var(--spacing-6);
`;

export const Header = styled.header`
  margin-bottom: var(--spacing-5);
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--gray-10);
  margin-bottom: var(--spacing-2);
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--gray-8);
`;

export const Link = styled.a`
  color: var(--blue);
  font-weight: bold;

  &:hover {
    color: var(--blue-l);
    text-decoration: underline;
  }
`;

export const ProjectGrid = styled.div`
  ${media.greaterThan("medium")`
    grid-template-columns: repeat(3, 1fr);
  `}
  display: grid;
  gap: var(--spacing-5);
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  background: #0f4c81f0;
  transition: opacity 300ms;
`;

export const Description = styled.p`
  ${media.between("medium", "huge")`
    font-size: 1.1rem;
  `}
  font-size: 1.25rem;

  color: var(--white);
  text-align: center;
  padding: 0 var(--spacing-3);
  margin: auto;
`;

export const FigureCaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: var(--spacing-4) var(--spacing-3);

  opacity: 0;
  transition: opacity 300ms ease;
`;

export const Button = styled.a`
  display: block;
  cursor: pointer;

  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 48px;
  width: 75%;
  height: 48px;
  margin: 0 auto;

  color: var(--white);
  background-color: #fff0;
  border: solid 2px var(--white);
  border-radius: 24px;

  transition: background-color 200ms, color 200ms;
  &:hover {
    background-color: #ffff;
    color: var(--blue-d);
  }
`;

export const Figure = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 75%;
  overflow: hidden;
  border-radius: 16px;
  border: 2px solid var(--gray-3);

  &:hover ${FigureCaption}, &:hover ${Overlay} {
    opacity: 1;
  }
`;
