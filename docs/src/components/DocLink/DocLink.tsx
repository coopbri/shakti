import styled from "styled-components";
import { Link } from "gatsby";

/**
 * Divider between logical sections in navigation menu
 */
const DocLink = styled(Link)`
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export default DocLink;
