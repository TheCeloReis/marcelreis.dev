import React, { useState } from "react";
import styled from "styled-components";

import { Toolbox } from "styled-icons/fa-solid/Toolbox";
import { Jquery } from "styled-icons/boxicons-logos/Jquery";
import { Css3 } from "styled-icons/boxicons-logos/Css3";
import { ReactLogo } from "styled-icons/boxicons-logos/ReactLogo";

import { outOfBox } from "../../theme/keyframes";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
`;

const SkillsRow = styled.ul`
  width: 100%;
  height: 100%;

  height: 0;
  padding-bottom: calc(33.33% + 6rem);
`;

const Skill: any = styled.li`
  position: absolute;
  top: 160px;
  left: ${(props: any) => props.order * 33}%;
  width: 33.33%;
  height: auto;
  text-align: center;
  animation-name: ${(props: any) => outOfBox(props.order)};
  animation-duration: 2s;
  animation-timing-function: ease-in;
  animation-play-state: ${(props: any) => (props.open ? "running" : "paused")};

  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  li {
    font-size: 1rem;
  }
`;

const IconContainer: any = styled.div`
  position: relative;
  height: 0;
  width: ${(props: any) => props.relativeWidth}%;
  padding-bottom: ${(props: any) => props.relativeWidth}%;
  margin: 0 auto;

  div {
    position: absolute;
  }
`;

const ToolboxContainer = styled.div`
  margin: 0 auto 3.5rem auto;
  height: 128px;
  z-index: 1;
`;

const ToolboxIcon = styled(Toolbox)`
  color: ${(props: any) => props.theme.color.primary};
`;
const ReactIcon = styled(ReactLogo)`
  color: #61dafb;
`;
const CssIcon = styled(Css3)`
  color: #379ad6;
`;
const JQueryIcon = styled(Jquery)`
  color: #21609b;
`;

export default function index() {
  const [openReact, setOpenReact] = useState(false);
  const [openCss, setOpenCss] = useState(false);
  const [openJquery, setOpenJquery] = useState(false);

  const playAnimation = () => {
    console.log("vai tocar");
    setTimeout(() => {
      setOpenReact(true);
    }, 0);

    setTimeout(() => {
      setOpenCss(true);
    }, 750);

    setTimeout(() => {
      setOpenJquery(true);
    }, 1500);
  };

  return (
    <Container>
      <ToolboxContainer>
        <ToolboxIcon size="128" onClick={playAnimation} />
      </ToolboxContainer>

      <SkillsRow>
        <Skill order={0} open={openReact}>
          <IconContainer relativeWidth={100}>
            <div>
              <ReactIcon size={"100%"} />
            </div>
          </IconContainer>
          <div>
            <h4>React</h4>
            <ul>
              <li>Hooks</li>
              <li>Redux</li>
              <li>Router</li>
            </ul>
          </div>
        </Skill>

        <Skill order={1} open={openCss}>
          <IconContainer relativeWidth={100}>
            <div>
              <CssIcon size={"100%"} />
            </div>
          </IconContainer>
          <div></div>
          <h4>CSS</h4>
          <ul>
            <li>SASS</li>
            <li>Flexbox</li>
            <li>Grid</li>
          </ul>
        </Skill>

        <Skill order={2} open={openJquery}>
          <IconContainer relativeWidth={100}>
            <div>
              <JQueryIcon size={"100%"} />
            </div>
          </IconContainer>
          <div>
            <h4>jQuery</h4>
            <ul>
              <li>BackBone</li>
              <li>Underscore</li>
              <li>Resiliência</li>
            </ul>
          </div>
        </Skill>
      </SkillsRow>
    </Container>
  );
}
