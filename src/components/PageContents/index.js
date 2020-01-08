import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import styled from "styled-components";
import List from "../List";
import { Switch, Route } from "react-router-dom";

const StyledPageContents = styled.section``;

function PageContents(props) {
  return (
    <StyledPageContents>
      <Switch>
        <Route path="/:view/:id" component={() => <div>Profile</div>} />
        <Route path="/:view?" component={List} />
      </Switch>
    </StyledPageContents>
  );
}

export default withRouter(
  connect((state, props) => ({
    view: props.match.params.view
  }))(PageContents)
);
