import React from "react";
import styled from "styled-components";

const StyledCard = styled.section``;

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

export default Card;
