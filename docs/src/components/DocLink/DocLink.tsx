import styled from "styled-components";
import { Link } from "gatsby";

/**
 * Client-side link for documentation
 */
const DocLink = styled(Link)`
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export default DocLink;
