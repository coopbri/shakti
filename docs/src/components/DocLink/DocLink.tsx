import styled from "styled-components";
import { Link } from "gatsby";

/**
 * Divider between logical sections in navigation menu
 */
const Divider = styled(Link)`
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export default Divider;
