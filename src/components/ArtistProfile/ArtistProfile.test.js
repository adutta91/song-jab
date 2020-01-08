import React from "react";
import { render } from "@testing-library/react";
import ArtistProfile from "./ArtistProfile";

test("renders learn react link", () => {
  const { getByText } = render(<ArtistProfile />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
