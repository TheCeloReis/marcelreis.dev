import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.media.greaterThan.medium} {
    justify-content: flex-start;
  }
`;

export const Tag = styled.div`
  display: inline-block;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.base[2]};
  padding: 8px;
  border-radius: 32px;

  :not(:last-of-type) {
    margin-right: 8px;
  }
`;
