import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 80px;
    height: 80px;
  }
`;

function Card({ name, icon, description }) {
  console.log(name);
  return (
    <CardWrapper>
      {icon}
      <p>{description}</p>
    </CardWrapper>
  );
}

export default Card;
