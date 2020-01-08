import React from "react";
import { ThemeProvider } from "styled-components";
import variables from "./styles/variables";

export default props => (
  <ThemeProvider theme={{ variables }}>{props.children}</ThemeProvider>
);
