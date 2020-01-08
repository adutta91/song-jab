import React from "react";
import { render } from "@testing-library/react";
import ConcertCard from "./ConcertCard";

test("renders learn react link", () => {
  const { getByText } = render(<ConcertCard />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
