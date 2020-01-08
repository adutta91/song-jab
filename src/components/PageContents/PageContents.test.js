import React from "react";
import { render } from "@testing-library/react";
import PageContents from "./PageContents";

test("renders learn react link", () => {
  const { getByText } = render(<PageContents />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
