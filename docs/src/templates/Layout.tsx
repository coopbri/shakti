import React from "react";
import { graphql, navigate } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import { Grid, Row, Col, View } from "shakti";
import styled, {
  createGlobalStyle,
  css,
  ThemeProps,
  ThemeProvider,
} from "styled-components";

import Logo from "../components/Logo";
import CodeBlock from "../components/CodeBlock";
import Navigation from "../components/Navigation";
import theme, { ITheme } from "../constants/theme";

const shortcodes = {
  link: Link,
  pre: CodeBlock,
};

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
    font-size: 18px;
  }


`;

/**
 * Layout template
 */
const Layout = ({ location, data: { mdx } }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Grid px={50}>
        <Row>
          <NavigatorCol size={1} alignCenter mr={50} pr={20} hide="sm">
            <LogoContainer
              pb={20}
              onClick={() => {
                navigate("/");
              }}
            >
              <Logo />
            </LogoContainer>

            <Navigation location={location} />
          </NavigatorCol>

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

const NavigatorCol = styled(Col)`
  border-right: 1px solid ${({ theme }) => theme.colors.accent};
  min-width: 200px;
  max-width: 200px;
`;

const LogoContainer = styled(View)`
  min-width: 150px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};

  &:hover {
    cursor: pointer;
  }
`;

export default Layout;
