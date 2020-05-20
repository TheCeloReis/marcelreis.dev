import styled from "styled-components";

export const Grid = styled.div<{}>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: var(--spacing-3);
  padding: var(--spacing-3);
  margin: auto;
  width: 100%;
  max-width: var(--max-width);
`;

export const PageContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: minmax(auto, 800px);
  padding-top: 72px;
  padding-bottom: 50px;
`;
