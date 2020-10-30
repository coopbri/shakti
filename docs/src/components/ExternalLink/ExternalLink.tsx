import styled from "styled-components";

/**
 * External link for documentation
 */
const ExternalLink = styled.a`
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export default ExternalLink;
