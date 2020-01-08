import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import Spinner from "../Spinner";
import resources from "../../app/resources";

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

function List({ loading, selected, data, dataReceived }) {
  if (loading) {
    return (
      <StyledList>
        <Spinner />
      </StyledList>
    );
  }

  if (!selected || !resources[selected]) {
    return (
      <StyledList>
        <h1>Welcome!</h1>
        <p>Select a category to get started!</p>
      </StyledList>
    );
  }

  const CardComponent = resources[selected].cardComponent;

  return (
    <StyledList>
      {data[selected].map(datum => (
        <CardComponent {...datum} key={datum._id} />
      ))}
    </StyledList>
  );
}

List.propTypes = {
  selected: PropTypes.string,
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default connect((state, props) => ({
  selected: props.match.params.view,
  data: state.dataReducer,
  loading: state.viewReducer.loading
}))(List);
