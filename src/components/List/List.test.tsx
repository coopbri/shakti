import React from "react";
import { render, screen } from "@testing-library/react";

import {
  UnorderedList,
  OrderedList,
  DescriptionList,
  DescriptionTerm,
  DescriptionDetail,
  ListItem,
} from "./List";

describe("List", () => {
  const ulRenderComponent = () =>
    render(
      <UnorderedList ml={4} color="green">
        <ListItem>Unordered list entry 1</ListItem>
        <ListItem color="blue">Unordered list entry 2</ListItem>
        <ListItem>Unordered list entry 3</ListItem>
      </UnorderedList>,
    );

  const olRenderComponent = () =>
    render(
      <OrderedList ml={4} color="green">
        <ListItem>Ordered list entry 1</ListItem>
        <ListItem color="blue">Ordered list entry 2</ListItem>
        <ListItem>Ordered list entry 3</ListItem>
      </OrderedList>,
    );

  const dlRenderComponent = () =>
    render(
      <DescriptionList ml={4} color="green">
        <DescriptionTerm color="orange">Description term 1</DescriptionTerm>
        <DescriptionDetail color="purple">
          Description detail 1
        </DescriptionDetail>
        <DescriptionTerm>Description term 2</DescriptionTerm>
        <DescriptionDetail>Description detail 2</DescriptionDetail>
      </DescriptionList>,
    );

  test("renders unordered list", () => {
    const { container } = ulRenderComponent();
    expect(container).toBeInTheDocument();
  });

  test("renders ordered list", () => {
    const { container } = olRenderComponent();
    expect(container).toBeInTheDocument();
  });

  test("renders description list", () => {
    const { container } = olRenderComponent();
    expect(container).toBeInTheDocument();
  });

  test("can access base props in unordered list", () => {
    const { container } = ulRenderComponent();
    expect(container.firstChild).toHaveStyle("margin-left: 4px;");
    expect(container.firstChild).toHaveStyle("color: green;");
    expect(screen.getByText("Unordered list entry 2")).toHaveStyle(
      "color: blue;",
    );
  });

  test("can access base props in ordered list", () => {
    const { container } = olRenderComponent();
    expect(container.firstChild).toHaveStyle("margin-left: 4px;");
    expect(container.firstChild).toHaveStyle("color: green;");
    expect(screen.getByText("Ordered list entry 2")).toHaveStyle(
      "color: blue;",
    );
  });

  test("can access base props in description list", () => {
    const { container } = dlRenderComponent();
    expect(container.firstChild).toHaveStyle("margin-left: 4px;");
    expect(container.firstChild).toHaveStyle("color: green;");
    expect(screen.getByText("Description term 1")).toHaveStyle(
      "color: orange;",
    );
    expect(screen.getByText("Description detail 1")).toHaveStyle(
      "color: purple;",
    );
  });
});
