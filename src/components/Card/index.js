import React from "react";
import styled from "styled-components";

const StyledCard = styled.section`
  transition: all 0.1s ease-out;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
  height: 300px;
  margin-bottom: 20px;
  background: white;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
  }

  text-decoration: none;
  color: ${({ theme }) => theme.variables.fontColorPrimary};
`;

function Card({ children, ...rest }) {
  return <StyledCard {...rest}>{children}</StyledCard>;
}

export default Card;
