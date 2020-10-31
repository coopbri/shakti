import React from "react";
import { Link } from "gatsby";
import { Flex, Text } from "shakti-lib";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * Navigation card
 */
const NavCard = (props: any) => {
  return (
    <Link to={props.path}>
      <Card mx={5} {...props}>
        {props.alignEnd && <LeftChevron size="2em" />}

        <Flex flexCol>
          <Title mt={6} mb={0}>
            {props.title}
          </Title>
          <Body mt={4} mb={6}>
            {props.text}
          </Body>
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
  box-shadow: ${({ theme }) => theme.shadows.main};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  min-width: 180px;
  justify-content: space-between;
  text-align: ${({ alignEnd }) => alignEnd && "end"};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Body = styled(Text)`
  font-size: 26px;
`;

export default NavCard;
