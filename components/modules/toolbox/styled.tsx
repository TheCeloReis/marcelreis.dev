import styled from "styled-components";

import { Toolbox } from "styled-icons/fa-solid/Toolbox";
import { Jquery } from "styled-icons/boxicons-logos/Jquery";
import { Css3 } from "styled-icons/boxicons-logos/Css3";
import { ReactLogo } from "styled-icons/boxicons-logos/ReactLogo";

import { outOfBox } from "../../../theme/keyframes";

import { Button } from "../../base/buttons/button";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
`;

export const SkillsRow = styled.ul<{ active: boolean }>`
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 100%;
  height: 0;
  padding-bottom: ${({ active }) => (active ? "calc(33.33% + 6rem)" : 0)};
  transition: 2s ease;
`;

export const Skill = styled.li<{ order: number; open: boolean }>`
  position: absolute;
  top: 160px;
  left: 33.33%;
  width: 33.33%;
  height: auto;
  text-align: center;
  z-index: ${props => 3 - props.order};

  transform: ${({ order }) => {
    return order === 0
      ? "translate(-100%, 0)"
      : order === 1
      ? "translate(0%, 0)"
      : order === 2
      ? "translate(100%, 0)"
      : 0;
  }};

  animation-name: ${props => outOfBox(props.order)};
  animation-duration: 1.75s;
  animation-timing-function: linear;
  animation-play-state: ${props => (props.open ? "running" : "paused")};

  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const IconContainer = styled.div<{ relativeWidth: number }>`
  position: relative;
  height: 0;
  width: ${props => props.relativeWidth}%;
  padding-bottom: ${props => props.relativeWidth}%;
  margin: 0 auto;

  div {
    position: absolute;
  }
`;

export const ToolboxButton = styled(Button)`
  margin: 0 auto 3.5rem auto;
  padding: 0;
  height: 128px;
  background: ${({ theme }) => theme.colors.main[5]};
  border-radius: 64px;
  z-index: 10;
  font-size: 0;

  transform: translate(-4px, -4px);
  box-shadow: 4px 8px 6px ${({ theme }) => theme.colors.gray[8]};
  transition: 0.3s ease;

  &:hover {
    transform: translate(0px, 0px);
    box-shadow: none;
    background: ${({ theme }) => theme.colors.main[7]};

    svg {
      color: ${({ theme }) => theme.colors.contrast[5]};
    }
  }
`;

export const ToolboxIcon = styled(Toolbox)`
  color: ${({ theme }) => theme.colors.contrast[3]};
  padding: 2rem;
`;
export const ReactIcon = styled(ReactLogo)`
  color: #61dafb;
`;
export const CssIcon = styled(Css3)`
  color: #379ad6;
`;
export const JQueryIcon = styled(Jquery)`
  color: #21609b;
`;
