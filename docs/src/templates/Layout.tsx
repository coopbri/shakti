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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 4px;
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
  // open/closed state of navigation menu
  const [navOpen, setNavOpen] = useState<boolean>(false);

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
          bgColor={theme.colors.text}
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
              color={theme.colors.background}
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

          <ContentCol size={3} mx={20}>
            <h1>{mdx.frontmatter.title}</h1>

            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </ContentCol>
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
  border-right: 1px solid ${({ theme }) => theme.colors.accent};
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};

  &:hover {
    cursor: pointer;
  }
`;

const ContentCol = styled(Col)`
  min-width: 0;
`;

export default Layout;
