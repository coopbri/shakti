import styled from "styled-components";
import { Flex } from "shakti-lib";

const Card = styled(Flex)<{ color: string }>`
  box-shadow: ${({ theme }) => theme.shadows.main};
  background-color: ${({ color }) => color};
  border-radius: 8px;
  text-align: ${({ alignEnd }) => alignEnd && "end"};
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.background};
`;

export default Card;
