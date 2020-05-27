import styled from "styled-components";

export const Grid = styled.div<{ sm: number; md?: number; lg?: number }>`
  display: grid;
  grid-gap: var(--spacing-3);
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: repeat(${({ sm }) => sm}, 1fr);
  }
  @media (min-width: 600px) and (max-width: 1200px) {
    grid-template-columns: repeat(${({ sm, md }) => md || sm}, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(${({ sm, md, lg }) => lg || md || sm}, 1fr);
  }
`;

export const PageContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: minmax(auto, 800px);
  padding-top: 72px;
  padding-bottom: 50px;
`;
