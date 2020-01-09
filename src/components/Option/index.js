import React from "react";
import styled from "styled-components";

const StyledOption = styled.option``;

function Option({ children, ...props }) {
  return <StyledOption {...props}>{children}</StyledOption>;
}

export default Option;
