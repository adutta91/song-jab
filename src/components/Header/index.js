import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 60px;

  > a {
    transition: all 0.2s ease-out;
    text-decoration: none;
    color: ${({ theme }) => theme.variables.fontColorPrimary};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    padding: 0 20px;

    &:hover {
      background: rgba(0, 0, 0, 0.15);
    }

    &.active {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

function Header({ tabs, selected }) {
  return (
    <StyledHeader>
      {tabs.map(tab => (
        <Link
          key={tab.slug}
          to={`/${tab.slug}`}
          className={classnames([{ active: selected === tab.slug }])}
        >
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
      console.log("props *****---->>>", props);
      return {
        tabs: props.tabs,
        selected: props.match.params.view
      };
    },
    dispatch => ({})
  )(Header)
);
