import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr;

  nav,
  ul {
    display: grid;
    text-align: right;
  }

  ul {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
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
