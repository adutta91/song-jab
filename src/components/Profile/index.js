import React from "react";
import { find } from "lodash";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import resources from "../../app/resources";

const StyledProfile = styled.ul`
  profile-style: none;
  margin: 0;
  padding: 0;
`;

function Profile({ data, view, id }) {
  const item = find(data[view], datum => datum.id === id);

  const ProfileComponent = resources[view].profileComponent;

  return (
    <StyledProfile>
      <ProfileComponent {...item} />
    </StyledProfile>
  );
}

Profile.propTypes = {
  view: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default withRouter(
  connect((state, props) => ({
    view: props.match.params.view,
    id: props.match.params.id,
    data: state.dataReducer
  }))(Profile)
);
