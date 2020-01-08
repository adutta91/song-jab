import React from "react";

import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

const StyledApp = styled.section``;

function App() {
  return (
    <StyledApp>
      <Header />

      {/* <PageContents /> */}

      <Footer />
    </StyledApp>
  );
}

export default App;
