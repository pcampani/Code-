import React from "react";
import styled from "styled-components";

const Header = styled.header`
  font-family: Helvetica, sans-serif;
  display: grid;

  nav,
  ul {
    display: grid;
  }
`;

function Nav() {
  return (
    <>
      <Header>
        <a href="/">Philip Campani</a>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </Header>
    </>
  );
}

export default Nav;
