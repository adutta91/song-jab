import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { map, forEach } from "lodash";
import { get } from "axios";
import resources from "../../app/resources";
import { dataReceived, setLoading } from "../../actions";

import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import PageContents from "../PageContents";

const StyledApp = styled.section``;

function App({ dataReceived, setLoading }) {
  useEffect(() => {
    setLoading(true);

    Promise.all(
      map(resources, async resource => {
        const response = await get(resource.apiUrl);
        if (response.status === 200 && response.data) {
          return { data: response.data, slug: resource.slug };
        }
      })
    ).then(results => {
      results.forEach(result => dataReceived(result.data, result.slug));
      setLoading(false);
    });
  }, [dataReceived, setLoading]);

  return (
    <StyledApp>
      <Header tabs={map(resources, ({ title, slug }) => ({ title, slug }))} />

      <PageContents />

      <Footer />
    </StyledApp>
  );
}

App.propTypes = {
  dataReceived: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
};

export default connect(
  state => ({}),
  dispatch => ({
    dataReceived: (data, slug) => dispatch(dataReceived(data, slug)),
    setLoading: val => dispatch(setLoading(val))
  })
)(App);
