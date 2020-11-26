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

  const scopedRenderComponent = () =>
    render(
      <Text size={24} weight={700} i s>
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

  test("has access to exclusive shortcut props", () => {
    scopedRenderComponent();
    expect(screen.getByText("Test text")).toHaveStyle("font-size: 24px;");
    expect(screen.getByText("Test text")).toHaveStyle("font-weight: 700;");
    expect(screen.getByText("Test text")).toHaveStyle("font-style: italic;");
    expect(screen.getByText("Test text")).toHaveStyle(
      "text-decoration: line-through;",
    );
  });
});
