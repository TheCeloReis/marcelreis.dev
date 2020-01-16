import styled from "styled-components";
import { Button } from "../button";

export const StyledButton = styled(Button)<{ active: boolean }>`
  width: 48px;
  background-color: ${({ theme }) => theme.colors.main[3]};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow[1]};

  > div {
    width: 32px;
    overflow: hidden;

    > div {
      width: 64px;
      transform: translateX(${({ active }) => (active ? "0px" : "-32px")});
      transition: 0.3s ease;
    }
  }
`;
