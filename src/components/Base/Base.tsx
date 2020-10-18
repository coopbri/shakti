import styled from "styled-components";

import { baseStyles } from "../../constants";

/**
 * Interface for base HTML tag props.
 * @param m {number} margin
 * @param p {number} padding
 * @param mx {number} margin along x-axis
 * @param my {number} margin along y-axis
 */
export interface IProps {
  m?: number;
  p?: number;
  mx?: number;
  my?: number;
}

/**
 * Base div tag for composition of higher-order layout components.
 */
export const BaseDiv = styled.div<IProps>`
  ${baseStyles}
`;

/**
 * Base p tag for composition of higher-order text components.
 */
export const BaseP = styled.p<IProps>`
  ${baseStyles}
`;
