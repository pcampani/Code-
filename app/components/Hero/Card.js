import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 150px;
    height: 80px;
    margin-right: 0.5rem;
  }

  p {
    text-align: left;
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
