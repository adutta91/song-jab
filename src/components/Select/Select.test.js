import React from "react";
import { render } from "@testing-library/react";
import Select from "./Select";

test("renders learn react link", () => {
  const { getByText } = render(<Select />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
