import React from "react";
import styled from "styled-components";

import MainHero from "./MainHero";
import Sidebar from "./Sidebar";
import icons from "../../state/icons";

const Container = styled.div`
  position: relative;
  margin: 4rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
