import React from "react";
import { render } from "@testing-library/react";
import ArtistCard from "./ArtistCard";

test("renders learn react link", () => {
  const { getByText } = render(<ArtistCard />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
