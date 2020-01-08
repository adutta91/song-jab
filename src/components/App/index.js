import React from "react";
import { map } from "lodash";
import resources from "../../app/resources";

import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import PageContents from "../PageContents";

const StyledApp = styled.section``;

function App() {
  return (
    <StyledApp>
      <Header tabs={map(resources, ({ title, slug }) => ({ title, slug }))} />

      <PageContents />

      <Footer />
    </StyledApp>
  );
}

export default App;
