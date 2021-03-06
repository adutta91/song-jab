import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 60px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -1px -1px 1px 1px ${({ theme }) => theme.variables.backgroundColor};
  width: 100%;
  background: white;

  > a {
    margin-left: 5px;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      made by{" "}
      <a
        href="https://github.com/adutta91"
        target="_blank"
        rel="noopener noreferrer"
      >
        arjun
      </a>
    </StyledFooter>
  );
}

export default Footer;
