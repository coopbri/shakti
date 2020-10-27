import React from "react";
import { Link } from "gatsby";
import { Flex, Text } from "shakti";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * Navigation card
 */
const NavCard = (props: any) => {
  return (
    <Link to={props.path}>
      <Card mx={10} {...props}>
        {props.alignEnd && <LeftChevron size="2em" />}

        <Flex flexCol>
          <Title mb={0}>{props.title}</Title>
          <Body mt={4}>{props.text}</Body>
        </Flex>

        {props.alignStart && <RightChevron size="2em" />}
      </Card>
    </Link>
  );
};

const LeftChevron = styled(FaChevronLeft)`
  align-self: center;
  padding-left: 15px;
`;

const RightChevron = styled(FaChevronRight)`
  align-self: center;
  padding-right: 15px;
`;

const Card = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 8px;
  min-width: 180px;
  justify-content: space-between;

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
