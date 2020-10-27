import React from "react";
import { Link } from "gatsby";
import { Flex, Text } from "shakti";
import styled from "styled-components";

/**
 * Navigation card
 */
const NavCard = (props: any) => {
  return (
    <Link to={props.path}>
      <Card flexCol mx={10} {...props}>
        <Title mb={0}>{props.title}</Title>
        <Body mt={4}>{props.text}</Body>
      </Card>
    </Link>
  );
};

const Card = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 8px;
  min-width: 180px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgray};
  }
`;

const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.darkgray};
`;

const Body = styled(Text)`
  font-size: 28px;
`;

export default NavCard;
