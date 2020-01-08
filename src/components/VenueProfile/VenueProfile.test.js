import React from "react";
import { render } from "@testing-library/react";
import VenueProfile from "./VenueProfile";

test("renders learn react link", () => {
  const { getByText } = render(<VenueProfile />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
