import styled from "styled-components";
import { View } from "shakti";

/**
 * Divider between logical sections in navigation menu
 */
const Divider = styled(View)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export default Divider;
