import React from "react";
import styled from "styled-components";

import MainHero from "./MainHero";
import Sidebar from "./Sidebar";
import icons from "../../state/icons";

const Container = styled.div`
  height: 80vh;
  position: relative;
  margin: 4rem 0;
  text-align: center;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

function Hero() {
  return (
    <Container>
      <MainHero />
      <Sidebar icons={icons()} />
    </Container>
  );
}

export default Hero;
