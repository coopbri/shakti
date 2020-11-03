import React from "react";
import { Flex, Text } from "shakti-lib";
import styled from "styled-components";
import { Link } from "gatsby";

import { Logo } from "../components";
import { theme } from "../constants";

/**
 * HTML code 404 (not found) page
 */
const NotFound = () => {
  return (
    <Flex justifyCenter>
      <Container
        flexCol
        textCenter
        justifyCenter
        minHeight="90vh"
        maxWidth={400}
      >
        <Logo />

        <Text size="2rem" color={theme.colors.darkGray}>
          404 | not found
        </Text>

        <HomeLink to="/" theme={theme}>
          <Text size="1.2rem">take me home</Text>
        </HomeLink>
      </Container>
    </Flex>
  );
};

const Container = styled(Flex)`
  font-family: "Noto Sans JP", Arial, Helvetica, sans-serif;
`;

const HomeLink = styled(Link)<{ theme }>`
  text-decoration: none;
  color: ${theme.colors.red};

  &:hover {
    color: ${theme.colors.darkGray};
  }
`;

export default NotFound;
