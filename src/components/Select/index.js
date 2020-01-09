import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::-ms-expand {
    display: none;
  }

  cursor: pointer;
  font-size: 16px;
  background: white;
  padding: 10px;
  min-height: 40px;
  min-width: 60px;
`;

const SelectContainer = styled.section`
  position: relative;

  > i {
    position: absolute;
    right: 10px;
    top: 13px;
    color: rgba(0, 0, 0, 0.3);
    pointer-events: none;
  }
`;

function Select({ children, ...props }) {
  return (
    <SelectContainer>
      <StyledSelect {...props}>{children}</StyledSelect>
      <i className="fas fa-chevron-down" />
    </SelectContainer>
  );
}

export default Select;
