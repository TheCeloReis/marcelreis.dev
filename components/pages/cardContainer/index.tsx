import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  position: relative;
  left: -1rem;
  width: calc(100% + 2rem);
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4px;
  row-gap: 4px;

  ${({ theme }) => theme.media.greaterThan.medium} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 8px;
    row-gap: 8px;
  }
`;
