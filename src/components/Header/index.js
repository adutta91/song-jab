import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { withRouter } from "react-router";

const StyledHeader = styled.header``;

function Header(props) {
  console.log("comp props *****---->>>", props);
  return <StyledHeader>Header</StyledHeader>;
}

export default withRouter(
  connect(
    (state, props) => {
      console.log("state *****---->>>", state);
      console.log("props *****---->>>", props);
      return {};
    },
    dispatch => ({})
  )(Header)
);
