import styled from "styled-components";

export const Background = styled.div<{ height?: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  height: calc(${({ height }) => height || 100}vh - 64px);
  background-color: #171717;
`;

export const Header = styled.div`
  ${({ theme }) => theme.media.greaterThan.medium} {
    max-width: 768px;
  }
  text-align: center;
`;
