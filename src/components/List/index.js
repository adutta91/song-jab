import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import Spinner from "../Spinner";
import resources from "../../app/resources";
import Pagination from "../Pagination";

const StyledList = styled.section`
  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
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
      <Pagination options={data[selected]} controlsPos="bottom" pageSize={20}>
        {({ displayItems }) => (
          <ul key="items-list">
            {displayItems.map(datum => (
              <Link
                key={datum.id || datum.slug}
                to={`/${selected}/${datum.id || datum.slug}`}
              >
                <CardComponent {...datum} />
              </Link>
            ))}
          </ul>
        )}
      </Pagination>
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
