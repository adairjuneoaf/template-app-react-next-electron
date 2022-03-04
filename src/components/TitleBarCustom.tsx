import React from "react";

import { VscChromeClose } from "react-icons/vsc";
import { VscChromeMaximize } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";

import useEventsElectron from "../hooks/useEventsElectron";

import { Container, Content } from "../styles/components/TitleBarCustom";

const TitleBatCustom: React.FC = () => {
  const event = useEventsElectron;

  return (
    <Container>
      <Content>
        <button type="button" onClick={event.minimizeApp} className="minimize">
          <VscChromeMinimize />
        </button>
        <button type="button" onClick={event.maximizeApp} className="maximize">
          <VscChromeMaximize />
        </button>
        <button type="button" onClick={event.closeApp} className="close">
          <VscChromeClose />
        </button>
      </Content>
    </Container>
  );
};

export default TitleBatCustom;
