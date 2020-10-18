import styled from "styled-components";

import { baseStyles } from "../../constants";

/**
 * Base div for composition of higher-order layout components.
 * @param m {number} margin
 * @param p {number} padding
 * @param mx {number} margin along x-axis
 * @param my {number} margin along y-axis
 */
export const BaseDiv = styled.div<{
  m?: number;
  p?: number;
  mx?: number;
  my?: number;
}>`
  ${baseStyles}
`;
