import React from "react";
import { render, screen } from "@testing-library/react";

import Text from "./Text";

describe("Text", () => {
  const renderComponent = () =>
    render(
      <Text ml={4} color="green">
        Test text
      </Text>,
    );

  test("renders with correct text", () => {
    renderComponent();
    expect(screen.getByText("Test text")).toBeInTheDocument();
  });

  test("has access to base props", () => {
    renderComponent();
    expect(screen.getByText("Test text")).toHaveStyle("margin-left: 4px;");
    expect(screen.getByText("Test text")).toHaveStyle("color: green;");
  });
});
