// Card prefab component (exported to public API).

import styled from "styled-components";

import { Flex } from "../Layout/Layout";
import theme from "../../constants/theme";

const Card = styled(Flex)`
  box-shadow: ${theme.shadows.main};
  border-radius: 8px;
  padding: 10px;
`;

export default Card;
