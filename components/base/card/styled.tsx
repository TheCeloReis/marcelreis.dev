import styled from "styled-components";

import { Button } from "../buttons/button";

export const Container = styled.div`
  position: relative;
  padding-top: 100%;
`;
export const StyledButton = styled(Button)`
  position: absolute;
  width: 50%;
  bottom: -48px;
  left: 25%;

  border-radius: 8px 8px 0 0;
  background-color: ${({ theme }) => theme.colors.base[0]};

  a {
    color: inherit;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  background-color: ${({ theme }) => theme.colors.main[3]}dd;
  user-select: none;

  span {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.colors.contrast[1]};
    font-weight: bold;
    font-size: 1.25rem;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;

  :hover {
    ${Overlay} {
      opacity: 1;
    }
    ${StyledButton} {
      transform: translateY(-100%);
      transition: 0.3s ease;
      transition-delay: 0.3s;
    }
  }
`;
export const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.gray[5]};
`;
