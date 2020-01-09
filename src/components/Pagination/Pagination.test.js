import React from "react";
import { render } from "@testing-library/react";
import Pagination from "./Pagination";

test("renders learn react link", () => {
  const { getByText } = render(<Pagination />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
