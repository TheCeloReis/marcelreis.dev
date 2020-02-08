import styled from "styled-components";

export const Background = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;

  :only-of-type {
    ${({ theme }) => theme.media.greaterThan.medium} {
      min-height: calc(100vh - 7rem);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 768px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base[0]};

  ${({ theme }) => theme.media.greaterThan.medium} {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    margin: 2rem 1rem 2rem 1rem;
  }
`;
