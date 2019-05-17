import React from "react";
import styled from "styled-components";

import bgphoto from "../../assets/img/bg.jpg";

const Container = styled.div`
  background: linear-gradient(
      to right,
      rgba(52, 172, 217, 0.8),
      rgba(70, 239, 239, 0.4)
    ),
    url(${bgphoto}) no-repeat;
  background-size: cover;
  margin-right: 20px;
  color: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6);
  span {
  }
`;

function MainHero() {
  return (
    <Container>
      <h1>
        WEB <span>DEV</span>ELOPMENT
      </h1>
      <button>Click Here</button>
    </Container>
  );
}

export default MainHero;
