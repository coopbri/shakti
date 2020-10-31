import React from "react";
import { render, screen } from "@testing-library/react";

import { Grid, Row, Col, View, Flex } from "./Layout";

describe("Layout", () => {
  test("renders Grid", () => {
    const { container } = render(<Grid></Grid>);
    expect(container).toBeInTheDocument();
  });

  test("renders Row", () => {
    const { container } = render(<Row></Row>);
    expect(container).toBeInTheDocument();
  });

  test("renders Col", () => {
    const { container } = render(<Col></Col>);
    expect(container).toBeInTheDocument();
  });

  test("renders View", () => {
    const { container } = render(<View></View>);
    expect(container).toBeInTheDocument();
  });

  test("renders Flex", () => {
    const { container } = render(<Flex></Flex>);
    expect(container).toBeInTheDocument();
  });
});
