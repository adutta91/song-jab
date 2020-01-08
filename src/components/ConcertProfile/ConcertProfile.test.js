import React from "react";
import { render } from "@testing-library/react";
import ConcertProfile from "./ConcertProfile";

test("renders learn react link", () => {
  const { getByText } = render(<ConcertProfile />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
