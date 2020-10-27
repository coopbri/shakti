import React, { useEffect, useState } from "react";
import { graphql, navigate } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import { Grid, Row, Col, View, useWindowQuery, breakpoints } from "shakti";
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
import MenuButton from "../components/MenuButton";

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
  html,
  body {
    margin: 0;
    padding: 0;
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
  const [navOpen, setNavOpen] = useState<boolean>(true);

  const isSmall = useWindowQuery("WidthBelow", breakpoints.sm);

  useEffect(() => {
    isSmall ? setNavOpen(false) : setNavOpen(true);
  }, [isSmall]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Grid>
        <Row
          pt={isSmall ? 10 : 30}
          pb={isSmall ? 5 : 30}
          bgColor={theme.colors.text}
        >
          <Col hidden showBelow="sm" ml={15}>
            <MenuButton
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            />
          </Col>
        </Row>
        <Row>
          <NavigatorCol open={navOpen} size={1} alignCenter pr={20}>
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

          <Col size={3} mx={20}>
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

const NavigatorCol = styled(Col)<{ open?: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
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
