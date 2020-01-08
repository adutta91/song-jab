import React from "react";
import { render } from "@testing-library/react";
import VenueCard from "./VenueCard";

test("renders learn react link", () => {
  const { getByText } = render(<VenueCard />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
