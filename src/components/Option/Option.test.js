import React from "react";
import { render } from "@testing-library/react";
import Option from "./Option";

test("renders learn react link", () => {
  const { getByText } = render(<Option />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
