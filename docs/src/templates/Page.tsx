import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import { Grid, Row, Col } from "shakti";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Navigation from "../components/Navigation";
import theme, { ITheme } from "../constants/theme";

const shortcodes = { Link };

export const pageQuery = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        path
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }: ITheme) => theme.colors.background};
    font-family: Arial, Helvetica, sans-serif;
  }
`;

/**
 * Documentation page template
 */
const Page = ({ data: { mdx } }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Grid>
        <Row>
          <Col size={1}>
            <Navigation />
          </Col>

          <Col size={3}>
            <h1>{mdx.frontmatter.title}</h1>

            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </Col>
        </Row>
      </Grid>
    </ThemeProvider>
  );
};

export default Page;
