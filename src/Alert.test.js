import React from "react";
import { render } from "@testing-library/react";
import Alert from "./Alert";

it("renders without crashing", function() {
  render(<Alert />);
});

it("matches snapshot for danger", function() {
  let messages = ["Error1", "Error2"];
  const { asFragment } = render(<Alert type="danger" messages={messages} />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot for success", function() {
  let messages = ["Success!"];
  const { asFragment } = render(<Alert type="success" messages={messages} />);
  expect(asFragment()).toMatchSnapshot();
});
