import React from "react";
import { Flex } from "shakti";
import styled from "styled-components";

const Alert = ({ children }) => {
  return <Card>{children}</Card>;
};

const Card = styled(Flex)`
  box-shadow: ${({ theme }) => theme.shadows.main};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 8px;
  text-align: ${({ alignEnd }) => alignEnd && "end"};
  padding: 0 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export default Alert;
