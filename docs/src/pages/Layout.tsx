import React, { useEffect, useRef, useState } from "react";
import { graphql, navigate } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  Grid,
  Row,
  Col,
  View,
  Text,
  useWindowQuery,
  breakpoints,
  Flex,
} from "shakti-lib";
import styled, { ThemeProvider } from "styled-components";
import { HiOutlineMenu } from "react-icons/hi";

import {
  Alert,
  Logo,
  CodeBlock,
  CodeFragment,
  DocLink,
  ExternalLink,
  GlobalStyle,
  NavMenu,
  NavCard,
  PropTable,
  Remark,
  SEO,
} from "../components";
import { theme } from "../constants";

// context for MDX files: these components can be used without importing in MDX
const shortcodes = {
  // component context
  Alert,
  DocLink,
  ExternalLink,
  PropTable,
  Remark,
  Text,
  // syntax highlighting
  pre: CodeBlock,
  code: CodeFragment,
};

/**
 * MDX documentation page query
 */
export const pageQuery = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        path
      }
    }
  }
`;

/**
 * Layout template
 */
const Layout = ({ location, data: { mdx }, pageContext }) => {
  // open/closed state of navigation menu
  const [navOpen, setNavOpen] = useState<boolean>(false);

  // previous and next page for navigation buttons
  const { previous, next } = pageContext;

  // height of header bar
  const [headerHeight, setHeaderHeight] = useState<number>(null);

  // refs
  const headerRef = useRef<HTMLDivElement>();
  const navRef = useRef<HTMLDivElement>();

  // check if viewport is `sm`
  const isSmall =
    // verify browser environment
    typeof window !== "undefined"
      ? useWindowQuery("WidthBelow", breakpoints.sm)
      : undefined;
  const isExtraLarge =
    // verify browser environment
    typeof window !== "undefined"
      ? useWindowQuery("WidthAbove", breakpoints.xl)
      : undefined;

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
    <>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
      />
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
                  size="2.5em"
                  onClick={() => {
                    setNavOpen(!navOpen);
                  }}
                  open={navOpen}
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
            <NavCol
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
                mb={8}
                onClick={() => {
                  navigate("/");
                }}
              >
                <Logo />
              </LogoContainer>

              <NavMenu location={location} />

              <Copyright mt={0} mb={10} size={16}>
                <CopyrightLink
                  href="https://github.com/coopbri/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &copy; Brian Cooper
                </CopyrightLink>
              </Copyright>
            </NavCol>

            <ContentCol size={3} mx={isSmall ? 10 : 25} mt={15}>
              <h1>{mdx.frontmatter.title}</h1>

              <MDXProvider components={shortcodes}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </MDXProvider>
              <Flex my={15} mx={15} flexCol={isSmall}>
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
              </Flex>
            </ContentCol>

            {/* add spacing column if viewport is extra large */}
            {isExtraLarge && <Col size={1}></Col>}
          </Row>
        </Grid>
      </ThemeProvider>
    </>
  );
};

const HeaderRow = styled(Row)`
  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: ${({ theme }) => theme.shadows.main};
`;

const HeaderText = styled(Text)<{ isSmall?: boolean }>`
  letter-spacing: 6px;
  font-size: ${({ isSmall }) => (isSmall ? "18px" : "22px")};
  font-weight: bold;
`;

const MenuButton = styled(HiOutlineMenu)<{ open?: boolean }>`
  color: ${({ open, theme }) => open && theme.colors.red};
`;

const NavCol = styled(Col)<{
  open?: boolean;
  isSmall?: boolean;
  headerHeight?: number;
}>`
  z-index: 1;
  display: ${(props) => (props.open ? "flex" : "none !important")};
  border-right: 1.5px solid ${({ theme }) => theme.colors.lightGray};
  min-width: 200px;
  max-width: 200px;
  background-color: ${({ theme }) => theme.colors.background};

  height: calc(100% - ${({ headerHeight }) => headerHeight}px);
  position: ${({ isSmall }) => (isSmall ? "fixed" : "sticky")};
  top: ${({ headerHeight }) => headerHeight}px;
  overflow: auto;

  border-image-source: ${({ theme }) => `linear-gradient(
    20deg,
    ${theme.colors.blue},
    ${theme.colors.red},
    ${theme.colors.purple}
  )`};
  border-image-slice: 1;
`;

const Copyright = styled(Text)`
  color: ${({ theme }) => theme.colors.darkGray};
`;

const CopyrightLink = styled(ExternalLink)`
  color: ${({ theme }) => theme.colors.darkGray};

  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const LogoContainer = styled(View)`
  min-width: 150px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  transition: opacity 0.5s ease-out;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.5s ease-out;
  }
`;

const ContentCol = styled(Col)`
  min-width: 0;
`;

export default Layout;
