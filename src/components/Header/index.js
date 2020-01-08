import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const StyledHeader = styled.header``;

function Header({ tabs, selected }) {
  return (
    <StyledHeader>
      {tabs.map(tab => (
        <Link key={tab.slug} to={`/${tab.slug}`}>
          {tab.title}
        </Link>
      ))}
    </StyledHeader>
  );
}
Header.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired
    })
  ),
  selected: PropTypes.string
};

export default withRouter(
  connect(
    (state, props) => {
      return {
        tabs: props.tabs,
        selected: props.match.params.view
      };
    },
    dispatch => ({})
  )(Header)
);
