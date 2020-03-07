import styled from "styled-components";
import { Button } from "../button";

export const StyledButton = styled(Button)<{ active: boolean }>`
  width: 48px;
  background-color: ${({ theme }) =>
    theme.darkTheme ? theme.colors.main[4] : theme.colors.main[3]};
  border-radius: 4px;

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
