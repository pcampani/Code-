import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: grid;
  text-align: center;

  div {
    display: grid;
    grid-template-columns: 1fr 4fr;
    margin: 1rem 0;
    background: #333;

    img {
      width: 40px;
      height: 40px;
      background: #444;
    }

    p {
      color: #fff;
      text-align: left;
    }
  }
`;

function Sidebar() {
  return (
    <Card>
      <h2>my Tech Stack</h2>
      <div>
        <img src="" alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    </Card>
  );
}

export default Sidebar;
