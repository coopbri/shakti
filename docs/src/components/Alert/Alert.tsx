import React from "react";
import { Flex, Text } from "shakti-lib";
import styled from "styled-components";

const Alert = ({ children }) => {
  return (
    <Card>
      <Text>{children} </Text>
    </Card>
  );
};

const Card = styled(Flex)`
  box-shadow: ${({ theme }) => theme.shadows.main};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 8px;
  text-align: ${({ alignEnd }) => alignEnd && "end"};
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.background};
`;

export default Alert;
