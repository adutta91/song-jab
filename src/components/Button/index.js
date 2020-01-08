import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  text-decoration: none;
  background: blue;
  color: white;
  border-radius: 5px;
  padding: 10px;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  box-shadow: none;
  border: none;
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
