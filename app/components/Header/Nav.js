import React from "react";
import styled from "styled-components";

const Header = styled.header`
  font-family: Helvetica, sans-serif;
`;

function Nav() {
  return (
    <>
      <Header>
        <a href="/">Philip Campani</a>
        <nav>
          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </nav>
      </Header>
    </>
  );
}

export default Nav;
