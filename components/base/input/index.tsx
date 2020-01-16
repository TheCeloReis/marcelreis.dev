import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.base[5]};

  border-radius: 4px;
`;
