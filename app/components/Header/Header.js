import React from "react";
import styled from "styled-components";

import Nav from "./Nav";
import Hero from "./Hero";
import Sidebar from "./Sidebar";

const MainHero = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 4rem 0;
`;

function Header() {
  return (
    <>
      <Nav />
      <MainHero>
        <Hero />
        <Sidebar />
      </MainHero>
    </>
  );
}

export default Header;
