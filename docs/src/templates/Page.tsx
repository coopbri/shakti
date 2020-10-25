import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import { Grid, Row, Col } from "shakti";

import Navigation from "../components/Navigation";

const shortcodes = { Link };

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
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
 * Page template
 */
const Page = ({ data: { mdx } }) => {
  return (
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
  );
};

export default Page;
