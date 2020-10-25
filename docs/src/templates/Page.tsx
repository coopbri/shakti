import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import { Grid, Row, Col } from "shakti";
import {
  createGlobalStyle,
  css,
  ThemeProps,
  ThemeProvider,
} from "styled-components";

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

/**
 * Reset to clear browser CSS defaults, merged into global styles
 */
const cssReset = css`
  ul {
    list-style: none;
    padding-left: 0;
  }
`;

/**
 * Global CSS styles
 */
const GlobalStyle = createGlobalStyle`
  ${cssReset}
  body {
    background-color: ${({ theme }: ThemeProps<ITheme>) =>
      theme.colors.background};
    color: ${({ theme }: ThemeProps<ITheme>) => theme.colors.text};
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
      <Grid px={50}>
        <Row>
          <Col size={1} alignCenter>
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
