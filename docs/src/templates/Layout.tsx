import React, { useEffect, useRef, useState } from "react";
import { graphql, navigate } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import {
  Grid,
  Row,
  Col,
  View,
  Text,
  useWindowQuery,
  breakpoints,
  Flex,
} from "shakti";
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
import NavCard from "../components/NavCard";

const shortcodes = {
  Link,
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
  a {
    text-decoration: none;
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 4px;
  }

  a {
    color: ${({ theme }) => theme.colors.red};
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

/**
 * Layout template
 */
const Layout = ({ location, data: { mdx }, pageContext }) => {
  // open/closed state of navigation menu
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const { previous, next } = pageContext;

  // height of header bar
  const [headerHeight, setHeaderHeight] = useState<number>(null);

  // refs
  const headerRef = useRef<HTMLDivElement>();
  const navRef = useRef<HTMLDivElement>();

  // check if viewport is `sm`
  const isSmall = useWindowQuery("WidthBelow", breakpoints.sm);

  // set navOpen state based on viewport width
  useEffect(() => {
    isSmall ? setNavOpen(false) : setNavOpen(true);
  }, [isSmall]);

  // set header height value
  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
  }, [isSmall]);

  // close nav if clicked/pressed outside of it when it is open
  useEffect(() => {
    // click handler
    const handleClickOutside = (event) => {
      // verify nav is open and component exists
      if (
        navOpen &&
        isSmall &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setNavOpen(false);
      }
    };

    // add click event listener
    document.addEventListener("click", handleClickOutside, false);

    // cleanup: remove click event listener
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [navOpen]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Grid>
        <HeaderRow
          ref={headerRef}
          py={isSmall ? 5 : 0}
          bgColor={theme.colors.background}
        >
          {isSmall && (
            <Col ml={15}>
              <MenuButton
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              />
            </Col>
          )}
          <Col alignCenter>
            <HeaderText
              my={isSmall ? 8 : 14}
              color={theme.colors.text}
              isSmall={isSmall}
            >
              SHAKTI
            </HeaderText>
          </Col>
          {isSmall && <Col></Col>}
        </HeaderRow>
        <Row>
          <NavigatorCol
            ref={navRef}
            open={navOpen}
            headerHeight={headerHeight}
            isSmall={isSmall}
            size={1}
            alignCenter
            pt={10}
            pl={isSmall ? 10 : 20}
            pr={isSmall ? 10 : 20}
          >
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

          <ContentCol size={3} mx={25} mt={15}>
            <h1>{mdx.frontmatter.title}</h1>

            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </ContentCol>
        </Row>
        <Row my={15} mx={15} flexCol={isSmall}>
          {previous === false ? null : (
            <Col>
              {previous && (
                <NavCard
                  title="Previous"
                  path={previous.node.frontmatter.path}
                  text={previous.node.frontmatter.title}
                  alignEnd
                  pr={15}
                />
              )}
            </Col>
          )}

          {next === false ? null : (
            <Col mt={isSmall && 10}>
              {next && (
                <NavCard
                  title="Next"
                  path={next.node.frontmatter.path}
                  text={next.node.frontmatter.title}
                  alignStart
                  pl={15}
                />
              )}
            </Col>
          )}
        </Row>
      </Grid>
    </ThemeProvider>
  );
};

const HeaderRow = styled(Row)`
  position: sticky;
  top: 0;
`;

const HeaderText = styled(Text)<{ isSmall?: boolean }>`
  letter-spacing: 6px;
  font-size: ${({ isSmall }) => (isSmall ? "18px" : "22px")};
  font-weight: bold;
`;

const NavigatorCol = styled(Col)<{
  open?: boolean;
  isSmall?: boolean;
  headerHeight?: number;
}>`
  display: ${(props) => (props.open ? "block" : "none")};
  border-right: 1px solid ${({ theme }) => theme.colors.lightgray};
  min-width: 200px;
  max-width: 200px;
  background-color: ${({ theme }) => theme.colors.background};

  height: calc(100% - ${({ headerHeight }) => headerHeight}px);
  position: ${({ isSmall }) => (isSmall ? "fixed" : "sticky")};
  top: ${({ headerHeight }) => headerHeight}px;
  overflow: auto;
`;

const LogoContainer = styled(View)`
  min-width: 150px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};

  &:hover {
    cursor: pointer;
  }
`;

const ContentCol = styled(Col)`
  min-width: 0;
`;

export default Layout;
